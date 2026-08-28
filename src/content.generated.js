// GENERATED FROM CAREER ENGINE.
// DO NOT MANUALLY EDIT CANONICAL CAREER FACTS HERE.
// Run scripts/sync-portfolio.ps1 from the private Career Engine workspace.

export const generatedContent = {
  "generatedNotice": "GENERATED FROM CAREER ENGINE. DO NOT MANUALLY EDIT CANONICAL CAREER FACTS HERE.",
  "profile": {
    "name": "Adebowale Adebayo",
    "email": "adebowale.712@unb.ca",
    "location": "Fredericton, New Brunswick, Canada",
    "education": "Bachelor of Computer Science, Co-op",
    "linkedin": "https://linkedin.com/in/waally-xyz",
    "github": "https://github.com/10xDeVv",
    "resume": "./public/assets/resume.pdf"
  },
  "projects": [
    {
      "slug": "breakpoint",
      "title": "Breakpoint",
      "category": "Transportation systems",
      "image": null,
      "overview": "Built a five-city transportation-disruption beta combining a Rust computational service, React and TypeScript geospatial interface, shared multi-city API, modeled road, corridor, and flood-area scenarios, saved-result reopening, and neighborhood and essential-service consequences.",
      "engineeringDecisions": [
        {
          "title": "Persistent analysis jobs",
          "detail": "Built a generic Rust multi-city server for city readiness, scenario preview, asynchronous assignment jobs and progress, persistent job and result state, saved-result reopening, lazy packet and consequence detail generation, restart recovery, and health, readiness, and metrics endpoints."
        },
        {
          "title": "Deterministic assignment",
          "detail": "Implemented deterministic Rust traffic assignment with directed and turn-aware routing, exact physical-link closure expansion, baseline and disruption solves, explicit convergence and unserved-demand state, grouped-origin optimization, and reference-behavior validation."
        },
        {
          "title": "Correctness before presentation",
          "detail": "Treated correctness as a system property by withholding authoritative metrics for non-converged flows and verifying route and closure legality, demand conservation, explicit unserved demand, deterministic identities, compression round trips, restart recovery, geographic hazard intersections, and asynchronous job idempotence."
        }
      ],
      "status": "A modeled five-city beta built from prepared transportation data.",
      "tags": [
        "Rust",
        "Python",
        "React",
        "TypeScript",
        "Mapbox GL",
        "Docker",
        "Azure"
      ],
      "links": [
        {
          "label": "GitHub",
          "href": "https://github.com/10xDeVv/Breakpoint"
        }
      ]
    },
    {
      "slug": "wayward",
      "title": "Wayward",
      "category": "Scenic route planning",
      "image": "./public/assets/project-wayward.png",
      "overview": "Scenic-loop platform generating differentiated route options across nine route vibes using 19 scenic and road-quality signals.",
      "engineeringDecisions": [
        {
          "title": "Recoverable route generation",
          "detail": "Made asynchronous route generation recoverable through outbox dispatch, Kafka retries, worker lease fencing, lifecycle revisions, and WebSocket progress with polling fallback."
        },
        {
          "title": "Prepared scenic data",
          "detail": "Built a versioned offline pipeline that transforms heterogeneous geospatial sources into indexed runtime scenic data."
        }
      ],
      "status": "The published benchmark covers one deterministic 1,500-tile, Redis-warm lookup path in local development.",
      "tags": [
        "Spring Boot",
        "Kafka",
        "PostGIS",
        "Redis",
        "OSRM",
        "H3",
        "Next.js"
      ],
      "links": [
        {
          "label": "Live site",
          "href": "https://usewayward.app"
        },
        {
          "label": "GitHub",
          "href": "https://github.com/10xDeVv/Wayward"
        }
      ],
      "selectedResult": "Reduced a 1,500-tile real-Redis lookup benchmark from 3,213 milliseconds to 90 milliseconds by replacing 1,500 serial Redis GETs with one MGET over the same deterministic, Redis-warm key set."
    },
    {
      "slug": "lazydrop",
      "title": "LazyDrop",
      "category": "Temporary file sharing",
      "image": "./public/assets/project-lazydrop.png",
      "overview": "Temporary file-sharing platform with guest and authenticated rooms, signed storage transfers, live state, and expiring sessions.",
      "engineeringDecisions": [
        {
          "title": "Direct storage transfers",
          "detail": "Used two-phase signed uploads so object storage handled file bytes while the API retained authorization, validation, and metadata control."
        },
        {
          "title": "Safe subscription processing",
          "detail": "Prevented duplicate Stripe entitlement updates with signature validation, server-side plan enforcement, and an idempotent leased-retry ledger."
        }
      ],
      "status": "Temporary rooms combine guest-friendly joining, expiring sessions, and server-owned access control.",
      "tags": [
        "Next.js",
        "Spring Boot",
        "PostgreSQL",
        "WebSockets",
        "S3-Compatible Storage",
        "Stripe"
      ],
      "links": [
        {
          "label": "Live site",
          "href": "https://www.lazydrop.app"
        },
        {
          "label": "GitHub",
          "href": "https://github.com/10xDeVv/LazyDrop"
        }
      ]
    }
  ],
  "additionalProjects": [
    {
      "slug": "wheredidiapply",
      "title": "WhereDidIApply",
      "category": "Job-search workflow",
      "image": "./public/assets/project-wheredidiapply.png",
      "overview": "Kept OAuth tokens client-held and avoided server-side email persistence while minimizing model exposure through deterministic-first parsing.",
      "engineeringDecisions": [
        {
          "title": "Rules before model calls",
          "detail": "Implemented deterministic status and extraction rules, invoking Gemini structured output only for unresolved messages."
        }
      ],
      "status": "Additional work focused on bounded automation and a clear privacy boundary.",
      "tags": [
        "Next.js",
        "Spring Boot",
        "Gmail API",
        "Gemini",
        "GCP Cloud Run"
      ],
      "links": [
        {
          "label": "Live site",
          "href": "https://wheredidiapply.tech"
        },
        {
          "label": "GitHub",
          "href": "https://github.com/10xDeVv/WhereDidIApply"
        }
      ]
    },
    {
      "slug": "audire",
      "title": "Audire",
      "category": "Music-learning prototype",
      "image": null,
      "overview": "Built an AI-assisted music-learning prototype that explains short chord progressions, offers contrasting creative directions, and turns feedback into a guided practice session while keeping artistic judgment with the musician.",
      "engineeringDecisions": [],
      "status": "A course MVP kept as smaller additional work.",
      "tags": [
        "Next.js",
        "TypeScript",
        "FastAPI",
        "Python",
        "OpenAI Responses API"
      ],
      "links": [
        {
          "label": "GitHub",
          "href": "https://github.com/10xDeVv/Audire"
        }
      ]
    }
  ],
  "experience": [
    {
      "role": "Software Developer, Database Systems",
      "company": "Steel Plus Network",
      "period": "May 2026 – Present · Previous internship May 2025 – Aug 2025",
      "location": "Moncton, NB",
      "context": "Returned after a 2025 internship to work on database systems with broader operational responsibility.",
      "detail": [
        "Building a normalized operational rebate-management system that connects fabricators, suppliers, annual contracts, purchases, thresholds, exchange rates, currency conversion, tonnage, branch rollups, administration fees, and calculated payouts.",
        "Converted 13 years of spreadsheet-based purchasing, rebate, membership, and supplier history into a normalized Microsoft Access reporting and data-management system."
      ]
    },
    {
      "role": "Co-Founder & Engineering Lead",
      "company": "Hack Atlantic",
      "period": "Apr 2026 – Present",
      "location": "Fredericton, NB",
      "context": "Student-led hackathon being organized for September 2026.",
      "detail": [
        "Team-built applicant and event operations platform covering applications, reviews, decisions, passes, QR scanning, and reporting."
      ]
    },
    {
      "role": "Founding Software Engineer",
      "company": "Spotlight",
      "period": "Mar 2026 – May 2026",
      "location": "Fredericton, NB",
      "context": null,
      "detail": [
        "Proposed and independently executed the migration from direct Supabase data access to a Spring Boot and PostgreSQL backend while retaining Supabase Auth."
      ]
    },
    {
      "role": "Teaching Assistant",
      "company": "University of New Brunswick",
      "period": "Sep 2025 – Dec 2025",
      "location": "Fredericton, NB",
      "context": null,
      "detail": [
        "Supported a 100+ student software-engineering cohort by reviewing lab work and mentoring students on architecture, version control, Agile workflows, and implementation quality from September through December 2025."
      ]
    }
  ]
};
