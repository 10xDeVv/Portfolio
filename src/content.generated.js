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
    "resume": "./public/assets/resume.pdf",
    "interests": [
      "table tennis",
      "piano",
      "Rubik's Cube solving"
    ]
  },
  "projects": [
    {
      "slug": "breakpoint",
      "title": "Breakpoint",
      "category": "Transportation systems",
      "image": null,
      "overview": "Built a five-city modeled transportation-disruption beta integrating a shared Rust service, React/TypeScript geospatial interface, server-resolved road and geographic scenarios, and saved-result comparisons.",
      "contribution": "Primary developer of the Rust analysis service, modeled assignment engine and React map interface.",
      "engineeringDecisions": [
        {
          "title": "Persistent analysis jobs",
          "detail": "Built a shared Rust multi-city HTTP service connecting validated scenario previews to bounded asynchronous jobs, progress, persistent local results and saved-result retrieval."
        },
        {
          "title": "Deterministic assignment",
          "detail": "Implemented deterministic affine Frank–Wolfe traffic assignment in Rust with directed and turn-aware routing, exact closure expansion, quantized allocations, explicit convergence and unserved demand, and bounded exact-oracle validation."
        },
        {
          "title": "Correctness before presentation",
          "detail": "Withheld authoritative modeled results on nonconvergence and checked closure and route legality, demand conservation, unserved demand and artifact identity across solver, API and presentation boundaries."
        }
      ],
      "status": "A five-city modeled beta using prepared, uncalibrated transportation data.",
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
      "image": "./public/assets/project-wayward.webp",
      "overview": "Scenic-loop platform generating differentiated route options across nine route vibes using 19 scenic and road-quality signals.",
      "contribution": "Implemented the route-generation workflow, recovery mechanisms, offline scenic-data pipeline and Redis lookup optimization.",
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
      "status": "Scenic-loop planning with prepared geospatial data and recoverable background route jobs.",
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
      "image": "./public/assets/project-lazydrop.webp",
      "overview": "Built a Next.js and Spring Boot file-sharing application with guest/account QR-code rooms, PostgreSQL state, direct signed storage transfers and room-scoped notifications.",
      "contribution": "Primary implementation of the Spring Boot backend, database schema, signed-upload migration and Next.js room integration.",
      "engineeringDecisions": [
        {
          "title": "Direct storage transfers",
          "detail": "Replaced backend-proxied uploads with browser-to-object-storage presigned PUTs; Spring Boot checks room membership/status and declared plan limits, issues signed upload/download URLs, and records client-confirmed metadata."
        },
        {
          "title": "Room notifications",
          "detail": "Implemented room-scoped file, participant, note, download-mark and lifecycle notifications using STOMP/SockJS and Spring SimpleBroker, registering sends after database commits when transaction synchronization is active."
        }
      ],
      "status": "A modular Spring Boot application with direct storage transfers, client-confirmed file metadata and process-local notifications.",
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
        "caption": "The modular Spring API checks room access and records client-confirmed metadata; browsers transfer bytes directly to S3-compatible storage.",
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
            "label": "Process-local STOMP / SockJS"
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
            "label": "Send room notifications after commit"
          },
          {
            "from": "realtime",
            "to": "client",
            "label": "Fan out to room-topic subscribers"
          },
          {
            "from": "api",
            "to": "stripe",
            "label": "Checkout / subscription operations"
          },
          {
            "from": "stripe",
            "to": "api",
            "label": "Persist signed webhook intake"
          }
        ]
      },
      "requestLifecycle": {
        "caption": "The normal client uploads directly to storage, then reports metadata; confirmation does not verify the object. Notifications use the local broker.",
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
            "label": "Room-topic subscriber"
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
            "label": "Resolve identity; check membership/status and declared plan limits",
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
            "label": "Report client-confirmed upload metadata",
            "async": false
          },
          {
            "from": "api",
            "to": "db",
            "label": "Persist client-reported file metadata",
            "async": false
          },
          {
            "from": "api",
            "to": "realtime",
            "label": "Send file event after commit",
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
      "contribution": "Implemented deterministic email classification and the Gemini fallback, keeping OAuth tokens client-held and avoiding server-side email storage.",
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
      "contribution": "Built the course prototype's chord-explanation and guided-practice experience.",
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
      "slug": "unb-formula-racing",
      "role": "Software Engineer",
      "company": "UNB Formula Racing (Formula SAE)",
      "period": "Jun 2026 – Present",
      "location": "Fredericton, NB",
      "context": "Software contributions within UNB's Formula SAE student engineering team.",
      "detail": [
        "Designed and implemented Raspberry Pi data-logging software to receive CAN bus data for UNB Formula Racing, using Rust and Python across the logging and visualization work.",
        "Designed and implemented a data visualization application representing data from over six sensors across the UNB Formula Racing car, using Rust and Python across the logging and visualization work."
      ]
    },
    {
      "slug": "steel-plus-network-software-developer",
      "role": "Software Developer",
      "company": "Steel Plus Network",
      "period": "May 2026 – Present",
      "location": "Moncton, NB",
      "context": "Returned after a 2025 internship to work on database systems with broader operational responsibility.",
      "detail": [
        "Building a normalized operational rebate-management application connecting supplier contracts and purchases to two supplier-specific calculation/import engines, versioned source batches, calculation runs, checks, staff reconciliation, and payout reporting within a shared Access workbench."
      ]
    },
    {
      "slug": "hack-atlantic",
      "role": "Co-Founder & Engineering Lead",
      "company": "Hack Atlantic",
      "period": "Apr 2026 – Present",
      "location": "Fredericton, NB",
      "context": "Hack Atlantic was successfully held as a student-led hackathon.",
      "detail": [
        "Led technical delivery of a deployed team-built Next.js/React and Go modular monolith covering application intake, review, decisions, RSVP, passes, and checkpoint event operations with managed PostgreSQL and private object storage."
      ]
    },
    {
      "slug": "spotlight",
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
      "slug": "university-of-new-brunswick",
      "role": "Teaching Assistant",
      "company": "University of New Brunswick",
      "period": "Sep 2025 – Dec 2025",
      "location": "Fredericton, NB",
      "context": null,
      "detail": [
        "Supported a 100+ student software-engineering cohort by reviewing lab work and mentoring students on architecture, version control, Agile/Scrum practices, and implementation quality from September through December 2025."
      ]
    },
    {
      "slug": "steel-plus-network-database-systems-developer-intern",
      "role": "Database Systems Developer Intern",
      "company": "Steel Plus Network",
      "period": "May 2025 – Aug 2025",
      "location": "Moncton, NB",
      "context": null,
      "detail": [
        "Converted 13 years of spreadsheet-based purchasing, rebate, membership, and supplier history into a normalized Microsoft Access reporting and data-management system."
      ]
    }
  ],
  "highlights": [
    {
      "value": "200+",
      "label": "Applications received",
      "context": "Hack Atlantic · team-built applicant workflow",
      "href": "#experience-hack-atlantic",
      "linkLabel": "View Hack Atlantic role"
    },
    {
      "value": "50%+",
      "label": "Less time generating reports",
      "context": "Steel Plus Network · 2025 internship reporting workflow",
      "href": "#experience-steel-plus-network-database-systems-developer-intern",
      "linkLabel": "View the 2025 internship"
    },
    {
      "value": "3,213 → 90 ms",
      "label": "Redis lookup benchmark",
      "context": "Wayward · 1,500 deterministic warm tiles, local serial GETs → one MGET",
      "href": "#project/wayward/benchmark",
      "linkLabel": "View Redis benchmark"
    }
  ]
};
