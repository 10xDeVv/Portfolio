import { content } from "./content.js?v=41";
import { appTemplate } from "./components.js?v=41";

document.body.classList.add("js-enabled");
document.title = content.site.title;

const root = document.querySelector("#app");

function render() {
  root.innerHTML = appTemplate();

  requestAnimationFrame(() => {
    document.body.classList.add("is-ready");
  });

  setupReveal();
  setupAnchorLinks();
  setupElasticEffects();
  setupMenu();
  setupContactForm();
  setupSystemExplorer();
  setupMermaidDiagrams().then(setupDiagramPan);
  setupResponsiveProjectDetails();
  restoreAnchorScroll();
}

function setupReveal() {
  const revealTargets = document.querySelectorAll(
    [
      ".project-card",
      ".toolbox-card",
      ".quote-card",
      ".contact-card",
      ".project-visual",
      ".project-story-card",
      ".project-detail-card",
      ".project-metric-card",
      ".project-system-section",
      ".route-simulation-section",
      ".decision-drawer",
      ".failure-card",
      ".proof-column",
      ".project-bullet-list li",
    ].join(", ")
  );

  revealTargets.forEach((target) => target.classList.add("reveal-on-scroll"));

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.14,
      }
    );

    revealTargets.forEach((target) => revealObserver.observe(target));
    return;
  }

  revealTargets.forEach((target) => target.classList.add("is-visible"));
}

function setupAnchorLinks() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      if (targetId.startsWith("#project/")) {
        return;
      }

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      window.history.pushState(null, "", targetId);
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      closeMenu();
    });
  });
}

function setupMenu() {
  const menuButton = document.querySelector(".menu-icon");
  const header = document.querySelector(".navbar");

  menuButton?.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

function setupContactForm() {
  const form = document.querySelector(".contact-form");
  if (!form) return;

  const error = form.querySelector("#contact-form-error");
  const nameField = form.elements.namedItem("name");
  const messageField = form.elements.namedItem("message");

  const showError = (message, invalidFields) => {
    invalidFields.forEach((field) => field?.setAttribute("aria-invalid", "true"));
    if (!error) return;

    error.textContent = message;
    error.hidden = false;
    error.focus();
  };

  const clearError = () => {
    [nameField, messageField].forEach((field) => field?.removeAttribute("aria-invalid"));
    if (!error) return;

    error.textContent = "";
    error.hidden = true;
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const contact = String(data.get("contact") || "").trim();
    const message = String(data.get("message") || "").trim();
    const missingFields = [
      !name && { label: "name", field: nameField },
      !message && { label: "message", field: messageField },
    ].filter(Boolean);

    if (missingFields.length) {
      const missingLabels = missingFields.map((item) => item.label).join(" and ");
      showError(
        `Please enter your ${missingLabels} before opening your email client.`,
        missingFields.map((item) => item.field)
      );
      return;
    }

    clearError();

    const recipient = form.dataset.recipient || "adebowale.ca@gmail.com";
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(
      [`Name: ${name}`, `Best contact: ${contact || "Not provided"}`, "", message].join("\n")
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  });
}

function setupSystemExplorer() {
  const explorer = document.querySelector("[data-system-explorer]");
  if (!explorer) return;

  const slug = window.location.hash.match(/^#project\/([a-z0-9-]+)$/i)?.[1];
  const project = content.projects.find((item) => item.slug === slug);
  if (!project?.systemFlow?.length) return;

  const nodes = [...explorer.querySelectorAll("[data-system-index]")];
  const panel = explorer.querySelector(".system-panel");

  const renderStep = (index) => {
    const step = project.systemFlow[index];
    if (!step || !panel) return;

    nodes.forEach((node) => {
      node.classList.toggle("is-active", Number(node.dataset.systemIndex) === index);
    });

    panel.innerHTML = `
      <p class="system-panel-eyebrow">${step.eyebrow}</p>
      <h3>${step.title}</h3>
      <p>${step.detail}</p>
      <div class="system-stack">
        ${step.stack.map((item) => `<span>${item}</span>`).join("")}
      </div>
    `;
  };

  nodes.forEach((node) => {
    const index = Number(node.dataset.systemIndex);
    node.addEventListener("click", () => renderStep(index));
    node.addEventListener("mouseenter", () => renderStep(index));
  });
}

async function setupMermaidDiagrams() {
  const diagrams = [...document.querySelectorAll(".mermaid")];
  if (!diagrams.length) return;

  try {
    const mermaid = (await import("https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs")).default;

    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "strict",
      theme: "dark",
      themeVariables: {
        background: "#0a0a0a",
        mainBkg: "#121212",
        primaryColor: "#121212",
        primaryTextColor: "#ffffff",
        primaryBorderColor: "#343434",
        lineColor: "#8f8f8f",
        edgeLabelBackground: "#050505",
        fontFamily: "Instrument Sans, Inter, system-ui, sans-serif",
      },
    });

    await mermaid.run({ nodes: diagrams });
  } catch (error) {
    document.querySelectorAll(".architecture-diagram").forEach((diagram) => {
      diagram.classList.add("is-static");
    });
  }
}

function setupDiagramPan() {
  document.querySelectorAll(".architecture-diagram").forEach((diagram) => {
    const svg = diagram.querySelector("svg");
    const resetButton = diagram.querySelector('[data-diagram-zoom="reset"]');
    const baseWidth = diagram.classList.contains("lifecycle-diagram") ? 1320 : 1180;
    let zoom = 1;
    let startX = 0;
    let startY = 0;
    let scrollLeft = 0;
    let scrollTop = 0;
    let isDragging = false;

    const applyZoom = (nextZoom) => {
      if (!svg) return;
      const centerX = (diagram.scrollLeft + diagram.clientWidth / 2) / Math.max(diagram.scrollWidth, 1);
      const centerY = (diagram.scrollTop + diagram.clientHeight / 2) / Math.max(diagram.scrollHeight, 1);
      zoom = Math.min(2.2, Math.max(0.65, nextZoom));
      svg.style.setProperty("width", `${Math.round(baseWidth * zoom)}px`, "important");
      svg.style.maxWidth = "none";
      if (resetButton) resetButton.textContent = `${Math.round(zoom * 100)}%`;
      requestAnimationFrame(() => {
        diagram.scrollLeft = diagram.scrollWidth * centerX - diagram.clientWidth / 2;
        diagram.scrollTop = diagram.scrollHeight * centerY - diagram.clientHeight / 2;
      });
    };

    applyZoom(1);

    diagram.querySelectorAll("[data-diagram-zoom]").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        const action = button.dataset.diagramZoom;
        if (action === "in") applyZoom(zoom + 0.2);
        if (action === "out") applyZoom(zoom - 0.2);
        if (action === "reset") applyZoom(1);
      });
    });

    diagram.addEventListener(
      "wheel",
      (event) => {
        if (!event.ctrlKey && !event.metaKey) return;
        event.preventDefault();
        applyZoom(zoom + (event.deltaY < 0 ? 0.12 : -0.12));
      },
      { passive: false }
    );

    diagram.addEventListener("pointerdown", (event) => {
      if (event.button !== 0 || event.target.closest(".diagram-controls")) return;
      isDragging = true;
      diagram.classList.add("is-panning");
      startX = event.clientX;
      startY = event.clientY;
      scrollLeft = diagram.scrollLeft;
      scrollTop = diagram.scrollTop;
      diagram.setPointerCapture(event.pointerId);
    });

    diagram.addEventListener("pointermove", (event) => {
      if (!isDragging) return;
      event.preventDefault();
      diagram.scrollLeft = scrollLeft - (event.clientX - startX);
      diagram.scrollTop = scrollTop - (event.clientY - startY);
    });

    const stopPan = (event) => {
      if (!isDragging) return;
      isDragging = false;
      diagram.classList.remove("is-panning");
      if (diagram.hasPointerCapture(event.pointerId)) diagram.releasePointerCapture(event.pointerId);
    };

    diagram.addEventListener("pointerup", stopPan);
    diagram.addEventListener("pointercancel", stopPan);
    diagram.addEventListener("pointerleave", stopPan);
  });
}

function setupResponsiveProjectDetails() {
  let compact = false;

  const apply = () => {
    const nextCompact = window.matchMedia("(max-width: 900px)").matches;
    if (nextCompact && !compact) {
      document.querySelectorAll(".decision-drawer").forEach((drawer) => {
        drawer.open = false;
      });
    }
    compact = nextCompact;
  };

  apply();
  window.addEventListener("resize", apply, { passive: true });
}

function closeMenu() {
  document.querySelector(".navbar")?.classList.remove("is-open");
  document.querySelector(".menu-icon")?.setAttribute("aria-expanded", "false");
}

function restoreAnchorScroll() {
  if (window.location.hash === "#work" || window.location.hash === "#contact" || window.location.hash === "#about") {
    requestAnimationFrame(() => {
      document.querySelector(window.location.hash)?.scrollIntoView({ block: "start" });
    });
  }
}

function createElasticTracker(element, handlers = {}) {
  const speed = handlers.speed ?? 0.11;
  const maxStretch = handlers.maxStretch ?? 0.18;
  const target = { x: 0, y: 0 };
  const previousTarget = { x: 0, y: 0 };
  const current = { x: 0, y: 0 };
  let currentScale = 0;
  let currentAngle = 0;
  let frame = 0;
  let active = false;
  let initialized = false;

  const tick = () => {
    current.x += (target.x - current.x) * speed;
    current.y += (target.y - current.y) * speed;

    const deltaX = target.x - previousTarget.x;
    const deltaY = target.y - previousTarget.y;
    previousTarget.x = target.x;
    previousTarget.y = target.y;

    const velocity = Math.min(Math.sqrt(deltaX ** 2 + deltaY ** 2) * 3, 120);
    const scaleTarget = (velocity / 150) * maxStretch;
    currentScale += (scaleTarget - currentScale) * speed;

    if (velocity > 18) {
      currentAngle = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;
    }

    handlers.onFrame?.({
      angle: currentAngle,
      scale: currentScale,
      x: current.x,
      y: current.y,
    });

    const distance = Math.hypot(target.x - current.x, target.y - current.y);
    if (active || distance > 0.1 || currentScale > 0.001) {
      frame = requestAnimationFrame(tick);
      return;
    }

    frame = 0;
  };

  const move = (event) => {
    const rect = element.getBoundingClientRect();
    target.x = event.clientX - rect.left;
    target.y = event.clientY - rect.top;

    if (!initialized) {
      current.x = target.x;
      current.y = target.y;
      previousTarget.x = target.x;
      previousTarget.y = target.y;
      initialized = true;
    }

    active = true;
    handlers.onMove?.(event);

    if (!frame) {
      frame = requestAnimationFrame(tick);
    }
  };

  element.addEventListener("pointerenter", (event) => {
    handlers.onEnter?.(event);
    move(event);
  });

  element.addEventListener("pointermove", move);

  element.addEventListener("pointerleave", (event) => {
    active = false;
    initialized = false;
    handlers.onLeave?.(event);
  });
}

function setupElasticEffects() {
  document.querySelectorAll(".card, .project-card, .project-detail-card, .project-visual").forEach((card) => {
    createElasticTracker(card, {
      speed: 0.1,
      maxStretch: 0.16,
      onFrame({ angle, scale, x, y }) {
        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
        card.style.setProperty("--glow-angle", `${angle}deg`);
        card.style.setProperty("--glow-scale-x", String(1 + scale));
        card.style.setProperty("--glow-scale-y", String(1 - scale));
      },
    });
  });

  const portraitCard = document.querySelector(".portrait-card");

  if (portraitCard) {
    createElasticTracker(portraitCard, {
      speed: 0.13,
      maxStretch: 0.22,
      onEnter() {
        portraitCard.classList.add("is-coloring");
      },
      onMove() {
        portraitCard.classList.add("is-coloring");
      },
      onFrame({ scale, x, y }) {
        const rect = portraitCard.getBoundingClientRect();
        const baseRadius = Math.min(Math.max(rect.width * 0.22, 90), 250);
        portraitCard.style.setProperty("--portrait-x", `${x}px`);
        portraitCard.style.setProperty("--portrait-y", `${y}px`);
        portraitCard.style.setProperty("--portrait-rx", `${baseRadius * (1 + scale)}px`);
        portraitCard.style.setProperty("--portrait-ry", `${baseRadius * (1 - scale)}px`);
      },
      onLeave() {
        portraitCard.classList.remove("is-coloring");
      },
    });
  }
}

window.addEventListener("hashchange", () => {
  document.body.classList.remove("is-ready");
  render();
});

render();
