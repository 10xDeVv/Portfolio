// Edit this file to update the portfolio content without touching HTML/CSS.
// Components read from this single object and render the page automatically.
export const content = {
  site: {
    title: "Adebowale Adebayo Portfolio",
    logo: {
      italic: "Wale",
      bold: "Portfolio",
    },
  },

  profile: {
    name: "Adebowale Adebayo",
    role: "Backend / Cloud / Full-Stack SWE Intern",
    availability: "Open to SWE internships",
    location: "Fredericton, Canada",
    email: "adebowale.ca@gmail.com",
    contactHref: "mailto:adebowale.ca@gmail.com",
    resume: "./public/assets/resume.pdf",
    intro:
      "I'm Wale, a CS student at UNB. I love building and engineering backend/cloud systems: the distributed pieces, data flows, queues, APIs, and reliability work behind the products people depend on every day.",
    introDetail:
      "Most of my projects start as personal itches, then turn into backend-heavy products with real infrastructure behind them. I care just as much about the interface: the skyscraper users see should feel as intentional as the foundation holding it up.",
    proofChips: ["Backend-heavy products", "Cloud + distributed systems", "Product-minded UI/UX"],
    heroMeta: ["CS @ UNB", "Fredericton, Canada", "Backend / Cloud / Full-stack"],
    contactLinks: [
      { label: "Email", href: "mailto:adebowale.ca@gmail.com", primary: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/waally-xyz/" },
      { label: "GitHub", href: "https://github.com/10xDeVv" },
      { label: "Resume", href: "./public/assets/resume.pdf" },
    ],
    portrait: {
      src: "./public/assets/adebowale-portrait.jpg",
      alt: "Portrait of Adebowale Adebayo",
    },
    signature: {
      src: "./public/assets/signature.png",
      alt: "Adebowale Adebayo signature",
    },
  },

  nav: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#work" },
    { label: "Contact", href: "#contact" },
    { label: "Resume", href: "./public/assets/resume.pdf", external: true },
  ],

  labels: {
    featuredWork: "Projects",
    toolbox: "Technologies",
    contact: "Contact",
    motivation: "Motivation",
    submit: "Submit",
    resume: "Download Resume",
  },

  experience: [
    {
      role: "Database Systems Developer",
      company: "Steel Plus Network - Contract Part-time, Remote",
      years: "Apr 2026 - Present",
      detail: [
        "Designing a normalized Access rebate-management system for a 2025 workbook that tracks 80+ fabricators, dozens of suppliers, supplier-specific contract terms, CAD/USD purchases, exchange rates, thresholds, tonnage, admin fees, and final fabricator payouts.",
        "Splitting spreadsheet logic into durable tables for SupplierContracts, Purchases, ExchangeRates, Fabricators, Suppliers, and calculated rebate queries so totals can be verified supplier-by-supplier instead of maintained manually across worksheets.",
        "Building form-driven data entry workflows with dropdown-backed foreign keys, so business users select fabricator and supplier names instead of typing raw IDs while still preserving referential integrity.",
        "Working toward remittance-style reports that generate each fabricator's supplier purchases, rebate earned, admin fee deduction, and final payout from the database rather than hand-maintained Excel tabs.",
      ],
    },
    {
      role: "Founding Software Engineer",
      company: "Spotlight - Canada",
      years: "Mar 2026 - Present",
      detail: [
        "Migrated the app from direct Supabase table access to a Spring Boot backend with PostgreSQL, Flyway, Supabase JWT validation, and backend-side current-user provisioning.",
        "Built backend-owned modules for profiles, discovery, activities, chat, weekly prompts, notifications, safety, analytics, and MinIO/S3 avatar storage support.",
        "Introduced STOMP WebSocket chat and server-owned unread counts, conversation states, moderation flows, and activity rules so core product behavior can evolve outside mobile release cycles.",
      ],
    },
    {
      role: "Teaching Assistant",
      company: "University of New Brunswick - Software Engineering",
      years: "Sep 2025 - Present",
      detail: [
        "Mentor students through project architecture, version control, agile workflows, and implementation habits in Introduction to Software Engineering labs.",
        "Review assignments and deliverables with practical feedback on maintainability, teamwork, source control hygiene, and code quality.",
      ],
    },
    {
      role: "Database Systems Developer",
      company: "Steel Plus Network - Internship, Remote",
      years: "May 2025 - Aug 2025",
      detail: [
        "Replaced 13 years of Excel-based financial and customer workflows with a production Microsoft Access database system used by business teams.",
        "Migrated, normalized, and optimized thousands of records while building interactive forms, reports, dashboards, and macro-supported workflows.",
        "Reduced manual reporting time by more than 50% and earned an outstanding employer evaluation for creativity, productivity, problem-solving, and professionalism.",
      ],
    },
  ],

  projects: [
    {
      slug: "wayward",
      featuredRank: 1,
      title: "Wayward",
      headline: "Production-style geospatial routing that generates scenic driving loops from time, location, and route vibe.",
      description:
        "A full-stack scenic route platform that turns a start point, time budget, and vibe into legal drivable loop options scored against precomputed H3 scenic intelligence.",
      category: "Geospatial Route Platform",
      image: "./public/assets/project-wayward.png",
      url: "https://usewayward.app",
      proof: "Kafka + OSRM + PostGIS scenic route engine · 27 route-quality scenarios · 211k H3 scenic tiles",
      links: [
        { label: "Live Site", href: "https://usewayward.app" },
        { label: "Case Study", href: "#project/wayward" },
      ],
      tags: ["Spring Boot", "Kafka", "PostGIS", "Redis", "OSRM", "H3", "Next.js", "Mapbox"],
      overview:
        "Wayward is a scenic driving route generator for the question normal navigation apps do not answer: I have 45 to 90 minutes, I am starting here, and I want a coastal, forest, mountain, quiet, countryside, open-road, photo-worthy, or hidden-gem drive. The system persists a route job, processes it asynchronously, generates candidate loop shapes, asks local OSRM for legal road geometry, samples the returned corridor against scenic H3 tiles, and returns most_scenic, balanced, and shorter options.",
      problem:
        "Traditional maps optimize for getting from A to B quickly. A recreational drive has a different contract: the route should loop back near the start, follow real roads, fit a time budget, avoid obvious backtracking, and match subjective scenic intent. Computing water, greenery, elevation, road stress, tree canopy, viewpoints, urban pressure, and bridge/coastal signals from raw spatial datasets during every request would also make the product too slow and expensive.",
      solution:
        "I built Wayward around an event-driven route-generation pipeline. The Next.js/Mapbox frontend submits a request to a Spring Boot API, the API stores a route_jobs row and publishes to Kafka, and a worker loads cached scenic tiles plus road-aware anchors before calling local OSRM /trip. The worker scores returned geometry against offline scenic-data releases, applies vibe contracts, dedupes candidates, persists route options and explanations, then sends completion or failure events through WebSockets with polling fallback.",
      metrics: [
        { value: "312", label: "tracked project files" },
        { value: "144", label: "Java source files" },
        { value: "33", label: "route-api Flyway migrations" },
        { value: "49", label: "automation scripts" },
        { value: "27", label: "route-quality scenarios" },
        { value: "211,510", label: "v3.7 scenic H3 tiles validated" },
        { value: "14,092", label: "non-zero viewpoint tiles" },
        { value: "6,480", label: "non-zero bridge/coastal tiles" },
      ],
      mermaidDiagram: `
flowchart LR
  Client[Next.js + Mapbox<br/>Route request]
  API[Spring Boot<br/>route-api]
  DB[(PostgreSQL + PostGIS<br/>route_jobs, scenic tiles)]
  Redis[(Redis<br/>caches)]
  Kafka[Kafka<br/>job events]
  Worker[Java worker<br/>route-worker]
  OSRM[Local OSRM<br/>/trip]
  Notify[Notification service<br/>WebSockets]

  Client -->|POST /routes| API
  API -->|persist job| DB
  API -->|publish job event| Kafka
  Kafka -->|consume| Worker
  Worker -->|read scenic tiles| DB
  Worker -->|cache lookup| Redis
  Worker -->|candidate waypoints + /trip| OSRM
  OSRM -->|legal road geometry| Worker
  Worker -->|score + dedupe| Worker
  Worker -->|persist options| DB
  Worker -->|completion event| Kafka
  Kafka -->|push via WS| Notify
  Notify -->|WebSocket / polling| Client
      `,
      diagramGuidance: {
        architecture: "Route requests become Kafka jobs; workers combine cached scenic H3 data with local OSRM geometry before publishing results.",
        lifecycle: "The API acknowledges the job immediately; the worker generates, scores, persists, and then notifies the browser.",
      },
      systemFlow: [
        {
          title: "Route request",
          eyebrow: "Frontend",
          detail: "The Next.js/Mapbox client sends a start point, time budget, and vibe request without waiting for route generation to finish.",
          stack: ["Next.js", "Mapbox GL", "REST"],
        },
        {
          title: "Job persisted",
          eyebrow: "route-api",
          detail: "Spring Boot stores the request as a durable route_jobs row so status, retries, and failures have a source of truth.",
          stack: ["Spring Boot", "PostgreSQL", "Flyway"],
        },
        {
          title: "Kafka dispatch",
          eyebrow: "Queue",
          detail: "The job ID is published to Kafka, decoupling the public API from expensive OSRM calls and scoring work.",
          stack: ["Kafka", "Zookeeper", "events"],
        },
        {
          title: "Worker planning",
          eyebrow: "route-worker",
          detail: "Workers load nearby scenic H3 tiles, road anchors, regional hints, and vibe-specific candidate strategies.",
          stack: ["Java", "H3", "Redis", "PostGIS"],
        },
        {
          title: "Legal road geometry",
          eyebrow: "OSRM",
          detail: "Candidate waypoint sets are sent to local OSRM /trip so every route follows real drivable roads.",
          stack: ["OSRM", "OpenStreetMap", "/trip"],
        },
        {
          title: "Scenic scoring",
          eyebrow: "Scoring engine",
          detail: "Returned corridors are sampled against scenic_score_tiles and scored for vibe fit, scenery, shape, duration, and backtracking risk.",
          stack: ["H3 tiles", "vibe contracts", "QA baselines"],
        },
        {
          title: "Route options",
          eyebrow: "Results",
          detail: "Wayward persists most_scenic, balanced, and shorter options with explanations and score breakdowns.",
          stack: ["PostGIS", "Redis cache", "route options"],
        },
        {
          title: "User notified",
          eyebrow: "Realtime",
          detail: "The notification service pushes completion or failure to the browser over WebSockets, with polling fallback.",
          stack: ["WebSockets", "Kafka events", "polling"],
        },
      ],
      simulationEyebrow: "Route pipeline",
      simulationTitle: "Route worker execution trace",
      simulationLogTitle: "route-worker.log",
      simulationResult: {
        title: "Three route options ready",
        detail: "Most scenic, balanced, and shorter profiles are persisted and delivered to the UI.",
      },
      lifecycleDiagram: `
sequenceDiagram
  participant C as Client (Next.js)
  participant A as route-api
  participant K as Kafka
  participant W as route-worker
  participant O as OSRM
  participant D as PostGIS/Redis
  participant N as Notification service

  C->>A: POST /routes {time, vibe, location}
  A->>D: INSERT route_jobs (pending)
  A->>K: publish route_job.created
  A-->>C: 202 Accepted {job_id}

  K->>W: consume route_job.created
  W->>D: load scenic H3 tiles + caches
  W->>W: generate waypoint candidates
  W->>O: /trip with candidates
  O-->>W: legal loop geometry
  W->>W: score geometry vs scenic tiles
  W->>W: apply vibe contracts, dedupe
  W->>D: persist route_options + explanations
  W->>K: publish route_job.completed/failed
  K->>N: forward completion event
  N->>C: WebSocket push (or polling fallback)
      `,
      routeSimulation: [
        "Persist route job",
        "Publish Kafka event",
        "Load scenic H3 neighborhood",
        "Generate waypoint candidates",
        "Call local OSRM /trip",
        "Sample geometry against scenic tiles",
        "Apply vibe contracts and dedupe",
        "Return three route profiles",
      ],
      engineeringDecisions: [
        {
          title: "Async jobs instead of blocking HTTP",
          why: "Route generation can require multiple OSRM calls, scenic tile reads, candidate scoring passes, and failure handling. Keeping that inside one request would make the app fragile.",
          tradeoff: "Adds Kafka and worker operations, but gives responsive UX, durable status, retries, and cleaner service boundaries.",
        },
        {
          title: "Local OSRM instead of paid routing APIs",
          why: "Wayward needs control over loop candidates, repeated route experiments, and legal road geometry without depending on per-request third-party costs.",
          tradeoff: "Requires managing OSRM datasets and infrastructure, but keeps routing behavior predictable and owned.",
        },
        {
          title: "Offline scenic releases instead of runtime enrichment",
          why: "Computing water, greenery, elevation, road stress, tree canopy, POIs, and urban pressure during user requests would be too slow.",
          tradeoff: "Data releases become a pipeline, but runtime scoring becomes fast lookup against versioned H3 feature vectors.",
        },
        {
          title: "Vibe contracts instead of always returning a route",
          why: "A mountain route in flat geography or a coastal route far inland should not be disguised as a good match.",
          tradeoff: "Some requests honestly fail, but users get better trust and suggested alternatives instead of misleading output.",
        },
      ],
      failureModes: [
        "OSRM cannot produce a usable loop",
        "Selected vibe is unavailable nearby",
        "Candidate routes overlap or backtrack too much",
        "Scenic signal is too weak for the requested promise",
        "WebSocket delivery fails and polling must recover",
        "Scenic tile cache misses fall back to PostGIS",
      ],
      architecture: [
        {
          title: "Async route pipeline",
          detail: "Route requests are persisted, published to Kafka, processed by route-worker services, and surfaced back through WebSocket notifications instead of blocking HTTP.",
        },
        {
          title: "Local OSRM for legal geometry",
          detail: "Wayward lets OSRM solve road legality while custom code decides which candidate waypoints should shape the loop and whether the result matches the selected vibe.",
        },
        {
          title: "H3/PostGIS scenic feature store",
          detail: "Runtime scoring samples precomputed scenic_score_tiles for water, greenery, elevation, solitude, road stress, tree canopy, scenic POIs, viewpoints, and coastal moments.",
        },
        {
          title: "Redis-backed lookup path",
          detail: "Scenic tile, route result, road metadata, and regional popularity caches reduce repeated geospatial reads while preserving PostGIS as the source of truth.",
        },
        {
          title: "Production compose stack",
          detail: "The deployed stack includes Next.js, route-api, route-worker, notification-service, Postgres/PostGIS, Redis, Kafka/Zookeeper, OSRM, and Caddy TLS.",
        },
        {
          title: "Versioned data releases",
          detail: "OSRM datasets and scenic tile releases are built separately from app code so route-data upgrades can be evaluated, shipped, and rolled back intentionally.",
        },
      ],
      differentiators: [
        {
          title: "Experience-first routing",
          detail: "The product does not ask where the user wants to go; it finds a nearby drive worth taking based on available time and mood.",
        },
        {
          title: "Offline scenic enrichment",
          detail: "Expensive raw geospatial processing happens before release, not inside the user request path.",
        },
        {
          title: "Vibe contracts",
          detail: "The engine can return vibe_unavailable with alternatives when the local geography cannot honestly satisfy a requested mountain, coastal, forest, quiet, or photo-worthy route.",
        },
        {
          title: "Explainable scoring",
          detail: "Routes carry summaries, human reasons, component averages, weighted contributions, contract flags, and warnings instead of a mystery scenic score.",
        },
        {
          title: "Multiple route profiles",
          detail: "Successful jobs return most_scenic, balanced, and shorter options so users can trade off scenic strength, practicality, and duration fit.",
        },
        {
          title: "QA as route contract",
          detail: "Scenario baselines check completion, option count, duration fit, score spread, geometry separation, explanations, weak-vibe signals, and repeated-road risk.",
        },
      ],
      features: [
        {
          title: "Scenic loop generation",
          detail: "Generates loop-style driving routes from a start point, time budget, and selected route vibe.",
        },
        {
          title: "Hybrid OSRM v2 engine",
          detail: "Candidate strategies include sector rings, intent anchors, water-following, open-space escape, photo/viewpoint peaks, quiet roads, curvy/elevation, balanced variety, and rescue variants.",
        },
        {
          title: "Scenic Match scoring",
          detail: "Internal 0.0 to 1.0 quality scores are exposed as a user-readable 0 to 100 Scenic Match score.",
        },
        {
          title: "Route explanations",
          detail: "Returned options explain why they were selected using human-readable reasons, component scores, contract flags, and warnings.",
        },
        {
          title: "WebSocket completion updates",
          detail: "A notification service pushes route completion and failure events to the frontend, with polling available as a fallback.",
        },
        {
          title: "Privacy-safe analytics",
          detail: "Product analytics avoid accounts and raw personal identity by hashing browser IDs server-side and bucketing start locations coarsely.",
        },
      ],
      impact: [
        {
          title: "Production-style system depth",
          detail: "Wayward demonstrates service boundaries, async messaging, geospatial persistence, caching, local routing, TLS proxying, and deploy automation in one cohesive product.",
        },
        {
          title: "Request path stays lean",
          detail: "Runtime services score prepared feature vectors instead of recomputing land cover, elevation, water, buildings, parks, roads, and light-pollution signals per request.",
        },
        {
          title: "Honest unavailable behavior",
          detail: "The latest documented route-quality rerun covered 27 scenarios with 19 completed scenarios and 8 honest unavailable scenarios where weak vibe matches were rejected.",
        },
        {
          title: "Scenic-data upgrades proved useful",
          detail: "A v3.5-to-v3.7 comparison found 57 comparable completed route options, 16 geometry changes of at least 0.2 km, and 35 final-score changes of at least 0.005.",
        },
        {
          title: "Operational release path",
          detail: "GitHub Actions, GHCR images, health checks, rollback scripts, versioned scenic data, versioned OSRM data, and Caddy TLS make the project deployable rather than just demonstrable.",
        },
      ],
      resumeBullets: [
        "Built Wayward, a full-stack scenic route-generation platform using Spring Boot, Kafka, PostGIS, Redis, OSRM, H3, Next.js, React, TypeScript, Mapbox GL, Docker Compose, Caddy, and GitHub Actions.",
        "Designed an event-driven route pipeline where jobs are persisted, queued through Kafka, processed by workers, scored against H3 scenic tiles, and delivered through WebSocket notifications with polling fallback.",
        "Implemented hybrid_osrm_v2, combining local OSRM /trip geometry with custom scenic/vibe scoring, route explanations, contract checks, and route profiles for most_scenic, balanced, and shorter options.",
        "Built versioned scenic-data releases that precompute water, greenery, elevation, road stress, tree canopy, scenic POIs, viewpoints, urban pressure, and bridge/coastal signals into PostGIS-backed H3 tiles.",
        "Added route-quality evaluation across 27 fixed scenarios to validate duration fit, score spread, geometry separation, explanations, unavailable behavior, and repeated-road risk.",
        "Deployed a production-style multi-service stack behind Caddy TLS with GHCR image publishing, Docker Compose operations, release health checks, rollback scripts, Redis caching, Kafka messaging, and local OSRM routing.",
      ],
    },
    {
      slug: "lazydrop",
      featuredRank: 2,
      title: "LazyDrop",
      headline: "Instant cross-device file transfer with realtime sessions, signed uploads, and subscription enforcement.",
      description:
        "A production-ready web platform for moving files between devices with QR/code pairing, WebSocket coordination, temporary object storage, Supabase auth, and Stripe billing.",
      category: "Realtime File Transfer",
      image: "./public/assets/project-lazydrop.png",
      url: "https://lazydrop.app",
      proof: "Realtime file transfer with signed uploads and Stripe plans · WebSocket sessions · cleanup jobs",
      links: [
        { label: "Live Site", href: "https://lazydrop.app" },
        { label: "Case Study", href: "#project/lazydrop" },
      ],
      tags: ["Next.js", "React", "Spring Boot", "PostgreSQL", "WebSockets", "Stripe", "S3"],
      overview:
        "LazyDrop is a real-time, session-based file sharing SaaS. Users create temporary drop rooms, invite others through an 8-character code or QR link, and transfer files directly between devices through secure signed upload and download URLs. The lightweight UX is backed by authentication, guest access, STOMP/SockJS WebSockets, DigitalOcean Spaces, Stripe subscriptions, server-side plan enforcement, background cleanup, and CI/CD.",
      problem:
        "Moving files across devices is still surprisingly clunky. People email files to themselves, upload to shared drives, install apps, create accounts, or expose permanent links for one-time transfers. The technical challenge was making sessions feel instant while still expiring reliably, supporting large payloads without overloading the backend, updating connected users live, allowing guests safely, enforcing paid limits server-side, and processing Stripe webhooks safely across retries or out-of-order delivery.",
      solution:
        "LazyDrop uses temporary drop sessions as the core abstraction. Each session owns a short code, QR/share link, owner, participants, files, notes, expiration timestamp, and status. Uploads use a two-phase signed URL flow: the frontend requests an upload URL, the browser uploads directly to DigitalOcean Spaces, the frontend confirms completion, and the backend persists metadata before broadcasting a typed WebSocket event. File bytes never pass through the API server, and abandoned uploads do not create phantom database rows.",
      metrics: [
        { value: "116", label: "backend Java source files" },
        { value: "42", label: "frontend JS/JSX source files" },
        { value: "10,853", label: "production source lines" },
        { value: "45", label: "backend test methods" },
        { value: "28", label: "frontend test cases" },
        { value: "29", label: "mapped backend controller operations" },
        { value: "14", label: "WebSocket event types" },
        { value: "8", label: "core database tables" },
      ],
      systemEyebrow: "Realtime transfer architecture",
      systemTitle: "How LazyDrop moves files without routing bytes through the API",
      mermaidDiagram: `
flowchart LR
  Browser[Next.js<br/>drop room UI]
  Auth[Supabase Auth<br/>JWT + guest cookie]
  API[Spring Boot<br/>session/file API]
  DB[(PostgreSQL<br/>sessions, participants, files)]
  Spaces[(DigitalOcean Spaces<br/>file bytes)]
  Topic[STOMP topic<br/>session events]
  Stripe[Stripe<br/>checkout + webhooks]
  Jobs[Schedulers + LazyQueue<br/>cleanup + retries]

  Browser -->|join/create session| API
  Auth -->|identity context| API
  API -->|enforce plan + access| DB
  API -->|signed upload URL| Browser
  Browser -->|direct upload bytes| Spaces
  Browser -->|confirm upload| API
  API -->|persist metadata only| DB
  API -->|broadcast typed event| Topic
  Topic -->|live file state| Browser
  API -->|signed download URL| Browser
  Stripe -->|idempotent webhook| API
  Jobs -->|expire sessions| DB
  Jobs -->|delete expired objects| Spaces
      `,
      diagramGuidance: {
        architecture: "Browsers transfer bytes directly to DigitalOcean Spaces with signed URLs while the API manages access, metadata, and realtime session state.",
        lifecycle: "After a session is created and joined, upload confirmation persists metadata and broadcasts the update to participants.",
      },
      systemFlow: [
        {
          title: "Create drop room",
          eyebrow: "Session",
          detail: "The backend creates a temporary session with an 8-character code, QR/share link, owner, participants, expiration timestamp, and status.",
          stack: ["Spring Boot", "PostgreSQL", "Flyway"],
        },
        {
          title: "Join securely",
          eyebrow: "Access",
          detail: "Authenticated users join with Supabase JWTs while guests use cookies so quick participation does not bypass backend access control.",
          stack: ["Supabase Auth", "guest cookies", "Spring Security"],
        },
        {
          title: "Request upload",
          eyebrow: "Validation",
          detail: "The API checks session state, participant permissions, subscription tier, file count, participant count, notes, and max file size before issuing an upload URL.",
          stack: ["plan limits", "Java 21", "JPA"],
        },
        {
          title: "Upload directly",
          eyebrow: "Storage",
          detail: "The browser sends file bytes directly to DigitalOcean Spaces through an S3-compatible signed URL instead of streaming payloads through the backend.",
          stack: ["DigitalOcean Spaces", "S3 signed URLs", "browser upload"],
        },
        {
          title: "Confirm metadata",
          eyebrow: "Persistence",
          detail: "Only successful uploads are confirmed back to the backend, which persists file metadata and download tracking records.",
          stack: ["PostgreSQL 16", "file metadata", "download audit"],
        },
        {
          title: "Broadcast update",
          eyebrow: "Realtime",
          detail: "Participants subscribed to the session topic receive typed events for uploads, downloads, notes, thumbnails, joins, leaves, closure, and expiration.",
          stack: ["STOMP", "SockJS", "WebSockets"],
        },
        {
          title: "Bill and enforce",
          eyebrow: "Stripe",
          detail: "Checkout, billing portal, cancellation, reactivation, status sync, and webhook retry state feed backend-enforced plan limits.",
          stack: ["Stripe", "webhooks", "subscriptions"],
        },
        {
          title: "Clean expired data",
          eyebrow: "Jobs",
          detail: "Spring schedulers and LazyQueue hooks clean expired sessions, stale participants, storage files, thumbnails, and retryable webhook work.",
          stack: ["Schedulers", "LazyQueue", "cleanup jobs"],
        },
      ],
      simulationEyebrow: "Transfer lifecycle",
      simulationTitle: "Signed upload and realtime delivery flow",
      simulationLogTitle: "drop-session.log",
      simulationResult: { title: "File available to participants", detail: "Metadata is confirmed, peers are notified, and downloads use signed URLs." },
      lifecycleDiagram: `
sequenceDiagram
  participant B as Browser
  participant A as Spring Boot API
  participant S as DigitalOcean Spaces
  participant D as PostgreSQL
  participant T as STOMP topic
  participant P as Peer browser

  B->>A: POST /files/upload-url {session, file}
  A->>D: validate session, role, plan limits
  A-->>B: signed PUT URL + storage key
  B->>S: PUT file bytes directly
  S-->>B: 200 upload complete
  B->>A: POST /files/confirm {storage key}
  A->>D: INSERT file metadata
  A->>T: publish file.uploaded
  T-->>P: realtime file event
  P->>A: GET signed download URL
  A-->>P: short-lived download URL
  P->>S: download file directly
      `,
      routeSimulation: [
        "Create temporary drop session",
        "Participant joins by QR link or session code",
        "Validate plan and session limits",
        "Generate signed upload URL",
        "Browser uploads directly to Spaces",
        "Confirm upload and persist metadata",
        "Broadcast WebSocket file event",
        "Generate signed download URL on demand",
      ],
      engineeringDecisions: [
        {
          title: "Signed URLs instead of backend uploads",
          why: "Large file payloads should not consume API memory, bandwidth, or request time when object storage is built for that path.",
          tradeoff: "Requires a confirmation step and storage cleanup, but keeps the backend focused on authorization, metadata, events, and billing.",
        },
        {
          title: "Confirm before persisting file records",
          why: "Users can abandon uploads, close tabs, or fail midway after receiving an upload URL.",
          tradeoff: "Adds a two-phase flow, but prevents phantom database records for files that never reached storage.",
        },
        {
          title: "Server-side plan enforcement",
          why: "Guest, Free, Plus, and Pro limits are product rules and cannot be trusted to frontend checks.",
          tradeoff: "Every write path needs limit checks, but direct API calls cannot bypass file-size, session, participant, file-count, or note limits.",
        },
        {
          title: "Idempotent webhook storage",
          why: "Stripe can retry events or deliver them out of order, so billing state cannot depend on one happy-path webhook attempt.",
          tradeoff: "Webhook events need leases, retry attempts, and error metadata, but duplicate events and transient failures become manageable.",
        },
      ],
      failureModes: [
        "Expired sessions must reject new uploads and trigger cleanup",
        "Guests need fast access without bypassing session authorization",
        "Abandoned signed uploads must not create file records",
        "Stripe duplicate or out-of-order webhooks must not corrupt subscription state",
        "Canceled subscriptions must downgrade limits reliably",
        "Disconnected participants and temporary storage need background cleanup",
      ],
      architecture: [
        {
          title: "Session lifecycle",
          detail: "Drop sessions own codes, owners, guests, participants, expiration timestamps, status, and share links.",
        },
        {
          title: "Direct object storage",
          detail: "Signed upload/download URLs keep large file payloads on DigitalOcean Spaces instead of the API server.",
        },
        {
          title: "Typed realtime events",
          detail: "STOMP topics broadcast joins, leaves, uploads, downloads, thumbnail readiness, closure, and expiration.",
        },
        {
          title: "Billing and plans",
          detail: "Stripe checkout, billing portal, subscription syncing, and server-side limits are handled in backend domains.",
        },
        {
          title: "Background cleanup",
          detail: "Schedulers and LazyQueue hooks handle expired sessions, stale participants, thumbnails, and webhook reprocessing.",
        },
        {
          title: "CI/CD pipeline",
          detail: "GitHub Actions cover tests, builds, linting, Docker images, Trivy scans, Qodana checks, and deployment workflows.",
        },
      ],
      differentiators: [
        {
          title: "Backend avoids file bytes",
          detail: "The API validates permissions and records metadata while object storage handles the expensive transfer path.",
        },
        {
          title: "No phantom records",
          detail: "Files are only recorded after the browser confirms the storage upload succeeded.",
        },
        {
          title: "Idempotent Stripe webhooks",
          detail: "Webhook events are stored with Stripe event IDs, processing status, retry attempts, leases, and error metadata.",
        },
        {
          title: "Server-enforced plan limits",
          detail: "Guest, Free, Plus, and Pro limits are enforced by backend APIs, not only hidden in the UI.",
        },
        {
          title: "Temporary data model",
          detail: "Sessions expire, participants are cleaned, and files can be removed instead of creating unbounded storage growth.",
        },
        {
          title: "Guest-friendly without being loose",
          detail: "Guest cookies allow fast participation while the backend still owns access control and session state.",
        },
      ],
      features: [
        {
          title: "Temporary drop rooms",
          detail: "Users create short-lived sessions and invite participants through QR codes, links, or short session codes.",
        },
        {
          title: "Two-phase signed uploads",
          detail: "Browsers upload directly to S3-compatible storage, then confirm completion before metadata is persisted.",
        },
        {
          title: "Signed downloads",
          detail: "Downloads are generated on demand instead of exposing permanent public file links.",
        },
        {
          title: "Realtime session state",
          detail: "Participants see uploads, downloads, notes, joins, leaves, cleanup, session closure, and expiration as events happen.",
        },
        {
          title: "Stripe subscriptions",
          detail: "Checkout, customer portal, cancellation, reactivation, status syncing, webhook retries, and duplicate protection are supported.",
        },
        {
          title: "Plan enforcement",
          detail: "Backend limits cover sessions, file size, file count, participant count, notes, and subscription state.",
        },
      ],
      impact: [
        {
          title: "Backend never handles file bytes",
          detail: "Files go directly to S3-compatible storage, keeping API compute focused on permissions, metadata, sessions, and plan rules.",
        },
        {
          title: "Operational cleanup built in",
          detail: "Scheduled jobs expire sessions, remove stale participants, downgrade canceled subscriptions, and keep temporary transfer state clean.",
        },
        {
          title: "Production-style failure handling",
          detail: "Webhook retries, processing leases, unique event IDs, background jobs, and CI checks model real SaaS reliability concerns.",
        },
        {
          title: "Scales along the right boundary",
          detail: "Storage bandwidth, API validation, metadata, events, billing, and cleanup are separated instead of collapsed into one upload endpoint.",
        },
      ],
      resumeBullets: [
        "Built LazyDrop, a real-time file sharing platform using Next.js, React, Spring Boot, PostgreSQL, WebSockets, Supabase Auth, DigitalOcean Spaces, and Stripe.",
        "Implemented a two-phase signed URL upload flow so browsers upload files directly to S3-compatible storage while the backend handles validation, metadata, and realtime events.",
        "Designed session-based sharing with QR/code joining, guest participation, expiring sessions, participant roles, file download tracking, and live WebSocket updates.",
        "Built server-side subscription enforcement for Guest, Free, Plus, and Pro plans, including file-size, active-session, participant, file-count, and note limits.",
        "Developed Stripe billing infrastructure with Checkout, billing portal, cancellation/reactivation, idempotent webhook storage, retry scheduling, and duplicate-event protection.",
        "Created CI/CD workflows with Maven tests, Vitest, ESLint, Docker builds, Trivy scanning, Qodana, JaCoCo, and Testcontainers.",
      ],
    },
    {
      slug: "wheredidiapply",
      featuredRank: 3,
      title: "WhereDidIApply",
      headline: "Privacy-first Gmail job tracker with a rules-first classifier and Gemini fallback.",
      description:
        "An AI-assisted job application tracker that classifies Gmail job-search emails while keeping OAuth tokens in the browser and avoiding server-side email storage.",
      category: "Privacy-First AI Pipeline",
      image: "./public/assets/project-wheredidiapply.png",
      url: "https://wheredidiapply.tech",
      proof: "Privacy-first Gmail tracker · 1,500-email scan runs · 34 classification regex patterns",
      links: [
        { label: "Live Site", href: "https://wheredidiapply.tech" },
        { label: "Case Study", href: "#project/wheredidiapply" },
      ],
      tags: ["Next.js", "TypeScript", "Spring Boot", "Gmail API", "Gemini", "OAuth", "GCP"],
      overview:
        "WhereDidIApply is a privacy-first job application tracker that turns a Gmail inbox into a structured job-search dashboard. The app connects to Gmail with read-only OAuth, searches for job-related emails, classifies them with a hybrid regex and Gemini pipeline, deduplicates results by normalized company and role, and displays applications in an editable, searchable, exportable dashboard.",
      problem:
        "Job seekers apply across dozens or hundreds of roles, then lose track of confirmations, assessments, interviews, rejections, and offers buried in email. Manual spreadsheets are tedious and incomplete. Existing AI trackers can also create privacy risk if they centralize Gmail tokens or persist sensitive email data.",
      solution:
        "The browser fetches Gmail messages directly with a read-only token that never leaves the client. A stateless Spring Boot backend receives only subject, sender, and body text for classification, processes it in memory, and returns structured records. Deterministic rules and marketing prefilters handle high-signal cases first, while Gemini 2.0 Flash runs at temperature 0.0 with a strict JSON schema for ambiguous classification or field extraction.",
      metrics: [
        { value: "1,500", label: "emails supported per backend scan run" },
        { value: "59", label: "Gmail phrase signals" },
        { value: "17", label: "sender filters before parsing" },
        { value: "34", label: "classification regex patterns" },
        { value: "10", label: "extraction-related patterns" },
        { value: "200", label: "parse requests per minute per run" },
        { value: "4", label: "backend concurrent parses per run" },
        { value: "0", label: "server-side databases for email results" },
      ],
      systemEyebrow: "Privacy-first AI pipeline",
      systemTitle: "How WhereDidIApply turns Gmail into a local job-search dashboard",
      mermaidDiagram: `
flowchart LR
  Browser[Next.js<br/>Browser-held Gmail token]
  Gmail[Gmail API<br/>read-only]
  API[Spring Boot<br/>stateless classifier]
  Rules[Rules engine<br/>regex + marketing filters]
  LLM[Gemini 2.0 Flash<br/>schema fallback]
  Local[(localStorage<br/>application dashboard)]

  Browser -->|OAuth read-only| Gmail
  Browser -->|subject/body snippets only| API
  API -->|prefilter| Rules
  Rules -->|high confidence| API
  Rules -->|ambiguous| LLM
  LLM -->|structured JSON| API
  API -->|classified records| Browser
  Browser -->|cache + edit| Local
      `,
      diagramGuidance: {
        architecture: "No arrow from the browser to the backend carries Gmail OAuth tokens. The backend receives only email text snippets for in-memory classification.",
        lifecycle: "The browser fetches Gmail with its read-only token, sends snippets for in-memory classification, and stores the resulting dashboard locally.",
      },
      systemFlow: [
        {
          title: "Authorize Gmail",
          eyebrow: "Browser",
          detail: "Google OAuth grants Gmail read-only access, and the token stays entirely in the browser instead of being sent to the backend.",
          stack: ["Google OAuth", "Gmail read-only", "Next.js"],
        },
        {
          title: "Search targeted mail",
          eyebrow: "Gmail API",
          detail: "The client uses job-search phrase signals, sender filters, scan windows, email limits, and worker counts to reduce inbox noise before parsing.",
          stack: ["59 phrase signals", "17 sender filters", "scan controls"],
        },
        {
          title: "Create scan run",
          eyebrow: "Backend guardrail",
          detail: "The backend issues HMAC-signed run tokens with quota, TTL, rate-limit, and concurrency controls for predictable large inbox scans.",
          stack: ["HMAC tokens", "2-hour TTL", "rate limits"],
        },
        {
          title: "Classify with rules",
          eyebrow: "Deterministic",
          detail: "Regex classifiers handle high-confidence application, interview, assessment, offer, rejection, and action-required messages before using the LLM.",
          stack: ["34 status patterns", "10 extraction patterns", "marketing filter"],
        },
        {
          title: "Fallback to Gemini",
          eyebrow: "AI",
          detail: "Ambiguous emails use Gemini 2.0 Flash with temperature 0.0 and structured JSON schema output for normalized fields.",
          stack: ["Gemini 2.0 Flash", "JSON schema", "WebFlux"],
        },
        {
          title: "Merge evidence",
          eyebrow: "Normalizer",
          detail: "Rules and Gemini outputs are merged by confidence, then deduplicated by normalized company and role with status priority.",
          stack: ["dedupe", "status priority", "confidence merge"],
        },
        {
          title: "Store locally",
          eyebrow: "Privacy",
          detail: "The dashboard stores results in browser localStorage with search, filters, sorting, editing, deletion, row expansion, and CSV export.",
          stack: ["localStorage", "CSV export", "React"],
        },
        {
          title: "Operate safely",
          eyebrow: "Production",
          detail: "Docker, GitHub Actions, Cloud Run deploys, OpenAPI docs, structured logs, health checks, and circuit breakers support production-style operation.",
          stack: ["Docker", "Cloud Run", "Resilience4j"],
        },
      ],
      simulationEyebrow: "Scan lifecycle",
      simulationTitle: "Rules-first Gmail classification flow",
      simulationLogTitle: "gmail-scan.log",
      simulationResult: { title: "Dashboard ready locally", detail: "Applications are deduped, prioritized, editable, and cached in the browser." },
      lifecycleDiagram: `
sequenceDiagram
  participant B as Browser
  participant G as Gmail API
  participant A as Spring Boot API
  participant R as Rules engine
  participant L as Gemini
  participant S as localStorage

  B->>G: Gmail read-only search query
  G-->>B: candidate messages
  B->>A: start scan run
  A-->>B: HMAC run token + quotas
  loop batched parse requests
    B->>A: subject, sender, body text
    A->>R: marketing filter + regex classification
    alt high-confidence rules match
      R-->>A: structured record
    else ambiguous email
      A->>L: schema-constrained classification
      L-->>A: structured JSON
    end
    A-->>B: classified application record
  end
  B->>B: merge + dedupe by company and role
  B->>S: cache editable dashboard + CSV-ready rows
      `,
      routeSimulation: [
        "Authorize Gmail read-only access",
        "Search targeted job-related emails",
        "Batch messages through scan workers",
        "Apply marketing and rules prefilters",
        "Use Gemini only for ambiguous cases",
        "Merge company, role, status, and links",
        "Deduplicate by normalized company + role",
        "Cache editable results locally and export CSV",
      ],
      engineeringDecisions: [
        {
          title: "Browser-owned Gmail token",
          why: "Email OAuth credentials are highly sensitive, and the product does not need the backend to call Gmail.",
          tradeoff: "The frontend owns more scan orchestration, but users do not have to trust the server with Gmail tokens.",
        },
        {
          title: "Stateless backend classification",
          why: "The backend only needs transient email text to classify a message and return structured JSON.",
          tradeoff: "No central sync database, but email content and results are not persisted server-side.",
        },
        {
          title: "Rules before LLM calls",
          why: "Many job emails have strong deterministic signals, while LLM calls add latency, cost, and privacy exposure.",
          tradeoff: "Requires maintaining regex patterns, but reduces unnecessary Gemini usage and improves predictability.",
        },
        {
          title: "Run-level quotas and concurrency caps",
          why: "Large inbox scans can otherwise turn into unbounded request bursts against both the backend and Gemini.",
          tradeoff: "Adds scan token state and rate limiting, but keeps 1,500-email runs predictable.",
        },
      ],
      failureModes: [
        "OAuth tokens must never be sent to the backend",
        "Marketing emails must be filtered before expensive AI classification",
        "Duplicate company and role emails must merge into one application row",
        "Older Applied messages must not override newer Interview, Offer, or Rejected signals",
        "Large scans need quotas, rate limits, retries, and progress batching",
        "Gemini failures need circuit breaker protection and rules-first fallback behavior",
      ],
      architecture: [
        {
          title: "Client-side Gmail access",
          detail: "Google OAuth uses Gmail read-only scope, and the access token stays entirely in the browser.",
        },
        {
          title: "Stateless classifier API",
          detail: "The backend receives email text, classifies it in memory, returns JSON, and does not persist email content.",
        },
        {
          title: "Rules-first pipeline",
          detail: "Deterministic patterns classify high-confidence cases before the system spends money or privacy budget on an LLM.",
        },
        {
          title: "Gemini fallback",
          detail: "Gemini 2.0 Flash runs at temperature 0.0 with a strict JSON schema for ambiguous cases and field extraction.",
        },
        {
          title: "Run-level controls",
          detail: "HMAC-signed run tokens, quotas, per-run rate limits, concurrency caps, retries, and circuit breakers protect scan workloads.",
        },
        {
          title: "Browser-owned results",
          detail: "Classified applications are cached locally with search, filtering, sorting, editing, pagination, row expansion, and CSV export.",
        },
      ],
      differentiators: [
        {
          title: "Token never leaves the browser",
          detail: "The backend never receives Gmail credentials or OAuth tokens, reducing the trust users must place in the server.",
        },
        {
          title: "No server-side email storage",
          detail: "Email text is processed in memory and results live in localStorage instead of a backend database.",
        },
        {
          title: "LLM used selectively",
          detail: "Rules and prefilters avoid sending every email to Gemini, improving speed, cost, and privacy posture.",
        },
        {
          title: "Status prioritization",
          detail: "Multiple emails for a company and role are merged so meaningful states like Offer or Interview outrank older Applied messages.",
        },
        {
          title: "Large-scan discipline",
          detail: "Run quotas, concurrency controls, batching, and retries make inbox scans predictable instead of a burst of unbounded requests.",
        },
        {
          title: "Not just an AI wrapper",
          detail: "The value is in data flow, privacy boundaries, classifier merging, UI workflow, and reliability controls.",
        },
      ],
      features: [
        {
          title: "Token stays in the browser",
          detail: "The Gmail access token never reaches the backend; the browser talks directly to Gmail.",
        },
        {
          title: "Targeted Gmail search",
          detail: "Search queries use phrase signals and sender filters to reduce inbox noise before parsing begins.",
        },
        {
          title: "Hybrid classifier",
          detail: "Rules and Gemini outputs are merged by confidence so the system balances speed, predictability, and context.",
        },
        {
          title: "Scan controls",
          detail: "Users can choose scan windows, frontend limits, worker counts, and recover progress through batched updates.",
        },
        {
          title: "Application dashboard",
          detail: "Results support deduplication, status priority, search, filters, sorting, pagination, row expansion, editing, deletion, and CSV export.",
        },
        {
          title: "Self-hostable stack",
          detail: "Dockerized frontend and backend make the privacy model inspectable and runnable outside the hosted deployment.",
        },
      ],
      impact: [
        {
          title: "Self-hostable architecture",
          detail: "Users can run the stack themselves and disable Gemini for a rules-only mode if they want maximum privacy.",
        },
        {
          title: "Production controls",
          detail: "Run tokens, quotas, semaphores, and Resilience4j protect the service from runaway scans and flaky model calls.",
        },
        {
          title: "Reduced manual tracking",
          detail: "Gmail history is converted into a structured dashboard rather than forcing users to maintain a spreadsheet by hand.",
        },
        {
          title: "Reduced unnecessary LLM usage",
          detail: "Rules-first classification and marketing prefilters limit model calls to ambiguous emails.",
        },
        {
          title: "Privacy-preserving workflow",
          detail: "OAuth tokens remain client-side and email content is not persisted server-side.",
        },
      ],
      resumeBullets: [
        "Built WhereDidIApply, a full-stack AI job application tracker using Next.js, React, TypeScript, Java 21, Spring Boot, Gmail API, and Gemini 2.0 Flash.",
        "Designed a privacy-first Gmail ingestion flow where OAuth tokens remain client-side and email content is processed in memory without server-side persistence.",
        "Implemented a hybrid classification pipeline using 34 regex classification patterns, 10 extraction patterns, Gemini JSON-schema fallback, and confidence-based result merging.",
        "Engineered scan controls supporting up to 1,500 emails per run, 200 requests/minute/run, 4 backend concurrent parses, retry logic, and progress batching.",
        "Developed an interactive dashboard with deduplication, status prioritization, search, filtering, sorting, pagination, inline editing, local caching, and CSV export.",
        "Added production-readiness features including HMAC-signed run tokens, rate limiting, quota enforcement, circuit breaking, Dockerized services, GitHub Actions CI/CD, Cloud Run deployment, OpenAPI docs, and structured logging.",
      ],
    },
    {
      slug: "spotlight",
      featuredRank: 4,
      title: "Spotlight",
      headline: "Spring Boot backend migration for a student social app with discovery, activities, safety, and chat.",
      description:
        "A backend migration that moved Spotlight from a frontend-heavy Supabase-direct model to server-owned APIs, PostgreSQL persistence, and WebSocket chat.",
      category: "Mobile Backend Migration",
      image: "./public/assets/work-axilab.jpg",
      url: "https://github.com/10xDeVv",
      proof: "Spring Boot backend migration · PostgreSQL-owned app data · STOMP realtime chat",
      links: [
        { label: "GitHub", href: "https://github.com/10xDeVv" },
        { label: "Case Study", href: "#project/spotlight" },
      ],
      tags: ["Spring Boot", "PostgreSQL", "Expo", "Supabase", "STOMP"],
      overview:
        "Spotlight is a React Native app for university students built around compatibility, lightweight messaging, weekly prompts, and real-world activities. I migrated the active app toward a backend-owned model while preserving Supabase Auth.",
      problem:
        "The original app moved quickly, but too much product behavior lived in the client or raw Supabase table access. Matching, chat state, safety, notifications, unread counts, and feed logic needed a stronger server-side home.",
      solution:
        "I built a modular Spring Boot backend with domains for profile, discovery, activities, chat, weekly questions, notifications, safety, analytics, storage, and infrastructure. The mobile app calls REST APIs and STOMP WebSockets instead of coupling directly to database shape.",
      features: [
        {
          title: "Backend-owned app data",
          detail: "PostgreSQL and Flyway own the product schema while Supabase remains the identity provider.",
        },
        {
          title: "Realtime chat architecture",
          detail: "STOMP WebSockets deliver typing and messages while persistence flows through backend-owned conversation APIs.",
        },
        {
          title: "Safety and notification modules",
          detail: "Blocked users, reports, push-token registration, and notification preferences are handled server-side.",
        },
      ],
      impact: [
        {
          title: "Merged architecture direction",
          detail: "The backend migration became the active direction for the project, with the previous main branch retained as legacy reference.",
        },
        {
          title: "Faster product iteration",
          detail: "Core ranking, safety, unread counts, and messaging behavior can evolve without pushing every change through mobile app releases.",
        },
      ],
    },
  ],

  tools: [
    { label: "Java", icon: "devicon-java-plain" },
    { label: "Spring", icon: "devicon-spring-original" },
    { label: "TypeScript", icon: "devicon-typescript-plain" },
    { label: "React", icon: "devicon-react-original" },
    { label: "Next.js", icon: "devicon-nextjs-original" },
    { label: "Postgres", icon: "devicon-postgresql-plain" },
    { label: "Docker", icon: "devicon-docker-plain" },
    { label: "GCP", icon: "devicon-googlecloud-plain" },
    { label: "Kafka", icon: "devicon-apachekafka-original" },
    { label: "Redis", icon: "devicon-redis-plain" },
    { label: "Supabase", icon: "devicon-supabase-plain" },
    { label: "Tailwind", icon: "devicon-tailwindcss-original" },
  ],

  quote: "Slow motion is better than no motion.",

  contact: {
    email: "adebowale.ca@gmail.com",
    headline: "Want to talk backend, cloud, platform, or full-stack product work?",
    detail:
      "Send me a note and your email client will open with the message addressed to me.",
    defaults: {
      name: "",
      contact: "",
      message: "",
    },
    placeholders: {
      name: "Your name",
      contact: "Email, LinkedIn, or GitHub profile",
      message: "Tell me about the backend, platform, or full-stack role…",
    },
    nameLabel: "Name",
    emailInputType: "text",
    emailLabel: "Best contact",
    messageLabel: "Message",
    links: [
      { label: "Email me", href: "mailto:adebowale.ca@gmail.com" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/waally-xyz/" },
      { label: "GitHub", href: "https://github.com/10xDeVv" },
      { label: "Resume", href: "./public/assets/resume.pdf" },
    ],
  },

  footer: {
    copyright:
      '(c) 2026. Built by Adebowale Adebayo. Source and projects on <a href="https://github.com/10xDeVv">GitHub</a>.',
  },

  socialLinks: [
    {
      label: "X",
      className: "x",
      href: "https://x.com/10xxDeV",
      icon: "https://framerusercontent.com/images/aIwWFUypFKxfKGudhpCCga16zE.svg",
    },
    {
      label: "LinkedIn",
      className: "linkedin",
      href: "https://www.linkedin.com/in/waally-xyz/",
      icon: "https://framerusercontent.com/images/ASxlMuKNCokyakmccfoA0Qjd7A.svg",
    },
    {
      label: "GitHub",
      className: "github",
      href: "https://github.com/10xDeVv",
      iconClass: "devicon-github-original",
    },
  ],
};
