import { content } from "./content.js?v=3";

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
              ${AvailabilityCard()}
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
    children: `<h1 class="hero-title">${profile.name.split(" ").join("<br />")}</h1>`,
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
    children: `<p class="body">${profile.intro}</p>`,
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
    <a class="project-card work-image-card" href="#project/${project.slug}" aria-label="Open ${project.title} project details">
      <div class="project-media">
        <img src="${project.image}" alt="${project.title}" />
      </div>
      <div class="project-card-body">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tags" aria-label="${project.title} technologies">
          ${visibleTags.map((tag) => `<span>${tag}</span>`).join("")}
          ${extraCount ? `<span>+${extraCount}</span>` : ""}
        </div>
      </div>
    </a>
  `;
}

function ProjectDetailPage(project) {
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
          <a class="visit-link" href="${project.url}" target="_blank" rel="noreferrer">
            Visit Site ${arrow}
          </a>
        </section>
        <div class="project-tags detail-tags">
          ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
        <div class="project-visual">
          <img src="${project.image}" alt="${project.title}" />
        </div>
        ${ProjectTextSection("Overview", project.overview)}
        ${ProjectTextSection("The Problem", project.problem)}
        ${ProjectTextSection("The Solution", project.solution)}
        ${ProjectCardGrid("Key Features", project.features)}
        ${ProjectCardGrid("Results & Impact", project.impact)}
      </main>
    </div>
  `;
}

function ProjectTextSection(title, text) {
  return `
    <section class="project-text-section">
      <h2>${title}</h2>
      <p>${text}</p>
    </section>
  `;
}

function ProjectCardGrid(title, items) {
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

function AvailabilityCard() {
  return Card({
    className: "availability-card",
    children: `
      <span class="availability-dot" aria-hidden="true"></span>
      <p class="availability-text">${labels.availability}</p>
    `,
  });
}

function ContactCard() {
  return Card({
    className: "contact-card",
    id: "contact",
    children: `
      <h2 class="heading-3">${labels.contact}</h2>
      <form class="contact-form">
        <div class="form-field">
          <label class="body body-muted" for="name">${contact.nameLabel}</label>
          <input class="input" id="name" type="text" value="${contact.name}" />
        </div>
        <div class="form-field">
          <label class="body body-muted" for="email">${contact.emailLabel}</label>
          <input class="input" id="email" type="${contact.emailInputType || "email"}" value="${contact.email}" />
        </div>
        <div class="form-field">
          <label class="body body-muted" for="message">${contact.messageLabel}</label>
          <textarea class="textarea" id="message">${contact.message}</textarea>
        </div>
        <button class="submit-button" type="button">${labels.submit}</button>
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
