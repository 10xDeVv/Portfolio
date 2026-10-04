import { generatedContent } from "./content.generated.js?v=2";
import { siteCopy } from "./site-copy.js?v=2";

const enrichProject = (project) => {
  const copy = siteCopy.projects[project.slug] || {};
  return {
    ...project,
    ...copy,
    links: project.links.filter((link) => !copy.hideLiveLink || link.label !== "Live site"),
    proof: copy.outcome || project.status,
    problem: copy.why,
    solution: copy.brief?.decision || project.status,
    features: [],
    impact: [],
    metrics: [],
    systemFlow: [],
    routeSimulation: [],
    failureModes: [],
    architecture: project.architecture,
    requestLifecycle: project.requestLifecycle,
    differentiators: [],
    resumeBullets: [],
  };
};

const projects = generatedContent.projects.map(enrichProject);
const additionalProjects = generatedContent.additionalProjects.map(enrichProject);
const allTechnologies = [...new Set(projects.flatMap((project) => project.tags))];
const preferredTechnologies = ["Rust", "Python", "React", "TypeScript", "Spring Boot", "PostgreSQL", "Docker", "Azure"];
const tools = preferredTechnologies
  .filter((label) => allTechnologies.includes(label))
  .map((label) => ({ label, icon: siteCopy.toolIcons[label] || "" }));

const profile = {
  ...generatedContent.profile,
  ...siteCopy.profile,
  contactHref: `mailto:${generatedContent.profile.email}`,
  heroMeta: ["CS co-op @ UNB", "Fredericton, Canada", "Backend / systems / data"],
  contactLinks: [
    { label: "Email", href: `mailto:${generatedContent.profile.email}`, primary: true },
    { label: "LinkedIn", href: generatedContent.profile.linkedin },
    { label: "GitHub", href: generatedContent.profile.github },
    { label: "Resume", href: generatedContent.profile.resume },
  ],
};

export const content = {
  site: siteCopy.site,
  profile,
  nav: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
    { label: "Resume", href: profile.resume, external: true },
  ],
  labels: siteCopy.labels,
  projects,
  highlights: generatedContent.highlights,
  additionalProjects,
  experience: generatedContent.experience.map((item) => ({
    ...item,
    evidence: generatedContent.highlights.find((highlight) => highlight.href === `#experience-${item.slug}`),
    detail: siteCopy.experience[`${item.company} / ${item.role}`]?.detail
      || siteCopy.experience[item.company]?.detail
      || item.detail,
  })),
  tools,
  quote: siteCopy.quote,
  contact: { ...siteCopy.contact, email: profile.email },
  socialLinks: siteCopy.socialLinks.map((item) => ({ ...item, href: profile[item.key] })),
  footer: { copyright: `© 2026 ${profile.name}` },
};
