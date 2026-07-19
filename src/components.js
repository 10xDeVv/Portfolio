import { content } from "./content.js?v=48";

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
  <svg class="arrow-icon" viewBox="0 0 48 48" aria-hidden="true">
    <path d="M10 24h27M27 14l10 10-10 10" />
  </svg>
`;

const linkAttrs = (href) => (href?.startsWith("#") ? "" : ' target="_blank" rel="noreferrer"');

const caseFocus = {
  wayward: "Route quality is a contract",
  lazydrop: "The control plane, not the file pipe",
  wheredidiapply: "The privacy boundary",
  spotlight: "Ownership moves to the backend",
};

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
      <main class="main">
        ${HomepageHero()}
        ${HybridSystemLedger()}
        ${FeaturedWork()}
        ${ExperienceTimeline()}
        ${Afterword()}
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
            <span></span><span></span>
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

function HomepageHero() {
  return `
    <section class="editorial-hero" id="about" aria-labelledby="home-title">
      <div class="hero-introduction">
        <p class="section-kicker">Backend / cloud / full-stack SWE intern</p>
        <h1 class="hero-title" id="home-title">${profile.name.split(" ").join("<br />")}</h1>
        <p class="hero-lede">${profile.intro}</p>
        <div class="hero-meta" aria-label="Profile summary">
          ${profile.heroMeta.map((item) => `<span>${item}</span>`).join("")}
        </div>
        ${HeroContactActions()}
      </div>
      <figure class="portrait-card" aria-label="${profile.portrait.alt}">
        <img class="portrait-gray" src="${profile.portrait.src}" alt="${profile.portrait.alt}" />
        <img class="portrait-color" src="${profile.portrait.src}" alt="" aria-hidden="true" />
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

function HybridSystemLedger() {
  return `
    <section class="hybrid-system-ledger" aria-labelledby="system-ledger-title">
      <div>
        <p class="section-kicker">Product systems</p>
        <h2 id="system-ledger-title">Four case files. Four explicit system boundaries.</h2>
      </div>
      <ol>
        ${projects
          .map(
            (project, index) => `
              <li>
                <span>${String(index + 1).padStart(2, "0")}</span>
                <strong>${project.title}</strong>
                <p>${project.systemTitle || firstSentence(project.solution) || project.category}</p>
              </li>
            `
          )
          .join("")}
      </ol>
    </section>
  `;
}

function FeaturedWork() {
  return `
    <section class="work-section" id="work" aria-labelledby="work-title">
      <header class="section-intro">
        <p class="section-kicker">Selected work</p>
        <h2 class="display-title" id="work-title">${labels.featuredWork} as case files, not thumbnails.</h2>
        <p>Start with the product question. Open a case file when you want the evidence, tradeoffs, and implementation depth.</p>
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
        <a class="project-feature-evidence" href="#project/${project.slug}" aria-label="Open ${project.title} case study">
          <span class="project-index">${String(index + 1).padStart(2, "0")}</span>
          ${ProjectFeatureVisual(project)}
          <span class="project-evidence-label">Open case file ${arrow}</span>
        </a>
        <div class="project-feature-copy">
          <p class="project-eyebrow">${project.category}</p>
          <h3>${project.title}</h3>
          <p class="project-feature-headline">${project.headline}</p>
          <p class="project-feature-summary">${project.description}</p>
          <p class="project-proof">${project.proof}</p>
          <div class="project-tags" aria-label="${project.title} technologies">
            ${project.tags.slice(0, 5).map((tag) => `<span>${tag}</span>`).join("")}
          </div>
          <div class="project-feature-links">
            <a class="text-link" href="#project/${project.slug}">Read the case file ${arrow}</a>
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
  if (project.slug === "spotlight") return SpotlightOwnershipMap("compact");

  return `<img src="${project.image}" alt="${project.title} product evidence" />`;
}

function ExperienceTimeline() {
  return `
    <section class="experience-section" id="experience" aria-labelledby="experience-title">
      <header class="section-intro experience-intro">
        <p class="section-kicker">Experience</p>
        <h2 class="display-title" id="experience-title">A linear record of responsibility.</h2>
      </header>
      <ol class="experience-timeline">
        ${experience
          .map(
            (item, index) => `
              <li>
                <article class="experience-entry">
                  <p class="experience-index">${String(index + 1).padStart(2, "0")}</p>
                  <div>
                    <p class="experience-years">${item.years}</p>
                    <h3>${item.role}</h3>
                    <p class="experience-company">${item.company}</p>
                  </div>
                  ${ExperienceDetail(item.detail)}
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
    <section class="afterword" aria-label="Tools, motivation, and contact">
      <section class="toolbox-card afterword-panel" aria-labelledby="tools-title">
        <p class="section-kicker">${labels.toolbox}</p>
        <h2 class="afterword-title" id="tools-title">Tools are selected for the boundary they clarify.</h2>
        <ul class="toolbox-icons" aria-label="Technologies">
          ${tools.map((tool) => ToolIcon(tool)).join("")}
        </ul>
      </section>
      <section class="quote-card afterword-panel" aria-labelledby="quote-title">
        <p class="section-kicker" id="quote-title">${labels.motivation}</p>
        <p class="quote-text">“${content.quote}”</p>
      </section>
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
      ${Header()}
      <main class="project-detail">
        <a class="back-link" href="#work" aria-label="Back to selected projects">← Selected work</a>
        ${ProjectThesis(project, detailLinks)}
        ${ProjectExecutiveSummary(project)}
        ${HybridProductArtifact(project)}
        ${ProjectQuickNavigation(project)}
        ${ProjectEvidenceSurface(project)}
        ${ProjectStorySection(project)}
        ${ProjectMetricList(project.metrics)}
        ${ProjectSystemSection(project)}
        ${ProjectSimulationSection(project)}
        ${ProjectDecisionSection(project)}
        ${ProjectProofAppendix(project)}
        ${ProjectContributionAppendix(project.resumeBullets)}
      </main>
    </div>
  `;
}

function ProjectThesis(project, detailLinks) {
  const outcome = project.impact?.[0] || project.features?.[0];

  return `
    <header class="case-thesis" id="case-thesis">
      <div class="case-thesis-copy">
        <p class="project-eyebrow">Case file · ${project.category}</p>
        <h1>${project.title}</h1>
        <p class="case-headline">${project.headline}</p>
        <div class="project-tags detail-tags" aria-label="${project.title} technologies">
          ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
      </div>
      <aside class="case-outcome">
        <p class="section-kicker">Outcome</p>
        <strong>${outcome?.title || project.proof}</strong>
        <p>${outcome?.detail || project.solution}</p>
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
        <h2 id="brief-title">The essential move.</h2>
      </div>
      <p class="case-brief-summary">${firstSentence(project.overview) || project.headline}</p>
      <dl>
        <div><dt>Problem</dt><dd>${firstSentence(project.problem) || project.category}</dd></div>
        <div><dt>Decision</dt><dd>${firstSentence(project.solution) || project.proof}</dd></div>
        <div><dt>Proof</dt><dd>${project.proof}</dd></div>
      </dl>
    </section>
  `;
}

function HybridProductArtifact(project) {
  const intentItems =
    project.systemFlow?.map((step) => ({ title: step.title, detail: step.detail })) ||
    [{ title: "System decision", detail: firstSentence(project.solution) || project.proof }];
  const traceItems =
    project.routeSimulation?.map((step, index) => ({ title: String(index + 1).padStart(2, "0"), detail: step })) ||
    (project.features || []).slice(0, 3).map((item, index) => ({ title: String(index + 1).padStart(2, "0"), detail: item.detail || item.title || item }));
  const evidenceItems = (project.metrics || project.impact || project.features || [])
    .slice(0, 3)
    .map((item) => ({ title: item.value || item.title || project.title, detail: item.label || item.detail || item }));
  const artifactId = `artifact-${project.slug}`;

  return `
    <section class="hybrid-product-artifact" id="project-artifact" aria-labelledby="${artifactId}-title">
      <header>
        <div>
          <p class="section-kicker">Primary product system</p>
          <h2 id="${artifactId}-title">The system before the chapters.</h2>
        </div>
        <p>${firstSentence(project.proof) || project.headline}</p>
      </header>
      <div class="hybrid-artifact-tabs" data-hybrid-tabs>
        <div role="tablist" aria-label="${project.title} product system views">
          <button type="button" role="tab" id="${artifactId}-intent-tab" aria-selected="true" aria-controls="${artifactId}-intent" tabindex="0">System intent</button>
          <button type="button" role="tab" id="${artifactId}-trace-tab" aria-selected="false" aria-controls="${artifactId}-trace" tabindex="-1">Execution trace</button>
          <button type="button" role="tab" id="${artifactId}-evidence-tab" aria-selected="false" aria-controls="${artifactId}-evidence" tabindex="-1">Evidence</button>
        </div>
        <section class="hybrid-artifact-stage" id="${artifactId}-intent" role="tabpanel" aria-labelledby="${artifactId}-intent-tab">
          <ol>${intentItems.map((item, index) => `<li><span>${String(index + 1).padStart(2, "0")}</span><div><strong>${item.title}</strong><p>${item.detail}</p></div></li>`).join("")}</ol>
        </section>
        <section class="hybrid-artifact-stage" id="${artifactId}-trace" role="tabpanel" aria-labelledby="${artifactId}-trace-tab" hidden>
          <ol>${traceItems.map((item) => `<li><span>${item.title}</span><p>${item.detail}</p></li>`).join("")}</ol>
        </section>
        <section class="hybrid-artifact-stage" id="${artifactId}-evidence" role="tabpanel" aria-labelledby="${artifactId}-evidence-tab" hidden>
          <ol>${evidenceItems.map((item) => `<li><strong>${item.title}</strong><p>${item.detail}</p></li>`).join("")}</ol>
        </section>
      </div>
    </section>
  `;
}

function firstSentence(value) {
  if (!value) return "";
  const end = value.search(/[.!?](?:\s|$)/);
  return end === -1 ? value : value.slice(0, end + 1);
}

function ProjectQuickNavigation(project) {
  const sections = [
    { href: "#project-brief", label: "15-second read" },
    { href: "#project-evidence", label: "Evidence surface" },
    { href: "#project-story", label: caseFocus[project.slug] || "The build" },
    project.metrics?.length && { href: "#project-metrics", label: "Repository facts" },
    project.systemFlow?.length && { href: "#project-system", label: "Technical system" },
    project.routeSimulation?.length && { href: "#project-simulation", label: "Execution trace" },
    (project.engineeringDecisions?.length || project.failureModes?.length) && {
      href: "#project-decisions",
      label: "Decision log",
    },
    [project.architecture, project.differentiators, project.features, project.impact].some((items) => items?.length) && {
      href: "#project-appendix",
      label: "Evidence appendix",
    },
    project.resumeBullets?.length && { href: "#project-contributions", label: "Technical contribution" },
  ].filter(Boolean);

  return `
    <nav class="case-rail" aria-label="${project.title} case file sections">
      <p>Case file index</p>
      <ol>${sections.map((section) => `<li><a href="${section.href}">${section.label}</a></li>`).join("")}</ol>
    </nav>
  `;
}

function ProjectEvidenceSurface(project) {
  return `
    <figure class="case-evidence-surface" id="project-evidence">
      <div class="evidence-surface-art">
        ${project.slug === "spotlight" ? SpotlightOwnershipMap() : `<img src="${project.image}" alt="${project.title} product evidence" />`}
      </div>
      <figcaption>${EvidenceCaption(project)}</figcaption>
    </figure>
  `;
}

function EvidenceCaption(project) {
  if (project.slug === "wayward") {
    return "Evidence surface: Wayward’s route engine is judged by legal geometry, scenic quality, and an honest unavailable state—not a guaranteed route.";
  }
  if (project.slug === "lazydrop") {
    return "Evidence surface: file bytes move directly between the browser and object storage while the API owns access, metadata, and realtime session state.";
  }
  if (project.slug === "wheredidiapply") {
    return "Evidence surface: Gmail OAuth remains browser-held; the backend receives only snippets for in-memory classification and the editable dashboard stays local.";
  }
  return "Ownership map: Spotlight deliberately uses a system map instead of unrelated image proof, showing behavior move from client/direct data access to server-owned APIs and persistence.";
}

function SpotlightOwnershipMap(compact = "") {
  return `
    <div class="ownership-map ${compact}" aria-label="Spotlight ownership map">
      <div class="ownership-legacy"><span>Before</span><strong>Mobile client + direct Supabase table access</strong></div>
      <div class="ownership-arrow" aria-hidden="true">→</div>
      <div class="ownership-now">
        <span>After</span>
        <div><strong>Expo / React Native</strong><small>REST + STOMP</small></div>
        <div><strong>Spring Boot domains</strong><small>profiles, discovery, activities, chat, safety, notifications</small></div>
        <div><strong>PostgreSQL + Flyway</strong><small>server-owned product data</small></div>
        <div><strong>Supabase Auth</strong><small>identity remains separate</small></div>
      </div>
    </div>
  `;
}

function ProjectStorySection(project) {
  const sections = [
    ["Context", project.overview],
    ["Constraint", project.problem],
    ["Decision", project.solution],
  ].filter(([, text]) => text);

  if (!sections.length) return "";

  return `
    <section class="case-chapter case-story" id="project-story" aria-labelledby="story-title">
      <header class="chapter-heading">
        <p class="section-kicker">Chapter 01</p>
        <h2 id="story-title">${caseFocus[project.slug] || "The build"}</h2>
      </header>
      <div class="story-flow">
        ${sections
          .map(
            ([title, text], index) => `
              <article class="story-beat">
                <p>${String(index + 1).padStart(2, "0")}</p>
                <div><h3>${title}</h3><p>${text}</p></div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function ProjectMetricList(items) {
  if (!items?.length) return "";

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
      <details class="case-disclosure architecture-disclosure">
        <summary><span>Architecture evidence</span><small>Mermaid map · pan and zoom</small></summary>
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
      <details class="case-disclosure">
        <summary><span>Open the trace</span><small>${project.simulationEyebrow || "Request lifecycle"}</small></summary>
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
        <p class="section-kicker">Chapter 03 · Decision log</p>
        <h2 id="decisions-title">Reasoning before implementation detail.</h2>
      </header>
      <div class="decision-drawers">
        ${(project.engineeringDecisions || [])
          .map(
            (item, index) => `
              <details class="decision-drawer"${index === 0 ? " open" : ""}>
                <summary><span>${String(index + 1).padStart(2, "0")}</span><strong>${item.title}</strong></summary>
                <div><p><b>Why</b>${item.why}</p><p><b>Tradeoff</b>${item.tradeoff}</p></div>
              </details>
            `
          )
          .join("")}
      </div>
      ${
        project.failureModes?.length
          ? `<details class="case-disclosure failure-disclosure"><summary><span>Handled constraints</span><small>${project.failureModes.length} stress cases</small></summary><div class="disclosure-body"><ul class="failure-list">${project.failureModes.map((item) => `<li>${item}</li>`).join("")}</ul></div></details>`
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
      <h2 class="afterword-title" id="contact-title">${labels.contact}</h2>
      <p class="contact-intro">${contact.detail}</p>
      <form class="contact-form" data-recipient="${contact.email}" novalidate aria-describedby="contact-form-error">
        <div class="form-field"><label for="name">${contact.nameLabel}</label><input class="input" id="name" name="name" type="text" value="${contact.defaults.name}" placeholder="${contact.placeholders.name}" required aria-required="true" aria-describedby="contact-form-error" /></div>
        <div class="form-field"><label for="contact-address">${contact.emailLabel}</label><input class="input" id="contact-address" name="contact" type="text" value="${contact.defaults.contact}" placeholder="${contact.placeholders.contact}" aria-describedby="contact-form-error" /></div>
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
  const match = window.location.hash.match(/^#project\/([a-z0-9-]+)$/i);
  if (!match) return null;
  return projects.find((project) => project.slug === match[1]) || null;
}
