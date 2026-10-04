import { technicalDiagrams } from "./diagrams.js?v=1";
import { content } from "./content.js?v=57";
import { parseProjectRoute } from "./navigation.js?v=1";

const {
  contact,
  additionalProjects,
  experience,
  footer,
  highlights,
  labels,
  nav,
  profile,
  projects,
  socialLinks,
  tools,
} = content;

const arrow = `
  <svg class="arrow-icon" viewBox="0 0 48 48" aria-hidden="true">
    <path d="M10 24h27M27 14l10 10-10 10" />
  </svg>
`;

const linkAttrs = (href) => (href?.startsWith("#") ? "" : ' target="_blank" rel="noreferrer"');

const renderLinks = (links = [], className = "action-links") => {
  if (!links.length) return "";

  return `<div class="${className}">
    ${links
      .map((link) => `<a href="${link.href}"${linkAttrs(link.href)}>${link.label} ${arrow}</a>`)
      .join("")}
  </div>`;
};

function HeroContactActions() {
  return `
    <div class="hero-contact-links" aria-label="Primary actions">
      <a class="hero-primary-cta" href="#work">Selected work ${arrow}</a>
      ${profile.contactLinks
        .map((link) => `<a href="${link.href}"${linkAttrs(link.href)}>${link.label}</a>`)
        .join("")}
    </div>
  `;
}

export function appTemplate() {
  const activeProject = getActiveProject();

  if (activeProject) return ProjectDetailPage(activeProject);

  return `
    <div class="app">
      ${Header()}
      <main class="main" id="main-content" tabindex="-1">
        ${HomepageHero()}
        ${FeaturedWork()}
        ${AdditionalWork()}
        ${ExperienceTimeline()}
        ${PersonalNote()}
        ${Afterword()}
        ${Footer()}
      </main>
    </div>
  `;
}

function Header(project = null) {
  return `
    <a class="skip-link" href="#main-content">Skip to content</a>
    <header class="nav-shell">
      <nav class="navbar" aria-label="Main navigation">
        <div class="nav-top">
          <a class="logo" href="#about"><em>${content.site.logo.italic}</em><strong>${content.site.logo.bold}</strong></a>
          <button class="menu-icon" type="button" aria-label="Toggle menu" aria-expanded="false" aria-controls="primary-navigation">
            <span></span><span></span>
          </button>
        </div>
        <div class="nav-links" id="primary-navigation">
          ${nav
            .map(
              (item) =>
                `<a href="${item.href}"${item.external ? ' target="_blank" rel="noreferrer"' : ""}>${item.label}</a>`
            )
            .join("")}
        </div>
      </nav>
      ${project ? `<div class="reading-progress" role="progressbar" aria-label="${project.title} reading progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span></span></div>` : ""}
    </header>
  `;
}

function HomepageHero() {
  return `
    <section class="editorial-hero" id="about" aria-labelledby="home-title">
      <div class="hero-introduction">
        <p class="section-kicker">${profile.role}</p>
        <h1 class="hero-title" id="home-title">${profile.name.split(" ").join("<br />")}</h1>
        <p class="hero-lede">${profile.intro}</p>
        <div class="hero-meta" aria-label="Profile summary">
          ${profile.heroMeta.map((item) => `<span>${item}</span>`).join("")}
        </div>
        ${HeroContactActions()}
      </div>
      ${HomepageEvidence()}
      <figure class="portrait-card" aria-label="${profile.portrait.alt}">
        <img class="portrait-gray" src="${profile.portrait.src}" alt="${profile.portrait.alt}" fetchpriority="high" decoding="async" />
        <img class="portrait-color" src="${profile.portrait.src}" alt="" aria-hidden="true" decoding="async" />
      </figure>
      <aside class="hero-position" aria-label="Engineering focus">
        <p class="section-kicker">How I work</p>
        <p>${profile.introDetail}</p>
        <div class="proof-chip-list">
          ${profile.proofChips.map((chip) => `<span>${chip}</span>`).join("")}
        </div>
        <p class="availability">${profile.availability}</p>
      </aside>
    </section>
  `;
}


function HomepageEvidence() {
  return `
    <section class="homepage-evidence" aria-labelledby="evidence-title">
      <h2 class="section-kicker" id="evidence-title">Selected results</h2>
      <ul class="evidence-grid">
        ${highlights.map((item) => `
          <li><a class="evidence-item" href="${item.href}">
            <strong class="evidence-value"><span class="counter-accessible">${item.value}</span><span data-count-up aria-hidden="true">${item.value}</span></strong>
            <span class="evidence-label">${item.label}</span>
            <span class="evidence-context">${item.context}</span>
            <span class="evidence-link">${item.linkLabel} ${arrow}</span>
          </a></li>
        `).join("")}
      </ul>
    </section>
  `;
}

function PersonalNote() {
  return `
    <section class="personal-note" aria-labelledby="personal-title">
      <div><p class="section-kicker">A little more about me</p><h2 id="personal-title">Away from the keyboard</h2></div>
      <div><p>Outside software, I make time for a few other things.</p>
        <ul class="interest-list">${profile.interests.map((interest) => `<li>${interest}</li>`).join("")}</ul>
      </div>
    </section>
  `;
}

function FeaturedWork() {
  return `
    <section class="work-section" id="work" aria-labelledby="work-title">
      <header class="section-intro">
        <p class="section-kicker">Selected work</p>
        <h2 class="display-title" id="work-title">${labels.featuredWork}</h2>
        <p>Explore the products, how they work, and the decisions behind them.</p>
      </header>
      <ol class="featured-projects">
        ${projects.map((project, index) => ProjectFeature(project, index)).join("")}
      </ol>
    </section>
  `;
}

function ProjectFeature(project, index) {
  const detailLink = project.links.find((link) => link.href === `#project/${project.slug}`);
  const externalLinks = project.links.filter((link) => link !== detailLink);

  return `
    <li>
      <article class="project-feature" data-project="${project.slug}">
        <a class="project-feature-evidence" href="#project/${project.slug}" aria-label="Explore ${project.title}">
          <span class="project-index">${String(index + 1).padStart(2, "0")}</span>
          ${ProjectFeatureVisual(project)}
          <span class="project-evidence-label">Explore ${project.title} ${arrow}</span>
        </a>
        <div class="project-feature-copy">
          <p class="project-eyebrow">${project.category}</p>
          <h3>${project.title}</h3>
          <p class="project-feature-headline">${project.headline}</p>
          <p class="project-feature-summary">${project.description}</p>
          <p class="project-contribution"><strong>My contribution</strong> ${project.contribution}</p>
          <p class="project-proof">${project.proof}</p>
          <div class="project-tags" aria-label="${project.title} technologies">
            ${project.tags.slice(0, 5).map((tag) => `<span>${tag}</span>`).join("")}
          </div>
          <div class="project-feature-links">
            <a class="text-link" href="#project/${project.slug}">Technical breakdown ${arrow}</a>
            ${externalLinks
              .map((link) => `<a class="text-link muted-link" href="${link.href}"${linkAttrs(link.href)}>${link.label}</a>`)
              .join("")}
          </div>
        </div>
      </article>
    </li>
  `;
}

function ProjectFeatureVisual(project) {
  if (!project.image) {
    return `<div class="project-placeholder" aria-hidden="true"><span>${project.title}</span></div>`;
  }

  return `<img src="${project.image}" alt="${project.title} interface" loading="lazy" decoding="async" />`;
}

function AdditionalWork() {
  if (!additionalProjects.length) return "";

  return `
    <section class="additional-work-section" aria-labelledby="additional-work-title">
      <header class="section-intro">
        <p class="section-kicker">Additional work</p>
        <h2 class="display-title" id="additional-work-title">${labels.additionalWork}</h2>
      </header>
      <div class="additional-work-grid">
        ${additionalProjects
          .map(
            (project) => `
              <article class="additional-work-card" data-project="${project.slug}">
                <p class="project-eyebrow">${project.category}</p>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <p class="project-contribution"><strong>My contribution</strong> ${project.contribution}</p>
                <div class="project-tags" aria-label="${project.title} technologies">
                  ${project.tags.slice(0, 5).map((tag) => `<span>${tag}</span>`).join("")}
                </div>
                ${renderLinks(project.links, "project-feature-links")}
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function ExperienceTimeline() {
  return `
    <section class="experience-section" id="experience" aria-labelledby="experience-title">
      <header class="section-intro experience-intro">
        <p class="section-kicker">Experience</p>
        <h2 class="display-title" id="experience-title">Engineering experience</h2>
      </header>
      <ol class="experience-timeline">
        ${experience
          .map(
            (item, index) => `
              <li>
                <article class="experience-entry" id="experience-${item.slug}">
                  <p class="experience-index">${String(index + 1).padStart(2, "0")}</p>
                  <div>
                    <p class="experience-years">${item.period}</p>
                    <h3>${item.role}</h3>
                    <p class="experience-company">${item.company}</p>
                    ${item.context ? `<p class="experience-context">${item.context}</p>` : ""}
                  </div>
                  <div>${ExperienceDetail(item.detail)}${item.evidence ? `<p class="experience-result">${item.evidence.value} · ${item.evidence.label}</p>` : ""}</div>
                </article>
              </li>
            `
          )
          .join("")}
      </ol>
    </section>
  `;
}

function ExperienceDetail(detail) {
  if (Array.isArray(detail)) {
    return `<ul class="experience-bullets">${detail.map((point) => `<li>${point}</li>`).join("")}</ul>`;
  }

  return `<p class="experience-detail">${detail}</p>`;
}

function Afterword() {
  return `
    <section class="afterword" aria-label="Contact">
      ${ContactCard()}
    </section>
  `;
}

function ToolIcon(tool) {
  const label = typeof tool === "string" ? tool : tool.label;
  const icon = typeof tool === "string" ? "" : tool.icon;
  return `<li class="tool-icon" title="${label}">${icon ? `<i class="${icon}" aria-hidden="true"></i>` : ""}<span>${label}</span></li>`;
}

function ProjectDetailPage(project) {
  const detailLinks = project.links.filter((link) => link.href !== `#project/${project.slug}`);

  return `
    <div class="project-page" data-project="${project.slug}">
      ${Header(project)}
      <main class="project-detail" id="main-content" tabindex="-1">
        <a class="back-link" href="#work" aria-label="Back to selected projects">← Selected work</a>
        ${ProjectThesis(project, detailLinks)}
        ${ProjectExecutiveSummary(project)}
        ${ProjectEvidenceSurface(project)}
        ${ProjectMetricList(project.selectedResult || project.metrics)}
        ${ProjectDecisionSection(project)}
        ${technicalDiagrams(project)}
        ${ProjectProofAppendix(project)}
        ${ProjectContributionAppendix(project.resumeBullets)}
        <nav class="case-next" aria-label="Continue exploring">
          <a class="text-link" href="#work">← More projects</a>
          <a class="text-link" href="#contact">Get in touch ${arrow}</a>
          <a class="text-link" href="${profile.resume}" target="_blank" rel="noreferrer">Resume ${arrow}</a>
        </nav>
      </main>
    </div>
  `;
}

function ProjectThesis(project, detailLinks) {
  const displayTitle = project.title.replace(/([a-z])(?=[A-Z])/g, "$1<wbr>");

  return `
    <header class="case-thesis" id="case-thesis">
      <div class="case-thesis-copy">
        <p class="project-eyebrow">${project.category}</p>
        <h1>${displayTitle}</h1>
        <p class="case-headline">${project.headline}</p>
        <div class="project-tags detail-tags" aria-label="${project.title} technologies">
          ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
      </div>
      <aside class="case-outcome">
        <p class="section-kicker">Scope</p>
        <p>${project.status}</p>
        ${renderLinks(detailLinks, "project-hero-links")}
      </aside>
    </header>
  `;
}

function ProjectExecutiveSummary(project) {
  return `
    <section class="case-brief" id="project-brief" aria-labelledby="brief-title">
      <div>
        <p class="section-kicker">15-second read</p>
        <h2 id="brief-title">Project at a glance</h2>
      </div>
      <p class="case-brief-summary">${project.description || firstSentence(project.overview)}</p>
      <dl>
        <div><dt>My contribution</dt><dd>${project.contribution}</dd></div>
        <div><dt>Problem</dt><dd>${project.brief?.problem || firstSentence(project.problem) || project.category}</dd></div>
        <div><dt>Decision</dt><dd>${project.brief?.decision || firstSentence(project.solution)}</dd></div>
        <div><dt>Evidence</dt><dd>${project.brief?.proof || project.proof}</dd></div>
      </dl>
    </section>
  `;
}


function firstSentence(value) {
  if (!value) return "";
  const end = value.search(/[.!?](?:\s|$)/);
  return end === -1 ? value : value.slice(0, end + 1);
}


function ProjectEvidenceSurface(project) {
  const demo = project.demoVideo && project.image
    ? `
        <video class="evidence-demo-video" muted playsinline preload="metadata" poster="${project.image}" aria-hidden="true" tabindex="-1">
          <source src="${project.demoVideo.src}" type="video/mp4" />
        </video>
      `
    : "";

  return `
    <figure class="case-evidence-surface" id="project-evidence">
      <div class="evidence-surface-art${project.demoVideo && project.image ? " has-demo-loop" : ""}"${project.demoVideo && project.image ? ' data-demo-loop' : ""}>
        ${project.image ? `<img src="${project.image}" alt="${project.title} interface" loading="lazy" decoding="async" />` : `<div class="project-placeholder project-placeholder-large" aria-hidden="true"><span>${project.title}</span></div>`}
        ${demo}
      </div>
      <figcaption>${EvidenceCaption(project)}</figcaption>
    </figure>
  `;
}

function EvidenceCaption(project) {
  return project.description || project.overview;
}


function ProjectMetricList(items) {
  if (!items?.length) return "";

  if (typeof items === "string") {
    return `
      <section class="case-facts selected-result" id="project-metrics" aria-labelledby="metrics-title">
        <header><p class="section-kicker">Selected result</p><h2 id="metrics-title">What the benchmark measured</h2></header>
        <p>${items}</p>
      </section>
    `;
  }

  return `
    <section class="case-facts" id="project-metrics" aria-labelledby="metrics-title">
      <header><p class="section-kicker">Repository facts</p><h2 id="metrics-title">Evidence with useful scale.</h2></header>
      <dl>
        ${items.map((item) => `<div><dt>${item.value}</dt><dd>${item.label}</dd></div>`).join("")}
      </dl>
    </section>
  `;
}

function ProjectArchitectureMap(project) {
  if (!project.mermaidDiagram) return "";

  return `
    <div class="architecture-diagram" aria-label="${project.title} architecture diagram">
      ${DiagramControls()}
      <pre class="mermaid">${project.mermaidDiagram}</pre>
    </div>
    ${DiagramGuidance(project.diagramGuidance?.architecture, "Architecture")}
  `;
}

function DiagramControls() {
  return `
    <div class="diagram-controls" aria-label="Diagram zoom controls">
      <button type="button" data-diagram-zoom="out" aria-label="Zoom diagram out">−</button>
      <button type="button" data-diagram-zoom="reset" aria-label="Reset diagram zoom">100%</button>
      <button type="button" data-diagram-zoom="in" aria-label="Zoom diagram in">+</button>
    </div>
  `;
}

function DiagramGuidance(text, diagramType) {
  if (!text) return "";
  return `<aside class="diagram-guidance" aria-label="${diagramType} diagram guidance"><p>${text}</p></aside>`;
}

function ProjectSystemSection(project) {
  if (!project.systemFlow?.length) return "";

  const active = project.systemFlow[0];
  return `
    <section class="case-chapter project-system-section" id="project-system" aria-labelledby="system-title">
      <header class="chapter-heading">
        <p class="section-kicker">Chapter 02 · ${project.systemEyebrow || "Technical system"}</p>
        <h2 id="system-title">${project.systemTitle || `How ${project.title} works`}</h2>
      </header>
      <div class="system-explorer" data-system-explorer>
        <ol class="system-flow" aria-label="${project.title} system flow">
          ${project.systemFlow
            .map(
              (step, index) => `
                <li><button class="system-node${index === 0 ? " is-active" : ""}" type="button" data-system-index="${index}">
                  <span class="system-node-number">${String(index + 1).padStart(2, "0")}</span>
                  <span><strong>${step.title}</strong><em>${step.eyebrow}</em></span>
                </button></li>
              `
            )
            .join("")}
        </ol>
        <article class="system-panel" aria-live="polite">
          <p class="system-panel-eyebrow">${active.eyebrow}</p>
          <h3>${active.title}</h3>
          <p>${active.detail}</p>
          <div class="system-stack">${active.stack.map((item) => `<span>${item}</span>`).join("")}</div>
        </article>
      </div>
      <details class="case-disclosure architecture-disclosure" open>
        <summary><span>Architecture map</span><small>01 interactive map</small></summary>
        <div class="disclosure-body">${ProjectArchitectureMap(project)}${project.architectureNote ? `<p class="architecture-note">${project.architectureNote}</p>` : ""}</div>
      </details>
    </section>
  `;
}

function ProjectSimulationSection(project) {
  if (!project.routeSimulation?.length) return "";

  return `
    <section class="case-chapter route-simulation-section" id="project-simulation" aria-labelledby="simulation-title">
      <header class="chapter-heading">
        <p class="section-kicker">Execution trace</p>
        <h2 id="simulation-title">${project.simulationTitle || "What happens after the request starts"}</h2>
      </header>
      <details class="case-disclosure lifecycle-disclosure" open>
        <summary><span>Request lifecycle</span><small>${String(project.routeSimulation.length).padStart(2, "0")} steps</small></summary>
        <div class="disclosure-body">
          ${
            project.lifecycleDiagram
              ? `<div class="architecture-diagram lifecycle-diagram" aria-label="${project.title} lifecycle diagram">${DiagramControls()}<pre class="mermaid">${project.lifecycleDiagram}</pre></div>${DiagramGuidance(project.diagramGuidance?.lifecycle, "Lifecycle")}`
              : ""
          }
          <div class="route-simulation trace-layout" data-route-simulation>
            <div class="simulation-console">
              <div class="console-header"><span></span><span></span><span></span><strong>${project.simulationLogTitle || "pipeline.log"}</strong></div>
              <ol class="simulation-steps">${project.routeSimulation.map((step, index) => `<li style="--step-index:${index}">${step}</li>`).join("")}</ol>
            </div>
            <aside class="trace-summary"><p class="project-eyebrow">End state</p><strong>${project.simulationResult?.title || "request_complete"}</strong><span>${project.simulationResult?.detail || "state persisted and users notified"}</span></aside>
          </div>
        </div>
      </details>
    </section>
  `;
}

function ProjectDecisionSection(project) {
  if (!project.engineeringDecisions?.length && !project.failureModes?.length) return "";

  return `
    <section class="case-chapter decision-section" id="project-decisions" aria-labelledby="decisions-title">
      <header class="chapter-heading">
        <p class="section-kicker">Engineering decisions</p>
        <h2 id="decisions-title">${project.story.title}</h2>
        <p class="story-intro">${project.story.intro}</p>
      </header>
      <div class="decision-drawers">
        ${(project.engineeringDecisions || [])
          .map(
            (item, index) => `
              <details class="decision-drawer"${index === 0 ? " open" : ""}>
                <summary><span>${String(index + 1).padStart(2, "0")}</span><strong>${item.title}</strong></summary>
                <div><p>${item.detail || item.why}</p>${item.tradeoff ? `<p><b>Tradeoff</b>${item.tradeoff}</p>` : ""}</div>
              </details>
            `
          )
          .join("")}
      </div>
      ${
        project.failureModes?.length
          ? `<details class="case-disclosure failure-disclosure"><summary><span>Failure safeguards</span><small>${String(project.failureModes.length).padStart(2, "0")} scenarios</small></summary><div class="disclosure-body"><ul class="failure-list">${project.failureModes.map((item) => `<li>${item}</li>`).join("")}</ul></div></details>`
          : ""
      }
    </section>
  `;
}

function ProjectProofAppendix(project) {
  const sections = [
    ["Architecture", project.architecture],
    ["Differentiators", project.differentiators],
    ["Features", project.features],
    ["Impact", project.impact],
  ].filter(([, items]) => items?.length);

  if (!sections.length) return "";

  return `
    <section class="case-appendix" id="project-appendix" aria-labelledby="appendix-title">
      <header class="chapter-heading"><p class="section-kicker">Evidence appendix</p><h2 id="appendix-title">Deep detail, available on demand.</h2></header>
      <div class="appendix-list">
        ${sections
          .map(
            ([title, items]) => `
              <details class="case-disclosure">
                <summary><span>${title}</span><small>${String(items.length).padStart(2, "0")} notes</small></summary>
                <div class="disclosure-body"><ol class="evidence-notes">${items.map((item) => `<li><strong>${item.title}</strong><p>${item.detail}</p></li>`).join("")}</ol></div>
              </details>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function ProjectContributionAppendix(items) {
  if (!items?.length) return "";

  return `
    <section class="case-appendix contribution-appendix" id="project-contributions" aria-labelledby="contributions-title">
      <details class="case-disclosure">
        <summary><span id="contributions-title">Technical contributions</span><small>${String(items.length).padStart(2, "0")} resume-ready points</small></summary>
        <div class="disclosure-body"><ol class="contribution-list">${items.map((item) => `<li>${item}</li>`).join("")}</ol></div>
      </details>
    </section>
  `;
}

function ContactCard() {
  return `
    <section class="contact-card afterword-panel" id="contact" aria-labelledby="contact-title">
      <p class="section-kicker">Contact</p>
      <h2 class="afterword-title" id="contact-title">${contact.headline || labels.contact}</h2>
      <p class="contact-intro">${contact.detail} <a href="${profile.contactHref}">${contact.email}</a></p>
      <p class="contact-note">This form opens a draft in your email app.</p>
      <form class="contact-form" data-recipient="${contact.email}" novalidate aria-describedby="contact-form-error">
        <div class="form-field"><label for="name">${contact.nameLabel}</label><input class="input" id="name" name="name" type="text" autocomplete="name" value="${contact.defaults.name}" placeholder="${contact.placeholders.name}" required aria-required="true" aria-describedby="contact-form-error" /></div>
        <div class="form-field"><label for="contact-address">${contact.emailLabel}</label><input class="input" id="contact-address" name="contact" type="email" autocomplete="email" value="${contact.defaults.contact}" placeholder="${contact.placeholders.contact}" aria-describedby="contact-form-error" /></div>
        <div class="form-field"><label for="message">${contact.messageLabel}</label><textarea class="textarea" id="message" name="message" placeholder="${contact.placeholders.message}" required aria-required="true" aria-describedby="contact-form-error">${contact.defaults.message}</textarea></div>
        <p class="contact-form-error" id="contact-form-error" role="alert" tabindex="-1" hidden></p>
        <button class="submit-button" type="submit">${labels.submit}</button>
        <a class="resume-link" href="${profile.resume}" target="_blank" rel="noreferrer">${labels.resume}</a>
      </form>
    </section>
  `;
}

function Footer() {
  return `
    <footer class="footer">
      <p>${footer.copyright}</p>
      <div class="social-grid" aria-label="Social links">
        ${socialLinks
          .map(
            (item) => `
              <a class="social-icon ${item.className}" href="${item.href || "#"}" target="_blank" rel="noreferrer" aria-label="${item.label}">
                ${item.iconClass ? `<i class="${item.iconClass}" aria-hidden="true"></i>` : `<img src="${item.icon}" alt="" aria-hidden="true" />`}
              </a>
            `
          )
          .join("")}
      </div>
    </footer>
  `;
}

function getActiveProject() {
  if (typeof window === "undefined") return null;
  const route = parseProjectRoute(window.location.hash);
  return projects.find((project) => project.slug === route?.slug) || null;
}
