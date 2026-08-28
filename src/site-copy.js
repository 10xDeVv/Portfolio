// Manually maintained Portfolio presentation copy.
// Canonical roles, dates, technologies, metrics, and evidence live in
// src/content.generated.js and are synchronized from the private Career Engine.
export const siteCopy = {
  site: {
    title: "Adebowale Adebayo Portfolio",
    logo: { italic: "Wale", bold: "Portfolio" },
  },
  profile: {
    role: "Computer Science co-op student at UNB",
    availability: "Open to software engineering internships",
    intro:
      "I'm Wale, a Computer Science co-op student at UNB. I work on backend, systems, and data-heavy software, including database systems at Steel Plus and engineering for Hack Atlantic.",
    introDetail:
      "I enjoy understanding difficult systems, finding the boundary that matters, and making the whole thing work clearly—from the data model and failure paths to the interface people use.",
    proofChips: ["Backend and systems", "Data-heavy products", "Thoughtful interfaces"],
    portrait: {
      src: "./public/assets/adebowale-portrait.jpg",
      alt: "Portrait of Adebowale Adebayo",
    },
    signature: {
      src: "./public/assets/signature.png",
      alt: "Adebowale Adebayo signature",
    },
  },
  projects: {
    breakpoint: {
      headline: "What happens to a city when an important road closes?",
      outcome: "A five-city beta for exploring transportation disruption.",
      description:
        "Breakpoint makes transportation disruption easier to explore: choose a road, corridor, or modeled hazard area, run the analysis, and inspect how travel and access change across a city.",
      why:
        "A closure affects more than one route. The interesting problem is turning network analysis into something people can inspect, replay, and question without hiding failed or non-converged results.",
    },
    wayward: {
      headline: "Scenic driving for when the drive itself is the destination.",
      outcome: "A scenic-routing engine with an explicitly scoped benchmark.",
      description:
        "Start with a location, a time budget, and a route vibe. Wayward searches for legal driving loops and returns a few options with different scenic and practical tradeoffs.",
      why:
        "Normal navigation optimizes for arrival. Wayward asks a different question: can the road itself be the experience while still respecting time, road geometry, and the local landscape?",
    },
    lazydrop: {
      headline: "Temporary file sharing without turning the app server into the file pipe.",
      outcome: "Direct-to-storage sharing with server-owned access control.",
      description:
        "Create a room, invite someone with a QR code or short link, and share files or notes in realtime. Guests can join quickly, while the server keeps control of access and session state.",
      why:
        "The product needed to feel immediate for guests without treating temporary as careless. That meant separating file transfer, authorization, metadata, realtime updates, billing, and cleanup.",
    },
    wheredidiapply: {
      headline: "Turn a crowded Gmail inbox into a job-application timeline.",
      description:
        "A smaller workflow tool that finds application messages, classifies them with deterministic rules first, and uses a model only for unresolved cases.",
    },
    audire: {
      headline: "A music-learning prototype that leaves the artistic decision with the musician.",
      description:
        "Audire explains short musical ideas, offers contrasting directions, and turns feedback into a guided practice session.",
    },
  },
  labels: {
    featuredWork: "Projects",
    additionalWork: "Other things I've built",
    toolbox: "Technologies",
    contact: "Let's talk",
    motivation: "How I think about the work",
    submit: "Send email",
    resume: "Download resume",
  },
  quote: "Understand the difficult part, make the boundaries honest, then make the result easy to use.",
  contact: {
    detail: "If you're working on a backend, systems, or data-heavy problem, I'd be glad to hear about it.",
    nameLabel: "Your name",
    emailLabel: "Your email",
    messageLabel: "Message",
    placeholders: {
      name: "Name",
      contact: "name@example.com",
      message: "What would you like to talk about?",
    },
    defaults: { name: "", contact: "", message: "" },
  },
  toolIcons: {
    Rust: "devicon-rust-original",
    Python: "devicon-python-plain",
    React: "devicon-react-original",
    TypeScript: "devicon-typescript-plain",
    "Spring Boot": "devicon-spring-original",
    PostgreSQL: "devicon-postgresql-plain",
    Docker: "devicon-docker-plain",
    Azure: "devicon-azure-plain",
  },
  socialLinks: [
    { label: "LinkedIn", key: "linkedin", className: "linkedin", iconClass: "devicon-linkedin-plain" },
    { label: "GitHub", key: "github", className: "github", iconClass: "devicon-github-original" },
  ],
};
