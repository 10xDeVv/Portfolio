import { content } from "./content.js?v=14";

const {
  contact,
  experience,
  footer,
  labels,
  nav,
  profile,
  projects,
  socialLinks,
  tools,
} = content;

const arrow = `
  <svg class="arrow-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
`;
const linkAttrs = (href) =>
  href?.startsWith("#") ? "" : ' target="_blank" rel="noreferrer"';

const renderLinks = (links = [], className = "action-links") => {
  if (!links.length) return "";

  return `
    <div class="${className}">
      ${links.map((link) => `<a href="${link.href}"${linkAttrs(link.href)}>${link.label}</a>`).join("")}
    </div>
  `;
};


export function appTemplate() {
  const activeProject = getActiveProject();

  if (activeProject) {
    return ProjectDetailPage(activeProject);
  }

  return `
    <div class="app">
      ${Header()}
      <main class="main">
        <section class="hero">
          <div class="hero-grid">
            <div class="hero-left">
              <div class="hero-top">
                ${NameCard()}
                ${PortraitCard()}
              </div>
              <div class="hero-bottom">
                ${BioCard()}
              </div>
            </div>
            ${ExperienceCard()}
          </div>
        </section>
        ${FeaturedWork()}
        <section class="section more-section">
          <div class="more-grid">
            ${ToolboxCard()}
            ${QuoteCard()}
            <div class="contact-stack">
              ${ContactCard()}
            </div>
          </div>
        </section>
        ${Footer()}
      </main>
    </div>
  `;
}

function Header() {
  return `
    <header class="nav-shell">
      <nav class="navbar">
        <div class="nav-top">
          <a class="logo" href="#about"><em>${content.site.logo.italic}</em><strong>${content.site.logo.bold}</strong></a>
          <button class="menu-icon" type="button" aria-label="Toggle menu" aria-expanded="false">
            <span></span>
            <span></span>
          </button>
        </div>
        <div class="nav-links" aria-label="Primary">
          ${nav
            .map(
              (item) =>
                `<a href="${item.href}"${item.external ? ' target="_blank" rel="noreferrer"' : ""}>${item.label}</a>`
            )
            .join("")}
        </div>
      </nav>
    </header>
  `;
}

function Card({ className = "", id = "", children }) {
  const idAttr = id ? ` id="${id}"` : "";
  return `<section class="card ${className}"${idAttr}>${children}</section>`;
}

function NameCard() {
  return Card({
    className: "name-card card-gradient",
    id: "about",
    children: `
      <h1 class="hero-title">${profile.name.split(" ").join("<br />")}</h1>
      <div class="hero-meta" aria-label="Profile summary">
        ${profile.heroMeta.map((item) => `<span>${item}</span>`).join("")}
      </div>
    `,
  });
}

function PortraitCard() {
  return `
    <section class="portrait-card card" aria-label="${profile.portrait.alt}">
      <img class="portrait-gray" src="${profile.portrait.src}" alt="${profile.portrait.alt}" />
      <img class="portrait-color" src="${profile.portrait.src}" alt="" aria-hidden="true" />
    </section>
  `;
}

function BioCard() {
  return Card({
    className: "bio-card",
    children: `
      <div class="bio-copy">
        <p class="body">${profile.intro}</p>
        <p class="body body-muted">${profile.introDetail}</p>
      </div>
      <div class="proof-chip-list" aria-label="Engineering focus">
        ${profile.proofChips.map((chip) => `<span>${chip}</span>`).join("")}
      </div>
      <div class="hero-contact-strip">
        <p>Open to SWE internships</p>
        ${renderLinks(profile.contactLinks, "hero-contact-links")}
      </div>
    `,
  });
}


function ExperienceCard() {
  return Card({
    className: "experience-card",
    children: `
      <h2 class="heading-3">Experience</h2>
      <div class="experience-list">
        ${experience
          .map(
            (item) => `
              <article class="experience-item">
                <h3 class="heading-4">${item.role}</h3>
                <p class="heading-5">${item.company}</p>
                <p class="heading-6">${item.years}</p>
                ${ExperienceDetail(item.detail)}
              </article>
            `
          )
          .join("")}
      </div>
    `,
  });
}

function ExperienceDetail(detail) {
  if (Array.isArray(detail)) {
    return `
      <ul class="experience-bullets body body-muted description">
        ${detail.map((point) => `<li>${point}</li>`).join("")}
      </ul>
    `;
  }

  return `<p class="body body-muted description">${detail}</p>`;
}

function FeaturedWork() {
  return `
    <section class="section work-section" id="work">
      ${Card({
        className: "featured-work-card",
        children: `<h2 class="heading-2">${labels.featuredWork}</h2>`,
      })}
      <div class="project-grid">
        ${projects.map((project) => ProjectCard(project)).join("")}
      </div>
    </section>
  `;
}

function ProjectCard(project) {
  const visibleTags = project.tags.slice(0, 3);
  const extraCount = Math.max(project.tags.length - visibleTags.length, 0);

  return `
    <article class="project-card work-image-card" aria-label="${project.title} project">
      <a class="project-media" href="#project/${project.slug}" aria-label="Open ${project.title} case study">
        <img src="${project.image}" alt="${project.title}" />
        <span class="project-media-overlay">View Case Study ${arrow}</span>
      </a>
      <div class="project-card-body">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <p class="project-proof">${project.proof}</p>
        <div class="project-tags" aria-label="${project.title} technologies">
          ${visibleTags.map((tag) => `<span>${tag}</span>`).join("")}
          ${extraCount ? `<span>+${extraCount}</span>` : ""}
        </div>
        ${renderLinks(project.links, "project-action-links")}
      </div>
    </article>
  `;
}

function ProjectDetailPage(project) {
  const detailLinks = project.links.filter((link) => link.href !== `#project/${project.slug}`);

  return `
    <div class="project-page">
      <main class="project-detail">
        <a class="back-link" href="#work" aria-label="Back to projects">← Back to Projects</a>
        <section class="project-hero-detail">
          <div>
            <p class="project-eyebrow">${project.category}</p>
            <h1>${project.title}</h1>
            <p>${project.headline}</p>
          </div>
          ${renderLinks(detailLinks, "project-hero-links")}
        </section>
        <div class="project-tags detail-tags">
          ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
        <div class="project-visual">
          <img src="${project.image}" alt="${project.title}" />
        </div>
        ${ProjectStorySection(project)}
        ${ProjectMetricGrid(project.metrics)}
        ${ProjectSystemSection(project)}
        ${ProjectSimulationSection(project)}
        ${ProjectDecisionSection(project)}
        ${ProjectProofBoard(project)}
        ${ProjectBulletSection("Technical Contributions", project.resumeBullets)}
      </main>
    </div>
  `;
}

function ProjectStorySection(project) {
  const sections = [
    ["Overview", project.overview],
    ["The Problem", project.problem],
    ["The Solution", project.solution],
  ];

  return `
    <section class="project-story-section">
      ${sections
        .map(
          ([title, text], index) => `
            <details class="project-story-card" ${index === 0 ? "open" : "open"}>
              <summary>${title}</summary>
              <p>${text}</p>
            </details>
          `
        )
        .join("")}
    </section>
  `;
}

function ProjectCardGrid(title, items) {
  if (!items?.length) return "";

  return `
    <section class="project-detail-section">
      <h2>${title}</h2>
      <div class="project-detail-grid">
        ${items
          .map(
            (item) => `
              <article class="project-detail-card">
                <h3>${item.title}</h3>
                <p>${item.detail}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function ProjectArchitectureMap(project) {
  if (!project.mermaidDiagram) return "";

  return `
    <div class="architecture-diagram" aria-label="${project.title} architecture diagram">
      <pre class="mermaid">${project.mermaidDiagram}</pre>
    </div>
  `;
}

function ProjectSystemSection(project) {
  if (!project.systemFlow?.length) return "";

  const active = project.systemFlow[0];
  const architectureMap = ProjectArchitectureMap(project);

  return `
    <section class="project-detail-section project-system-section">
      <div class="project-section-heading">
        <p class="project-eyebrow">${project.systemEyebrow || "Interactive architecture"}</p>
        <h2>${project.systemTitle || `How ${project.title} works under load`}</h2>
      </div>
      <div class="system-explorer" data-system-explorer>
        <div class="system-flow" aria-label="${project.title} system flow">
          ${project.systemFlow
            .map(
              (step, index) => `
                <button class="system-node${index === 0 ? " is-active" : ""}" type="button" data-system-index="${index}">
                  <span class="system-node-number">${String(index + 1).padStart(2, "0")}</span>
                  <span>
                    <strong>${step.title}</strong>
                    <em>${step.eyebrow}</em>
                  </span>
                </button>
              `
            )
            .join("")}
        </div>
        <article class="system-panel">
          <p class="system-panel-eyebrow">${active.eyebrow}</p>
          <h3>${active.title}</h3>
          <p>${active.detail}</p>
          <div class="system-stack">
            ${active.stack.map((item) => `<span>${item}</span>`).join("")}
          </div>
        </article>
      </div>
      ${architectureMap}
      ${project.architectureNote ? `<p class="architecture-note">${project.architectureNote}</p>` : ""}
    </section>
  `;
}


function ProjectSimulationSection(project) {
  if (!project.routeSimulation?.length) return "";

  return `
    <section class="project-detail-section route-simulation-section">
      <div class="project-section-heading">
        <p class="project-eyebrow">${project.simulationEyebrow || "Execution trace"}</p>
        <h2>${project.simulationTitle || "What happens after the request starts"}</h2>
      </div>
      ${
        project.lifecycleDiagram
          ? `<div class="architecture-diagram lifecycle-diagram" aria-label="${project.title} lifecycle diagram">
              <pre class="mermaid">${project.lifecycleDiagram}</pre>
            </div>`
          : ""
      }
      <div class="route-simulation trace-layout" data-route-simulation>
        <div class="simulation-console">
          <div class="console-header">
            <span></span><span></span><span></span>
            <strong>${project.simulationLogTitle || "pipeline.log"}</strong>
          </div>
          <ol class="simulation-steps">
            ${project.routeSimulation.map((step, index) => `<li style="--step-index:${index}">${step}</li>`).join("")}
          </ol>
        </div>
        <aside class="trace-summary">
          <p class="project-eyebrow">End state</p>
          <strong>${project.simulationResult?.title || "request_complete"}</strong>
          <span>${project.simulationResult?.detail || "state persisted and users notified"}</span>
        </aside>
      </div>
    </section>
  `;
}

function ProjectDecisionSection(project) {
  if (!project.engineeringDecisions?.length && !project.failureModes?.length) return "";

  return `
    <section class="project-detail-section decision-section">
      <div class="project-section-heading decision-heading">
        <p class="project-eyebrow">Tradeoff notes</p>
        <h2>Decisions, tradeoffs, and stress cases</h2>
        <p>Skimmable by default. Open a decision when you want the reasoning behind the build.</p>
      </div>
      <div class="decision-layout">
        <div class="decision-drawers">
          ${(project.engineeringDecisions || [])
            .map(
              (item, index) => `
                <details class="decision-drawer"${index === 0 ? " open" : ""}>
                  <summary>
                    <span>${String(index + 1).padStart(2, "0")}</span>
                    <strong>${item.title}</strong>
                  </summary>
                  <div>
                    <p><b>Why</b>${item.why}</p>
                    <p><b>Tradeoff</b>${item.tradeoff}</p>
                  </div>
                </details>
              `
            )
            .join("")}
        </div>
        ${
          project.failureModes?.length
            ? `<aside class="failure-card">
                <p class="project-eyebrow">Handled failure modes</p>
                <h3>Stress-test checklist</h3>
                <ul>${project.failureModes.map((item) => `<li>${item}</li>`).join("")}</ul>
              </aside>`
            : ""
        }
      </div>
    </section>
  `;
}

function ProjectProofBoard(project) {
  const sections = [
    ["Architecture", project.architecture],
    ["Differentiators", project.differentiators],
    ["Features", project.features],
    ["Impact", project.impact],
  ].filter(([, items]) => items?.length);

  if (!sections.length) return "";

  return `
    <section class="project-detail-section proof-board-section">
      <div class="project-section-heading">
        <p class="project-eyebrow">Proof board</p>
        <h2>What to remember without reading every card</h2>
      </div>
      <div class="proof-board">
        ${sections
          .map(
            ([title, items]) => `
              <article class="proof-column">
                <header>
                  <span>${String(items.length).padStart(2, "0")}</span>
                  <h3>${title}</h3>
                </header>
                <div>
                  ${items
                    .map(
                      (item) => `
                        <details class="proof-note">
                          <summary>${item.title}</summary>
                          <p>${item.detail}</p>
                        </details>
                      `
                    )
                    .join("")}
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function ProjectMetricGrid(items) {
  if (!items?.length) return "";

  return `
    <section class="project-detail-section project-metrics-section">
      <h2>Repo Metrics</h2>
      <div class="project-metrics-grid">
        ${items
          .map(
            (item) => `
              <article class="project-metric-card">
                <strong>${item.value}</strong>
                <span>${item.label}</span>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function ProjectBulletSection(title, items) {
  if (!items?.length) return "";

  return `
    <section class="project-detail-section">
      <h2>${title}</h2>
      <ul class="project-bullet-list">
        ${items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </section>
  `;
}

function getActiveProject() {
  if (typeof window === "undefined") return null;

  const match = window.location.hash.match(/^#project\/([a-z0-9-]+)$/i);
  if (!match) return null;

  return projects.find((project) => project.slug === match[1]) || null;
}

function ToolboxCard() {
  const toolItems = tools.map((tool) => ToolIcon(tool)).join("");
  return Card({
    className: "toolbox-card",
    children: `
      <h2 class="heading-3">${labels.toolbox}</h2>
      <div class="toolbox-viewport" aria-label="Technologies">
        <div class="toolbox-marquee">
          <ul class="toolbox-icons">${toolItems}</ul>
          <ul class="toolbox-icons" aria-hidden="true">${toolItems}</ul>
        </div>
      </div>
    `,
  });
}

function ToolIcon(tool) {
  const label = typeof tool === "string" ? tool : tool.label;
  const icon = typeof tool === "string" ? "" : tool.icon;
  return `
    <li class="tool-icon" title="${label}" aria-label="${label}">
      ${icon ? `<i class="${icon}" aria-hidden="true"></i>` : ""}
      <span>${label}</span>
    </li>
  `;
}

function QuoteCard() {
  return Card({
    className: "quote-card",
    children: `
      <h2 class="quote-heading">${labels.motivation}</h2>
      <p class="quote-mark">"</p>
      <p class="quote-text">${content.quote}</p>
    `,
  });
}

function ContactCard() {
  return Card({
    className: "contact-card",
    id: "contact",
    children: `
      <h2 class="heading-3">${labels.contact}</h2>
      <p class="contact-intro body body-muted">${contact.detail}</p>
      <form class="contact-form" data-recipient="${contact.email}">
        <div class="form-field">
          <label class="body body-muted" for="name">${contact.nameLabel}</label>
          <input class="input" id="name" name="name" type="text" value="${contact.name}" />
        </div>
        <div class="form-field">
          <label class="body body-muted" for="email">${contact.emailLabel}</label>
          <input class="input" id="email" name="email" type="${contact.emailInputType || "email"}" value="${contact.emailDefault}" />
        </div>
        <div class="form-field">
          <label class="body body-muted" for="message">${contact.messageLabel}</label>
          <textarea class="textarea" id="message" name="message">${contact.message}</textarea>
        </div>
        <button class="submit-button" type="submit">${labels.submit}</button>
        <a class="resume-link" href="${profile.resume}" target="_blank" rel="noreferrer">${labels.resume}</a>
      </form>
    `,
  });
}

function Footer() {
  return `
    <footer class="footer">
      <div class="footer-grid">
        ${Card({
          className: "copyright-card",
          children: `<p class="body">${footer.copyright}</p>`,
        })}
        <div class="social-grid">
          ${socialLinks
            .map(
              (item) => `
                <a class="social-icon ${item.className}" href="${item.href || "#"}" target="_blank" rel="noreferrer" aria-label="${item.label}">
                  ${
                    item.iconClass
                      ? `<i class="${item.iconClass}" aria-hidden="true"></i>`
                      : `<img src="${item.icon}" alt="" aria-hidden="true" />`
                  }
                </a>
              `
            )
            .join("")}
        </div>
      </div>
    </footer>
  `;
}
