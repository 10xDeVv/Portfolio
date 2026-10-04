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
      "I'm Wale. I build backend, systems and data-heavy software, from business reporting at Steel Plus to the platform behind Hack Atlantic.",
    introDetail:
      "I enjoy understanding difficult systems, finding the boundary that matters, and making the whole thing work clearly, from the data model and failure paths to the interface people use.",
    proofChips: ["Backend and systems", "Data-heavy products", "Thoughtful interfaces"],
    portrait: {
      src: "./public/assets/adebowale-portrait.webp",
      alt: "Portrait of Adebowale Adebayo",
    },
    signature: {
      src: "./public/assets/signature.png",
      alt: "Adebowale Adebayo signature",
    },
  },
  projects: {
    breakpoint: {
      story: {
        title: "Making modeled results trustworthy",
        intro: "A map can make a result look convincing before the model has earned that confidence. Breakpoint ties each comparison to a saved run and checks its validity before presenting it.",
      },
      brief: {
        problem: "A road closure can change travel and access well beyond the blocked segment.",
        decision: "Run analysis as bounded background jobs, persist the results, and expose progress to the map interface.",
        proof: "Checks cover closure legality, demand conservation and saved-result identity; non-converged runs stay diagnostic.",
      },
      engineeringDecisions: [
        {
          title: "Keep analysis separate from the page request",
          detail: "The Rust service queues bounded jobs on one host and exposes their progress. Saved local results can be reopened without submitting the analysis again.",
        },
        {
          title: "Make modeled flows reproducible",
          detail: "Deterministic Frank–Wolfe assignment in Rust tracks both assigned and unserved demand. Turn-aware routing is tested on synthetic fixtures; the pilot data has no acquired turn restrictions.",
        },
        {
          title: "Gate results on explicit checks",
          detail: "Closure legality, demand conservation and artifact identity are checked across the solver, API and interface. Non-converged runs retain diagnostics instead of publishing authoritative comparisons.",
        },
      ],
      headline: "What happens to a city when an important road closes?",
      outcome: "A five-city beta for exploring modeled transportation disruption.",
      description:
        "Breakpoint makes transportation disruption easier to explore: choose a road, corridor, or modeled hazard area, run the analysis, and inspect how travel and access change across a city.",
      why:
        "A closure affects more than one route. The interesting problem is turning network analysis into something people can inspect, replay, and question without hiding failed or non-converged results.",
    },
    wayward: {
      story: {
        title: "Recovering a route request after failure",
        intro: "Route generation crosses a database, a queue and a worker. The engineering problem is keeping one coherent job state when delivery retries, a worker loses its lease, or progress messages arrive out of order.",
      },
      brief: {
        problem: "A scenic loop has to balance road quality and landscape with a driver's time budget.",
        decision: "Prepare scenic data offline, then generate routes asynchronously with recoverable jobs and progress updates.",
        proof: "A local Redis benchmark compares serial reads with one batched lookup over the same deterministic, warm key set.",
      },
      engineeringDecisions: [
        {
          title: "Make route jobs recoverable",
          detail: "The API commits a route job and dispatch record together before Kafka delivery. Retries, worker lease fencing and lifecycle revisions coordinate recovery; WebSocket progress has a polling fallback.",
        },
        {
          title: "Move geospatial preparation off the request path",
          detail: "A versioned offline pipeline turns road, terrain and landscape sources into indexed scenic data. Runtime route generation reads those prepared signals instead of repeating the raw geometry and raster work.",
        },
      ],
      headline: "Scenic driving for when the drive itself is the destination.",
      outcome: "1,500-tile lookup: 3,213 ms → 90 ms in a local warm-Redis benchmark.",
      description:
        "Start with a location, a time budget, and a route vibe. Wayward searches for legal driving loops and returns a few options with different scenic and practical tradeoffs.",
      why:
        "Normal navigation optimizes for arrival. Wayward asks a different question: can the road itself be the experience while still respecting time, road geometry, and the local landscape?",
    },
    lazydrop: {
      // DNS failed in HTTP and browser checks on 2026-10-04; retain the canonical URL for restoration.
      hideLiveLink: true,
      story: {
        title: "Separating file transfer from room state",
        intro: "A file transfer and a room update have different responsibilities. LazyDrop sends file bytes directly to storage, while the application owns membership, metadata and room notifications. The point where the client reports completion is the key trust boundary.",
      },
      brief: {
        problem: "Temporary sharing needs both file transfer and room state, without routing every file through the application server.",
        decision: "Use signed browser-to-storage transfers and keep room checks and file metadata in Spring Boot.",
        proof: "The direct-upload path replaces backend-proxied file bodies. Metadata confirmation trusts the client; it does not verify the stored object.",
      },
      engineeringDecisions: [
        {
          title: "Separate file transfer from room state",
          detail: "Spring Boot checks membership, room status and declared plan limits before issuing signed URLs. The browser transfers bytes to storage, then reports file metadata; confirmation does not check the object's existence or actual size.",
        },
        {
          title: "Keep completion and notification explicit",
          detail: "After the browser reports file metadata, the application persists it and sends room updates through process-local WebSockets. Stored metadata records what the client reported; it does not independently establish that the upload completed.",
        },
      ],
      headline: "Temporary file sharing without turning the app server into the file pipe.",
      outcome: "File bytes go directly to storage; the application manages room state.",
      description:
        "Create a temporary room, invite someone with a QR code or short link, and share files or notes. Guests can join without creating an account.",
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
  // Presentation summaries of the generated evidence; role metadata stays generated.
  experience: {
    "UNB Formula Racing (Formula SAE)": {
      detail: [
        "Designed and implemented Raspberry Pi software to receive CAN bus data and a visualization application for data from over six sensors across the car. Used Rust and Python across this work.",
      ],
    },
    "Steel Plus Network / Software Developer": {
      detail: [
        "Building an Access rebate-management application with two supplier-specific calculation engines and a shared workbench for staff reconciliation and payout reporting.",
      ],
    },
    "Steel Plus Network / Database Systems Developer Intern": {
      detail: [
        "Converted 13 years of spreadsheet history into a relational Access reporting system for staff.",
      ],
    },
    "Hack Atlantic": {
      detail: [
        "Led technical delivery of the team-built Next.js and Go platform, bringing applications, review, RSVP and event operations into one workflow.",
      ],
    },
    Spotlight: {
      detail: [
        "Proposed and independently executed the migration from direct Supabase data access to Spring Boot and PostgreSQL, while preserving sign-in through Supabase Auth.",
      ],
    },
    "University of New Brunswick": {
      detail: [
        "Reviewed labs and mentored students on software architecture, Git and Agile/Scrum practices for a 100+ student software-engineering cohort.",
      ],
    },
  },
  labels: {
    featuredWork: "Projects",
    additionalWork: "Other things I've built",
    toolbox: "Technologies",
    contact: "Let's talk",
    motivation: "How I think about the work",
    submit: "Open email draft",
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
