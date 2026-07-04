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
      { label: "Email", href: "mailto:adebowale.ca@gmail.com" },
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
      tags: ["Next.js", "Spring Boot", "PostgreSQL", "WebSockets", "Stripe", "S3"],
      overview:
        "LazyDrop is a real-time, session-based file sharing platform. Users create temporary drop rooms, invite others through an 8-character code or QR link, and transfer files across devices with secure signed upload and download URLs. The product looks lightweight, but the backend handles authentication, guest access, WebSockets, object storage, Stripe subscriptions, plan enforcement, background cleanup, and CI/CD.",
      problem:
        "Moving files across devices is still surprisingly clunky. People email files to themselves, upload to shared drives, install apps, create accounts, or expose permanent links. The technical challenge was to make the experience feel instant while still expiring sessions reliably, supporting large payloads, updating participants live, allowing guests safely, and enforcing paid limits on the server.",
      solution:
        "LazyDrop uses temporary drop sessions as the core abstraction. The frontend requests a signed upload URL, the browser uploads directly to DigitalOcean Spaces, then confirms the upload so the backend can persist metadata and broadcast a typed WebSocket event. File bytes never pass through the API server, and abandoned uploads do not create phantom database rows.",
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
      tags: ["Next.js", "Spring Boot", "Gmail API", "Gemini", "OAuth", "GCP"],
      overview:
        "WhereDidIApply is a privacy-first job application tracker that turns a Gmail inbox into a structured job-search dashboard. The app connects to Gmail with read-only OAuth, searches for job-related emails, classifies them with a hybrid regex and Gemini pipeline, deduplicates results by normalized company and role, and displays applications in an editable, searchable, exportable dashboard.",
      problem:
        "Job seekers apply across dozens or hundreds of roles, then lose track of confirmations, assessments, interviews, rejections, and offers buried in email. Manual spreadsheets are tedious and incomplete. Existing AI trackers can also create privacy risk if they centralize Gmail tokens or persist sensitive email data.",
      solution:
        "The browser fetches Gmail messages directly with a read-only token that never leaves the client. A stateless Spring Boot backend receives only subject, sender, and body text for classification, processes it in memory, and returns structured records. Deterministic rules handle high-signal cases first, while Gemini 2.0 Flash is used only for ambiguous classification or field extraction.",
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
    name: "Adebowale Adebayo",
    email: "adebowale.ca@gmail.com",
    headline: "Want to talk backend, cloud, platform, or full-stack product work?",
    detail:
      "Send me a note and your email client will open with the message addressed to me.",
    nameLabel: "Name",
    emailDefault: "LinkedIn or GitHub DMs",
    emailInputType: "text",
    emailLabel: "Best contact",
    message: "Tell me about the backend, platform, or full-stack role...",
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
