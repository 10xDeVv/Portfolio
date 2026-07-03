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
    role: "Backend and full-stack software engineer",
    location: "Fredericton, Canada",
    email: "",
    contactHref: "https://www.linkedin.com/in/waally-xyz/",
    resume: "./public/assets/resume.pdf",
    intro:
      "Hey, I'm Adebowale Adebayo, a Computer Science student at UNB building backend-heavy products with clean APIs, real-time systems, and production-minded infrastructure. I like working close to the core of products - auth, data models, queues, WebSockets, billing, privacy, and the reliability details that make software feel serious.",
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
    availability: "Seeking Software Engineering Internships",
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
      headline: "Scenic route generation powered by async jobs, local OSRM, H3 scenic tiles, and PostGIS.",
      description:
        "A backend-heavy route engine that generates scenic driving loops from a start point, time budget, and vibe, then returns most_scenic, balanced, and shorter options with route explanations.",
      category: "Async Route Engine",
      image: "./public/assets/project-wayward.png",
      sizeClass: "work-standard",
      url: "https://usewayward.app",
      tags: ["Spring Boot", "Kafka", "PostGIS", "Redis", "OSRM"],
      overview:
        "Wayward turns a vague request like a scenic one-hour drive into real route options. The web app submits a job, backend workers pick road-aware anchors, OSRM builds legal drivable loops, and the system scores returned corridors against precomputed scenic tiles.",
      problem:
        "Normal maps optimize for shortest or fastest routes. That ignores why someone might drive for fun: water, tree canopy, quieter roads, viewpoints, coastal moments, and a route shape that actually feels like a loop instead of an errand.",
      solution:
        "I built the architecture around asynchronous route jobs. The API persists the request and publishes to Kafka; the worker loads H3 scenic features, generates candidate waypoint strategies, calls local OSRM, scores each result, persists the best options, and notifies the frontend when the job completes.",
      features: [
        {
          title: "Async route jobs",
          detail: "Kafka-backed route generation keeps expensive routing work outside the request/response path.",
        },
        {
          title: "Precomputed scenic feature store",
          detail: "PostGIS stores H3 tile vectors for water, green space, road stress, darkness, viewpoints, tree canopy, and related scenic signals.",
        },
        {
          title: "Route explanations",
          detail: "Routes expose human-readable reasons, score breakdowns, contract flags, and warnings instead of just returning a black-box score.",
        },
      ],
      impact: [
        {
          title: "Production-shaped architecture",
          detail: "Docker Compose, Caddy, Redis, Postgres, Kafka, OSRM, a route API, worker service, and WebSocket notifications run as a cohesive deployable system.",
        },
        {
          title: "Clear scaling path",
          detail: "The system can scale worker throughput, OSRM capacity, cache layers, and Postgres reads independently before needing heavier infrastructure.",
        },
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
      sizeClass: "work-tall",
      url: "https://lazydrop.app",
      tags: ["Spring Boot", "Next.js", "WebSockets", "Stripe", "S3"],
      overview:
        "LazyDrop is built around the simplest user flow possible: create a session, share a code or QR, and move files between any devices without setup. Underneath that simple flow is a backend that owns sessions, participants, signed uploads, billing, and cleanup.",
      problem:
        "Moving files between phones, laptops, and operating systems is still weirdly clunky. Existing tools either require accounts, apps, cables, cloud folders, or device-specific ecosystems.",
      solution:
        "I designed the platform around session-based transfer. Clients coordinate through STOMP WebSockets, upload file bytes directly to object storage through short-lived signed URLs, then confirm metadata to the backend so abandoned uploads do not create phantom records.",
      features: [
        {
          title: "Two-phase signed uploads",
          detail: "The backend issues upload URLs and only writes file metadata after the client confirms the object exists.",
        },
        {
          title: "Realtime session events",
          detail: "Participants receive joins, leaves, file uploads, notes, downloads, and session end events over explicit WebSocket contracts.",
        },
        {
          title: "Billing integrity",
          detail: "Stripe webhooks are signature-verified and stored with unique event IDs so subscription updates are idempotent.",
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
      sizeClass: "work-compact",
      url: "https://wheredidiapply.tech",
      tags: ["Spring WebFlux", "Next.js", "Gemini", "GCP", "OAuth"],
      overview:
        "WhereDidIApply turns a messy inbox into a job-search dashboard. The browser fetches Gmail messages with read-only OAuth, sends only email text for classification, and stores results locally so the backend remains stateless.",
      problem:
        "Job seekers lose track of applications because confirmations, interviews, rejections, newsletters, and recruiter emails are scattered across Gmail. A naive AI tracker creates a different problem: too much sensitive data leaving the browser.",
      solution:
        "I built a hybrid classifier that uses regex/rules first and falls back to Gemini only for ambiguous emails. The backend uses HMAC-signed run tokens, rate limits, concurrency controls, circuit breakers, and structured responses without storing email content.",
      features: [
        {
          title: "Token stays in the browser",
          detail: "The Gmail access token never reaches the backend; the browser talks directly to Gmail.",
        },
        {
          title: "Rules before LLM",
          detail: "The backend handles most classifications with deterministic patterns and uses Gemini only when confidence is low.",
        },
        {
          title: "Stateless privacy model",
          detail: "Email text is processed in memory, excluded from logs, and discarded immediately after classification.",
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
      sizeClass: "work-compact",
      url: "https://github.com/10xDeVv",
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
    nameLabel: "Name",
    email: "LinkedIn or GitHub DMs",
    emailInputType: "text",
    emailLabel: "Best contact",
    message: "Tell me about the backend, platform, or full-stack role...",
    messageLabel: "Message",
  },

  footer: {
    copyright:
      '(c) 2026. Built by Adebowale Adebayo. Source and projects on <a href="https://github.com/10xDeVv">GitHub</a>.',
  },

  socialLinks: [
    {
      label: "X",
      className: "x",
      href: "#",
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
