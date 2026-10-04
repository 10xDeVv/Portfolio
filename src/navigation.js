export function parseProjectRoute(hash) {
  const match = hash.match(/^#project\/([a-z0-9-]+)(?:\/(benchmark))?$/i);
  return match ? { slug: match[1], targetId: match[2] ? "project-metrics" : null } : null;
}

export function setupReadingNavigation(root) {
  const header = root.querySelector(".nav-shell");
  const main = root.querySelector("main");
  const links = [...root.querySelectorAll('.nav-links a[href^="#"]')];
  const progress = root.querySelector(".reading-progress");
  const fill = progress?.querySelector("span");
  const sections = links.map((link) => ({
    link,
    section: root.querySelector(link.getAttribute("href")),
  })).filter((item) => item.section);
  let frame = 0;
  let current = null;

  const update = () => {
    frame = 0;
    const pageEnd = document.documentElement.scrollHeight - window.innerHeight;
    const atEnd = pageEnd > 0 && window.scrollY >= pageEnd - 2;
    // The reading line sits just below the sticky navigation and anchor offset.
    const readingLine = header.offsetHeight + 25;
    const active = progress
      ? links.find((link) => link.getAttribute("href") === "#work")
      : (atEnd ? sections.at(-1) : sections.filter(({ section }) => section.getBoundingClientRect().top <= readingLine).at(-1) || sections[0])?.link;

    if (active !== current) {
      links.forEach((link) => {
        if (link === active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
      current = active;
    }

    if (progress) {
      const end = main.getBoundingClientRect().bottom + window.scrollY - window.innerHeight;
      const fraction = end > 0 ? Math.min(1, Math.max(0, window.scrollY / end)) : 1;
      fill.style.transform = `scaleX(${fraction})`;
      progress.setAttribute("aria-valuenow", String(Math.round(fraction * 100)));
    }
  };

  const schedule = () => {
    if (!frame) frame = requestAnimationFrame(update);
  };
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule, { passive: true });
  const observer = "ResizeObserver" in window ? new ResizeObserver(schedule) : null;
  observer?.observe(main);
  update();

  return () => {
    cancelAnimationFrame(frame);
    observer?.disconnect();
    window.removeEventListener("scroll", schedule);
    window.removeEventListener("resize", schedule);
  };
}
