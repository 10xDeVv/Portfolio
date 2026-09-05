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
      ],
      "architecture": {
        "caption": "A single-host Rust service runs modeled disruption jobs against prepared city data and stores reusable, identity-checked results.",
        "nodes": [
          {
            "id": "client",
            "label": "React / TypeScript map"
          },
          {
            "id": "api",
            "label": "Generic Rust city API"
          },
          {
            "id": "jobs",
            "label": "Persistent async jobs"
          },
          {
            "id": "engine",
            "label": "Deterministic assignment"
          },
          {
            "id": "baselines",
            "label": "Prepared city baselines"
          },
          {
            "id": "results",
            "label": "Content-addressed results"
          },
          {
            "id": "access",
            "label": "Consequence / access analysis"
          }
        ],
        "edges": [
          {
            "from": "client",
            "to": "api",
            "label": "Submit closures / retrieve results"
          },
          {
            "from": "api",
            "to": "jobs",
            "label": "Validate and enqueue"
          },
          {
            "from": "jobs",
            "to": "engine",
            "label": "Run bounded city work"
          },
          {
            "from": "baselines",
            "to": "engine",
            "label": "Reuse verified baseline"
          },
          {
            "from": "engine",
            "to": "results",
            "label": "Persist modeled outputs"
          },
          {
            "from": "results",
            "to": "access",
            "label": "Derive requested sidecars"
          },
          {
            "from": "access",
            "to": "api",
            "label": "Return consequence analysis"
          },
          {
            "from": "results",
            "to": "api",
            "label": "Read saved result"
          }
        ]
      },
      "requestLifecycle": {
        "caption": "A road-closure scenario becomes a persistent job, a checked modeled result, and an interactive map comparison.",
        "actors": [
          {
            "id": "client",
            "label": "Map client"
          },
          {
            "id": "api",
            "label": "City API"
          },
          {
            "id": "jobs",
            "label": "Async jobs"
          },
          {
            "id": "engine",
            "label": "Assignment"
          },
          {
            "id": "store",
            "label": "Result storage"
          },
          {
            "id": "access",
            "label": "Access analysis"
          }
        ],
        "steps": [
          {
            "from": "client",
            "to": "api",
            "label": "Submit city and closure scenario",
            "async": false
          },
          {
            "from": "api",
            "to": "api",
            "label": "Validate input; resolve directed closure edges",
            "async": false
          },
          {
            "from": "api",
            "to": "jobs",
            "label": "Persist / enqueue job",
            "async": true
          },
          {
            "from": "api",
            "to": "client",
            "label": "Return accepted job ID",
            "async": false
          },
          {
            "from": "jobs",
            "to": "engine",
            "label": "Reuse verified baseline; solve disruption",
            "async": true
          },
          {
            "from": "engine",
            "to": "engine",
            "label": "Check convergence and model invariants",
            "async": false
          },
          {
            "from": "engine",
            "to": "store",
            "label": "Persist identity-checked result",
            "async": false
          },
          {
            "from": "client",
            "to": "api",
            "label": "Poll job; request result and consequence data",
            "async": false
          },
          {
            "from": "api",
            "to": "store",
            "label": "Read saved result",
            "async": false
          },
          {
            "from": "api",
            "to": "access",
            "label": "Derive requested consequence / access sidecar",
            "async": false
          },
          {
            "from": "api",
            "to": "client",
            "label": "Return modeled comparison and explicit status",
            "async": false
          }
        ]
      }
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
      "selectedResult": "Reduced a 1,500-tile real-Redis lookup benchmark from 3,213 milliseconds to 90 milliseconds by replacing 1,500 serial Redis GETs with one MGET over the same deterministic, Redis-warm key set.",
      "architecture": {
        "caption": "Route jobs are committed before Kafka dispatch; workers combine scenic data with OSRM and deliver revisioned results.",
        "nodes": [
          {
            "id": "client",
            "label": "Next.js map client"
          },
          {
            "id": "api",
            "label": "Spring Boot route API"
          },
          {
            "id": "kafka",
            "label": "Kafka"
          },
          {
            "id": "worker",
            "label": "Route worker"
          },
          {
            "id": "db",
            "label": "PostgreSQL / PostGIS"
          },
          {
            "id": "redis",
            "label": "Redis scenic cache"
          },
          {
            "id": "osrm",
            "label": "OSRM routing"
          },
          {
            "id": "notify",
            "label": "Notification / WebSocket"
          }
        ],
        "edges": [
          {
            "from": "client",
            "to": "api",
            "label": "Submit route / poll results"
          },
          {
            "from": "api",
            "to": "db",
            "label": "Commit job + dispatch outbox"
          },
          {
            "from": "api",
            "to": "kafka",
            "label": "Dispatch committed jobs"
          },
          {
            "from": "kafka",
            "to": "worker",
            "label": "Deliver route jobs"
          },
          {
            "from": "worker",
            "to": "redis",
            "label": "Fetch scenic tiles"
          },
          {
            "from": "worker",
            "to": "db",
            "label": "Scenic fallback / persist options"
          },
          {
            "from": "worker",
            "to": "osrm",
            "label": "Construct drivable loops"
          },
          {
            "from": "worker",
            "to": "kafka",
            "label": "Publish lifecycle completion"
          },
          {
            "from": "kafka",
            "to": "notify",
            "label": "Deliver lifecycle events"
          },
          {
            "from": "notify",
            "to": "client",
            "label": "Push revisioned updates"
          }
        ]
      },
      "requestLifecycle": {
        "caption": "A durable scenic-route job crosses Kafka, is scored and persisted by a worker, then reaches the client through WebSocket updates or polling.",
        "actors": [
          {
            "id": "client",
            "label": "Client"
          },
          {
            "id": "api",
            "label": "Route API"
          },
          {
            "id": "db",
            "label": "PostgreSQL"
          },
          {
            "id": "kafka",
            "label": "Kafka"
          },
          {
            "id": "worker",
            "label": "Worker"
          },
          {
            "id": "scenic",
            "label": "Scenic data"
          },
          {
            "id": "osrm",
            "label": "OSRM"
          },
          {
            "id": "notify",
            "label": "Notifications"
          }
        ],
        "steps": [
          {
            "from": "client",
            "to": "api",
            "label": "Request scenic loop",
            "async": false
          },
          {
            "from": "api",
            "to": "db",
            "label": "Commit revisioned job + outbox together",
            "async": false
          },
          {
            "from": "api",
            "to": "client",
            "label": "202 Accepted with job ID",
            "async": false
          },
          {
            "from": "api",
            "to": "kafka",
            "label": "Dispatch committed outbox; retry failures",
            "async": true
          },
          {
            "from": "kafka",
            "to": "worker",
            "label": "Deliver job; acquire worker lease",
            "async": true
          },
          {
            "from": "worker",
            "to": "scenic",
            "label": "Fetch H3 features: local / Redis / PostGIS",
            "async": false
          },
          {
            "from": "worker",
            "to": "osrm",
            "label": "Generate legal candidate loops",
            "async": false
          },
          {
            "from": "worker",
            "to": "worker",
            "label": "Score corridors; select differentiated options",
            "async": false
          },
          {
            "from": "worker",
            "to": "db",
            "label": "Persist route options with lease fencing",
            "async": false
          },
          {
            "from": "worker",
            "to": "kafka",
            "label": "Publish revisioned completion",
            "async": true
          },
          {
            "from": "kafka",
            "to": "notify",
            "label": "Consume lifecycle event",
            "async": true
          },
          {
            "from": "notify",
            "to": "client",
            "label": "WebSocket update; polling fallback via API",
            "async": true
          },
          {
            "from": "client",
            "to": "api",
            "label": "Fetch persisted route options for the map",
            "async": false
          }
        ]
      }
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
      ],
      "architecture": {
        "caption": "The API owns room access and metadata while browsers transfer file bytes directly to private object storage.",
        "nodes": [
          {
            "id": "client",
            "label": "Next.js room client"
          },
          {
            "id": "api",
            "label": "Spring Boot API"
          },
          {
            "id": "db",
            "label": "PostgreSQL"
          },
          {
            "id": "storage",
            "label": "S3-compatible storage"
          },
          {
            "id": "realtime",
            "label": "STOMP / WebSocket"
          },
          {
            "id": "auth",
            "label": "Supabase Auth"
          },
          {
            "id": "stripe",
            "label": "Stripe"
          }
        ],
        "edges": [
          {
            "from": "client",
            "to": "api",
            "label": "Room actions / signed URL requests"
          },
          {
            "from": "client",
            "to": "storage",
            "label": "Direct signed file transfer"
          },
          {
            "from": "client",
            "to": "auth",
            "label": "Account sign-in"
          },
          {
            "from": "api",
            "to": "db",
            "label": "Persist room and file metadata"
          },
          {
            "from": "api",
            "to": "realtime",
            "label": "Broadcast room state"
          },
          {
            "from": "realtime",
            "to": "client",
            "label": "Notify room participants"
          },
          {
            "from": "api",
            "to": "stripe",
            "label": "Checkout / subscription operations"
          },
          {
            "from": "stripe",
            "to": "api",
            "label": "Retry-safe billing webhooks"
          }
        ]
      },
      "requestLifecycle": {
        "caption": "A signed upload sends bytes directly to storage; confirmation records the file and notifies the room.",
        "actors": [
          {
            "id": "client",
            "label": "Uploading client"
          },
          {
            "id": "api",
            "label": "Backend API"
          },
          {
            "id": "db",
            "label": "PostgreSQL"
          },
          {
            "id": "storage",
            "label": "Object storage"
          },
          {
            "id": "realtime",
            "label": "WebSocket"
          },
          {
            "id": "peer",
            "label": "Room participant"
          }
        ],
        "steps": [
          {
            "from": "client",
            "to": "api",
            "label": "Request upload for joined room",
            "async": false
          },
          {
            "from": "api",
            "to": "api",
            "label": "Authorize guest / JWT; enforce room and plan limits",
            "async": false
          },
          {
            "from": "api",
            "to": "client",
            "label": "Return short-lived signed upload URL",
            "async": false
          },
          {
            "from": "client",
            "to": "storage",
            "label": "Upload file bytes directly",
            "async": false
          },
          {
            "from": "storage",
            "to": "client",
            "label": "Return upload success",
            "async": false
          },
          {
            "from": "client",
            "to": "api",
            "label": "Confirm completed upload",
            "async": false
          },
          {
            "from": "api",
            "to": "db",
            "label": "Persist confirmed file metadata",
            "async": false
          },
          {
            "from": "api",
            "to": "realtime",
            "label": "Broadcast file-uploaded room event",
            "async": true
          },
          {
            "from": "realtime",
            "to": "peer",
            "label": "Update room file list",
            "async": true
          },
          {
            "from": "peer",
            "to": "api",
            "label": "Request authorized signed download URL",
            "async": false
          },
          {
            "from": "peer",
            "to": "storage",
            "label": "Download bytes directly",
            "async": false
          }
        ]
      }
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
        "Led a team building the Hack Atlantic applicant and event platform with authenticated nine-question applications, saved drafts, private optional PDF resumes, organizer review and permissions, released decisions, accepted-applicant RSVP, separately released QR passes, and transactional check-in."
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
