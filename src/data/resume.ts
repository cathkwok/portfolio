/**
 * Single source of truth for the site. Everything renders from this file —
 * the home page, project write-ups, and the printable resume all read from
 * the same `profile`, `skills`, and `timeline` below. Add a role or project
 * by editing this file; nothing else needs to change.
 *
 * `timeline` is the career spine: order 1 is the most recent, higher numbers
 * go further back in time. `kind` routes an entry to where it appears —
 * "project" onto the work grid, "job"/"education" onto the timeline. An
 * entry with a `body` gets its own write-up at /work/[slug]. `resume: false`
 * keeps an entry on the timeline without it bloating the printable resume.
 */

export type Link = { label: string; href: string };
export type Metric = { label: string; value: string };
export type Kind = "job" | "project" | "education";

export type TimelineEntry = {
  order: number;
  kind: Kind;
  slug: string;
  title: string;
  org: string;
  location: string;
  dateLabel: string;
  sideLabel: string;
  blurb: string;
  tags: string[];
  stack: string[];
  accent: string;
  featured: boolean;
  promotion: boolean;
  /** Whether this shows on /resume. Defaults true; set false to keep an
   *  entry on the full timeline without it appearing on the printable
   *  resume (e.g. student internships from a decade-plus back). */
  resume: boolean;
  metrics: Metric[];
  links: Link[];
  highlights: string[];
  /** Markdown write-up. Entries with a body get their own page at /work/[slug]. */
  body: string;
};

export type Profile = {
  name: string;
  initials: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  available: boolean;
  availabilityNote: string;
  bio: string[];
  links: (Link & { handle: string })[];
  resumeUrl: string;
};

export type SkillGroup = { group: string; items: string[] };

export const profile: Profile = {
  "name": "Cathy Kwok",
  "initials": "CK",
  "role": "Engineering Manager, Applied AI",
  "tagline": "I build engineering teams and the AI tools they ship. Currently leading applied GenAI and developer tooling at Amazon.",
  "location": "Seattle, WA",
  "email": "cathykwok13@gmail.com",
  "available": true,
  "availabilityNote": "Open to senior engineering leadership roles",
  "bio": [
    "Engineering leader with 12 years in tech and 8 years building teams. I've scaled consumer platforms from experiment to hyperscale — 300M+ monthly users at IMDb — and today lead applied GenAI and developer tooling at Amazon, where the org I built took an internal AI documentation platform to roughly 40% of the company's knowledge workers.",
    "I stay hands-on. Most of my own building happens in a terminal: agentic architectures, agent-to-agent orchestration, evals, and the degradation instrumentation that keeps LLM features honest in production. I think the most useful thing a manager can do right now is keep enough of a practice to know what's actually hard.",
    "Before this: identity and trust at Affirm, aws.amazon.com, grocery fulfillment for the Amazon Fresh launch, and a caller-ID Android app with 5M downloads."
  ],
  "links": [
    {
      "label": "LinkedIn",
      "href": "https://linkedin.com/in/cathy-kwok",
      "handle": "in/cathy-kwok"
    },
    {
      "label": "Email",
      "href": "mailto:cathykwok13@gmail.com",
      "handle": "cathykwok13@gmail.com"
    }
  ],
  "resumeUrl": ""
};

export const skills: SkillGroup[] = [
  {
    "group": "Applied AI",
    "items": [
      "AWS Bedrock",
      "Anthropic Claude",
      "A2A orchestration",
      "Model Context Protocol",
      "RAG (Kendra, Bedrock Knowledge Bases)",
      "Claude Code",
      "Kiro CLI & Kiro Crew"
    ]
  },
  {
    "group": "Leadership",
    "items": [
      "Org building & scaling",
      "Hiring & interview design",
      "Coaching to promotion",
      "Executive stakeholder management",
      "Multi-product roadmap ownership"
    ]
  },
  {
    "group": "Engineering",
    "items": [
      "AWS",
      "Java",
      "TypeScript",
      "JavaScript",
      "Android",
      "React & React Native",
      "HTML/CSS",
      "Distributed consumer systems"
    ]
  },
  {
    "group": "Reliability & Evals",
    "items": [
      "Usability benchmarking",
      "AI-driven E2E regression",
      "Model degradation instrumentation",
      "Fallback & safe-regression design",
      "Load testing",
      "On-call & incident response"
    ]
  }
];

export const timeline: TimelineEntry[] = [
  {
    "order": 1,
    "kind": "project",
    "slug": "pippin",
    "title": "Pippin",
    "org": "Amazon · StoreGen",
    "location": "",
    "dateLabel": "Sep 2025 – now",
    "sideLabel": "2025 – now",
    "blurb": "An internal AI documentation platform I took from a community side project to a resilient, enterprise-tier tool used by roughly 40% of Amazon's knowledge workers.",
    "tags": [
      "Applied AI",
      "Platform",
      "0-to-1"
    ],
    "stack": [
      "AWS Bedrock",
      "Anthropic Claude",
      "MCP",
      "Jira integrations"
    ],
    "accent": "#e3c58f",
    "featured": true,
    "promotion": false,
    "resume": true,
    "metrics": [
      {
        "label": "Monthly active users",
        "value": "125,000+"
      },
      {
        "label": "Daily active users",
        "value": "40,000+"
      },
      {
        "label": "MoM growth",
        "value": "15–20%"
      }
    ],
    "links": [],
    "highlights": [
      "Grew the team from 7 to 13 engineers, hiring the entire group and coaching new hires to mid-level — one engineer is on track for Senior Engineer within 6 months",
      "Led a major editor revamp plus rollout of accessibility features, real-time collaboration, spreadsheet support, agentic tools, and a review mode",
      "Built proprietary usability benchmarking and an AI-driven end-to-end regression suite to validate product decisions before they shipped",
      "Instrumented model and feature degradation detection, with fallback and safe-regression logic between the document store and agentic features"
    ],
  body: `
## From side project to platform

Pippin started as a community-built documentation tool — the kind of thing a few engineers stand up because the sanctioned option doesn't fit how they actually work. By the time I took it on, the demand was already real; what it lacked was the reliability, integrations, and product discipline to be something 40% of the company's knowledge workers could depend on daily.

The work was equal parts platform engineering and product management: nothing here shipped without deciding what belonged in the product and what didn't.

## Team and delivery

I grew the team from 7 to 13 engineers over about a year, hiring nearly the entire group myself and building a coaching structure formal enough that new hires had a real path from intern-level to mid-level to senior — one engineer is on track for Senior Engineer within six months of dedicated coaching.

On the product side, a major editor revamp shipped alongside accessibility features, real-time collaboration, spreadsheet support, agentic tools, and a review mode. None of it landed in isolation — it landed because the team could load-test for enterprise-scale reliability and had degradation instrumentation and fallback logic in place before traffic caught up with ambition.

## Keeping up with a moving substrate

The hardest part of running an AI product internally isn't the product — it's that the tools underneath it keep changing out from under you. As usage patterns shifted (users migrating from one CLI tool to another, for instance), I kept feature parity intact through the Pippin MCP integration layer rather than chasing each migration with a rewrite.

I also built a community contribution framework that prioritized customer-impacting features and accelerated the convergence of what had been several competing internal tools into one. Consolidation is unglamorous work, and it's usually the difference between a platform and a pile of side projects.

## Result

125,000+ monthly active users, 40,000+ daily active users, and 15–20% month-over-month growth sustained since January 2026 — for a tool that started as something a few engineers built because nothing else fit.
  `,
  },
  {
    "order": 2,
    "kind": "project",
    "slug": "agentic-developer-tools",
    "title": "Agentic Developer Tools & A2A Framework",
    "org": "Amazon · StoreGen",
    "location": "",
    "dateLabel": "Apr 2025 – now",
    "sideLabel": "2025 – now",
    "blurb": "Foundational R&D on autonomous developer agents — an Agent-to-Agent orchestration framework that has since driven 100,000+ code reviews org-wide.",
    "tags": [
      "Applied AI",
      "Agents",
      "R&D"
    ],
    "stack": [
      "AWS Bedrock",
      "Anthropic Claude",
      "A2A protocol",
      "MCP"
    ],
    "accent": "#7fc8d4",
    "featured": true,
    "promotion": false,
    "resume": true,
    "metrics": [
      {
        "label": "Code reviews driven",
        "value": "100,000+"
      },
      {
        "label": "Org rank on deployments",
        "value": "Top 3 of ~2,000"
      }
    ],
    "links": [],
    "highlights": [
      "Architected and hand-coded an A2A (Agent-to-Agent) orchestration framework powering an oncall agent and a service-based call agent",
      "Directed an async code-generation agent, connected via A2A to a teammate agent and a web-based prompt UX",
      "Built a deployment-pipeline health agent as part of a broader bet on AI-native operational tooling",
      "Built a weekly demo and knowledge-sharing culture from the ground up that made the team the org leader in AI tooling adoption"
    ],
  body: `
## Betting on agents before it was obvious

In early 2025, "developer agents" was still mostly a research conversation. I took a bet on it as an operational one: could an agent-to-agent architecture actually take real load off engineers doing code review, oncall, and deployment triage — not as a demo, but as daily infrastructure.

## What got built

The core is an A2A (Agent-to-Agent) orchestration framework I personally architected and hand-coded early on, before handing pieces off as the team grew. On top of it: an oncall agent, a service-based call agent, an async code-generation agent wired to a teammate agent and a web-based prompt interface, and a deployment-pipeline health agent exploring what AI-native operational tooling could look like.

I stayed close to the code on this one deliberately. Terminal-driven development — CLI tools as the primary working surface rather than a side habit — is how I kept enough hands-on fluency to make credible calls on the team's technical direction, and to know which agent ideas were worth funding and which weren't.

## Culture, not just code

The technical work mattered less than whether the team could keep learning faster than the field was moving. I built a weekly demo and knowledge-sharing habit from scratch specifically to force that pace — every agent experiment, successful or not, got shown to the group. That habit is most of why the team leads the org in AI tooling adoption and ranks top 3 of roughly 2,000 engineers org-wide on normalized deployments.

## Result

The code-generation agent alone has driven over 100,000 code reviews org-wide to date — foundational R&D that outgrew the team that built it.
  `,
  },
  {
    "order": 3,
    "kind": "job",
    "slug": "storegen-sdm",
    "title": "Software Development Manager, StoreGen (Applied GenAI & Developer Tools)",
    "org": "Amazon",
    "location": "Seattle, WA",
    "dateLabel": "Apr 2025 – now",
    "sideLabel": "2025 – now",
    "blurb": "Built and scaled an 18-engineer applied GenAI organization across two teams — exploratory agentic developer tooling and the Pippin documentation platform.",
    "tags": [
      "GenAI",
      "Org building",
      "Hiring"
    ],
    "stack": [],
    "accent": "#e3c58f",
    "featured": false,
    "promotion": false,
    "resume": true,
    "metrics": [],
    "links": [],
    "highlights": [
      "Personally owned hiring across two teams that grew from a combined 16 to 31 engineers: screened 200+ candidates, ran 50+ phone screens, and hired 15+ engineers, redesigning the interview loop into three stages with a collaborative work-sample exercise",
      "Own product vision and strategic roadmap across three GenAI tools, partnering with principal engineers and product leads to align infrastructure investment with the org's AI-native strategy",
      "Coach engineers toward promotion, including one on track for Senior Engineer within 6 months of dedicated coaching",
      "Team ranks top 3 of ~2,000 engineers org-wide on normalized deployments"
    ],
  body: "",
  },
  {
    "order": 4,
    "kind": "job",
    "slug": "imdb-sdm",
    "title": "Software Development Manager, IMDb",
    "org": "Amazon",
    "location": "Seattle, WA",
    "dateLabel": "Aug 2022 – Apr 2025",
    "sideLabel": "2022 – 2025",
    "blurb": "Led a 12-person website engineering team delivering consumer experiences to 300M+ monthly users on imdb.com.",
    "tags": [
      "Consumer scale",
      "Web",
      "Modernization"
    ],
    "stack": [],
    "accent": "#5fa8d3",
    "featured": false,
    "promotion": false,
    "resume": true,
    "metrics": [],
    "links": [],
    "highlights": [
      "Directed a multi-year website modernization initiative driving 30%+ user growth through incremental, data-informed customer experience improvements",
      "Implemented multilingual URL architecture, improving international SEO performance and expanding global organic reach",
      "Led cross-team technical readiness across all 15 IMDb engineering teams for major film and TV award season launches — the platform's highest-traffic annual events"
    ],
  body: "",
  },
  {
    "order": 4.5,
    "kind": "project",
    "slug": "imdb-website-modernization",
    "title": "IMDb Website Modernization",
    "org": "Amazon · IMDb",
    "location": "Seattle, WA",
    "dateLabel": "Aug 2022 – Apr 2025",
    "sideLabel": "2022 – 2025",
    "blurb": "A multi-year modernization of imdb.com driving 30%+ user growth, plus the multilingual URL architecture that expanded IMDb's global organic reach.",
    "tags": [
      "Consumer scale",
      "Web",
      "Modernization"
    ],
    "stack": [],
    "accent": "#5fa8d3",
    "featured": true,
    "promotion": false,
    "resume": true,
    "metrics": [
      {
        "label": "Monthly users",
        "value": "300M+"
      },
      {
        "label": "User growth from modernization",
        "value": "30%+"
      },
      {
        "label": "Engineering teams coordinated",
        "value": "15"
      }
    ],
    "links": [],
    "highlights": [
      "Directed a multi-year website modernization initiative driving 30%+ user growth through incremental, data-informed customer experience improvements",
      "Implemented multilingual URL architecture, improving international SEO performance and expanding global organic reach",
      "Led cross-team technical readiness across all 15 IMDb engineering teams for major film and TV award season launches"
    ],
  body: `
## A decade-old site carrying 300M+ monthly users

By 2022, imdb.com was one of the highest-traffic sites at Amazon — hundreds of millions of monthly visitors relying on a codebase that had grown incrementally for over a decade. My 12-person website engineering team owned the multi-year effort to modernize it without a single big-bang rewrite: every change had to ship, prove itself against real user data, and hold up under award-season traffic before the next one landed.

## Incremental, not incremental in ambition

The modernization ran as a sustained sequence of data-informed customer experience changes rather than a platform relaunch — each one measured, each one kept or reverted based on what it actually did to engagement. Over the life of the initiative that discipline compounded into 30%+ user growth, the kind of number that's hard to get from any single redesign and only shows up when a team commits to measuring every increment honestly.

## Multilingual URL architecture

The highest-leverage piece of that work was rebuilding IMDb's URL architecture to support proper multilingual routing. It's an unglamorous, foundational change — the kind that doesn't show up in a screenshot — but it's what improved IMDb's international SEO performance and expanded its organic reach in markets that had been underserved by the old URL structure.

## Coordinating readiness across 15 teams

None of this could ship in isolation from IMDb's award-season traffic — the platform's highest-traffic annual events, and the worst possible time to discover a regression. I led cross-team technical readiness across all 15 IMDb engineering teams ahead of each major film and TV awards cycle, turning what had been ad hoc pre-launch scrambling into a repeatable readiness process.

## Result

30%+ user growth over the life of the modernization, a multilingual URL architecture that expanded IMDb's global organic reach, and an award-season readiness process spanning all 15 engineering teams — for a site serving 300M+ monthly users where a bad launch is visible immediately.
  `,
  },
  {
    "order": 5,
    "kind": "job",
    "slug": "affirm-em",
    "title": "Engineering Manager, Identity Experience (Trust & Safety)",
    "org": "Affirm",
    "location": "Remote, US",
    "dateLabel": "Aug 2021 – Jul 2022",
    "sideLabel": "2021 – 2022",
    "blurb": "Built and led a 7-engineer cross-functional team delivering secure authentication and authorization workflows across Android, iOS, and Web.",
    "tags": [
      "Trust & Safety",
      "Identity",
      "Fintech"
    ],
    "stack": [],
    "accent": "#8fd4c1",
    "featured": false,
    "promotion": false,
    "resume": true,
    "metrics": [],
    "links": [],
    "highlights": [
      "Delivered secure authentication and authorization workflows across Android, iOS, and Web for 10M+ international customers",
      "Partnered directly with trust, safety, compliance, and privacy functions to maintain zero-compromise secure access controls"
    ],
  body: "",
  },
  {
    "order": 5.5,
    "kind": "project",
    "slug": "affirm-identity-experience",
    "title": "Identity Experience (Trust & Safety)",
    "org": "Affirm",
    "location": "Remote, US",
    "dateLabel": "Aug 2021 – Jul 2022",
    "sideLabel": "2021 – 2022",
    "blurb": "Secure authentication and authorization workflows across Android, iOS, and Web for 10M+ international Affirm customers.",
    "tags": [
      "Trust & Safety",
      "Identity",
      "Fintech"
    ],
    "stack": [],
    "accent": "#8fd4c1",
    "featured": true,
    "promotion": false,
    "resume": true,
    "metrics": [
      {
        "label": "International customers",
        "value": "10M+"
      },
      {
        "label": "Platforms covered",
        "value": "Android, iOS, Web"
      }
    ],
    "links": [],
    "highlights": [
      "Delivered secure authentication and authorization workflows across Android, iOS, and Web for 10M+ international customers",
      "Partnered directly with trust, safety, compliance, and privacy functions to maintain zero-compromise secure access controls"
    ],
  body: `
## Identity as the front door to a fintech product

Affirm's identity workflows are the front door to every other feature — get authentication or authorization wrong and nothing downstream matters, especially for a company subject to the compliance bar that comes with handling consumer credit. I built and led a 7-engineer cross-functional team owning that front door: secure authentication and authorization across Android, iOS, and Web.

## Built for scale, built for scrutiny

10M+ international customers touch these workflows, which meant every change had to hold up across three platforms and however many regulatory regimes those customers span. There's no cutting corners on identity work at that scale — a broken login is a support ticket, but a bypassed authorization check is an incident.

## Working inside someone else's constraints

Trust and safety, compliance, and privacy aren't teams you route around on identity work — they're teams you build with, and that shapes the job as much as the code does. I partnered directly with all three to maintain zero-compromise secure access controls, which in practice meant treating their requirements as inputs to the design rather than a checklist to satisfy after the fact.

## Result

Secure, compliant authentication and authorization delivered across Android, iOS, and Web for 10M+ international customers, with trust, safety, compliance, and privacy as co-owners of the outcome rather than downstream reviewers.
  `,
  },
  {
    "order": 6,
    "kind": "job",
    "slug": "aws-marketing-sdm",
    "title": "Software Development Manager, AWS Marketing Website Engineering",
    "org": "Amazon",
    "location": "Seattle, WA",
    "dateLabel": "Dec 2019 – Jun 2021",
    "sideLabel": "2019 – 2021",
    "blurb": "Led a 9-person frontend team maintaining aws.amazon.com and built an analytics library adopted across the company.",
    "tags": [
      "Frontend",
      "Web platform"
    ],
    "stack": [],
    "accent": "#6c8ae4",
    "featured": false,
    "promotion": false,
    "resume": true,
    "metrics": [],
    "links": [],
    "highlights": [
      "Led a 9-person team building and maintaining frontend components on aws.amazon.com, serving 100M+ monthly visitors globally",
      "Developed authoring tools adopted by thousands of internal content creators, streamlining content publishing workflows",
      "Built an analytics and targeting integration library adopted by 100+ internal and external Amazon websites"
    ],
  body: "",
  },
  {
    "order": 6.5,
    "kind": "project",
    "slug": "aws-marketing-analytics-library",
    "title": "Analytics & Targeting Library for aws.amazon.com",
    "org": "Amazon · AWS Marketing",
    "location": "Seattle, WA",
    "dateLabel": "Dec 2019 – Jun 2021",
    "sideLabel": "2019 – 2021",
    "blurb": "An analytics and targeting integration library built for aws.amazon.com and adopted by 100+ internal and external Amazon websites.",
    "tags": [
      "Frontend",
      "Web platform"
    ],
    "stack": [],
    "accent": "#6c8ae4",
    "featured": true,
    "promotion": false,
    "resume": true,
    "metrics": [
      {
        "label": "Monthly visitors (aws.amazon.com)",
        "value": "100M+"
      },
      {
        "label": "Sites adopting the library",
        "value": "100+"
      }
    ],
    "links": [],
    "highlights": [
      "Built an analytics and targeting integration library adopted by 100+ internal and external Amazon websites",
      "Developed authoring tools adopted by thousands of internal content creators, streamlining content publishing workflows",
      "Led a 9-person team building and maintaining frontend components on aws.amazon.com, serving 100M+ monthly visitors globally"
    ],
  body: `
## A library, not a redesign

aws.amazon.com pulled 100M+ monthly visitors globally, and the 9-person frontend team I led owned the components serving them. Rather than solve analytics and targeting integration once for aws.amazon.com and move on, I directed the team to build it as a standalone library — a bet that the same problem existed all over Amazon's other properties, not just ours.

## Built once, adopted 100+ times over

That bet paid off: the analytics and targeting integration library ended up adopted by 100+ internal and external Amazon websites, well beyond the marketing site it was built for. Getting there took the same discipline as any widely-adopted internal tool — clear versioning, documentation good enough that other teams didn't need to ask us questions, and an API stable enough that we weren't fielding breaking-change complaints every quarter.

## Tools for the people publishing, not just the people coding

The other half of the team's work was authoring tools for the thousands of internal content creators who published to aws.amazon.com without touching code. Streamlining that publishing workflow was a different kind of leverage than the analytics library — instead of multiplying engineering effort across other teams, it multiplied non-engineering throughput on our own site.

## Result

An analytics and targeting library adopted by 100+ internal and external Amazon websites, authoring tools adopted by thousands of internal content creators, and a 9-person team keeping both running under 100M+ monthly visitors on aws.amazon.com.
  `,
  },
  {
    "order": 7,
    "kind": "job",
    "slug": "f3-sdm",
    "title": "Software Development Manager, Fresh Food Fast (F3) Grocery Fulfillment",
    "org": "Amazon",
    "location": "Seattle, WA",
    "dateLabel": "Mar 2018 – Nov 2019",
    "sideLabel": "2018 – 2019",
    "blurb": "Built and led a 6-person team developing fulfillment tools supporting the Amazon Fresh grocery launch across 7+ countries.",
    "tags": [
      "Fulfillment",
      "Operations"
    ],
    "stack": [],
    "accent": "#c98bb9",
    "featured": false,
    "promotion": false,
    "resume": true,
    "metrics": [],
    "links": [],
    "highlights": [
      "Built and led a 6-person team developing inbound fulfillment tools for Prime Now and Amazon Fresh fulfillment centers",
      "Partnered cross-functionally on outbound pick tools for the Amazon Fresh grocery store launch across 7+ countries and 100+ fulfillment centers"
    ],
  body: "",
  },
  {
    "order": 8,
    "kind": "job",
    "slug": "prime-now-sde",
    "title": "Software Development Engineer, Prime Now Mobile",
    "org": "Amazon",
    "location": "Seattle, WA",
    "dateLabel": "Aug 2016 – Mar 2018",
    "sideLabel": "2016 – 2018",
    "blurb": "Led a cross-team project adding variable-weight item support to the Prime Now Android app.",
    "tags": [
      "Android",
      "Mobile"
    ],
    "stack": [],
    "accent": "#e0a458",
    "featured": false,
    "promotion": false,
    "resume": true,
    "metrics": [],
    "links": [],
    "highlights": [
      "Led a cross-team project adding variable-weight item support to the Prime Now Android app (1M+ downloads)",
      "Developed Search and Browse features enhancing the customer shopping experience"
    ],
  body: "",
  },
  {
    "order": 9,
    "kind": "job",
    "slug": "hiya-inc",
    "title": "Software Engineer",
    "org": "Hiya Inc.",
    "location": "Seattle, WA",
    "dateLabel": "Apr 2016 – Jul 2016",
    "sideLabel": "2016",
    "blurb": "Android app development for Hiya, following the company's rebrand from Whitepages Caller ID.",
    "tags": [
      "Android",
      "Mobile"
    ],
    "stack": [],
    "accent": "#6c8ae4",
    "featured": false,
    "promotion": false,
    "resume": true,
    "metrics": [],
    "links": [],
    "highlights": [
      "Continued Android development on the caller ID app through its transition from Whitepages Caller ID to Hiya"
    ],
  body: "",
  },
  {
    "order": 10,
    "kind": "job",
    "slug": "whitepages",
    "title": "Software Engineer",
    "org": "Whitepages",
    "location": "Seattle, WA",
    "dateLabel": "Jun 2014 – Apr 2016",
    "sideLabel": "2014 – 2016",
    "blurb": "Android app development for Whitepages Caller ID and Mr. Number.",
    "tags": [
      "Android",
      "Mobile"
    ],
    "stack": [],
    "accent": "#e0a458",
    "featured": false,
    "promotion": false,
    "resume": true,
    "metrics": [],
    "links": [],
    "highlights": [
      "Built and maintained Android features across Whitepages Caller ID and Mr. Number"
    ],
  body: "",
  },
  {
    "order": 11,
    "kind": "job",
    "slug": "ubc-teaching-assistant",
    "title": "Undergraduate Teaching Assistant",
    "org": "University of British Columbia",
    "location": "Vancouver, BC",
    "dateLabel": "Sep 2012 – Dec 2013",
    "sideLabel": "2012 – 2013",
    "blurb": "Taught CPSC 101 / WMST 201 (Connecting with Computer Science) and APSC 160 (Introduction to Computation in Engineering Design).",
    "tags": [
      "Teaching"
    ],
    "stack": [],
    "accent": "#8fd4c1",
    "featured": false,
    "promotion": false,
    "resume": false,
    "metrics": [],
    "links": [],
    "highlights": [],
  body: "",
  },
  {
    "order": 12,
    "kind": "job",
    "slug": "clinemetrica",
    "title": "Software Developer / Intern",
    "org": "Clinemetrica",
    "location": "Montreal, QC",
    "dateLabel": "May 2013 – Aug 2013",
    "sideLabel": "2013",
    "blurb": "Cross-platform mobile and web development, including a cardiovascular age calculator built with PhoneGap.",
    "tags": [
      "PhoneGap",
      "PHP",
      "JavaScript"
    ],
    "stack": [
      "PHP",
      "HTML",
      "JavaScript",
      "CSS",
      "jQuery Mobile",
      "PhoneGap"
    ],
    "accent": "#c98bb9",
    "featured": false,
    "promotion": false,
    "resume": false,
    "metrics": [],
    "links": [],
    "highlights": [
      "Converted an existing PHP web app into a PhoneGap mobile app implementing a cardiovascular age calculator, including AJAX-driven login and results retrieval",
      "Refactored modules of a PHP web application into an MVC structure and built front-to-back brute-force login protection"
    ],
  body: "",
  },
  {
    "order": 13,
    "kind": "job",
    "slug": "seamless-mobile-health",
    "title": "Contract Mobile Developer",
    "org": "Seamless Mobile Health",
    "location": "Vancouver, BC",
    "dateLabel": "Mar 2013 – May 2013",
    "sideLabel": "2013",
    "blurb": "Built a post-surgery symptom-tracking mobile app prototype, starting from a 3rd-place finish at HackingHealth Vancouver.",
    "tags": [
      "PhoneGap",
      "Hackathon"
    ],
    "stack": [
      "HTML",
      "JavaScript",
      "CSS",
      "jQuery Mobile",
      "PhoneGap",
      "Git"
    ],
    "accent": "#5fa8d3",
    "featured": false,
    "promotion": false,
    "resume": false,
    "metrics": [],
    "links": [],
    "highlights": [
      "Prototyped a post-surgery symptom-tracking app with a 3-person team (VitalClick) at HackingHealth Vancouver, placing 3rd",
      "Continued as a contract developer after the event, adding image upload and messaging features"
    ],
  body: "",
  },
  {
    "order": 14,
    "kind": "job",
    "slug": "plentyoffish",
    "title": "Co-op Software Engineer",
    "org": "Plentyoffish.com",
    "location": "Vancouver, BC",
    "dateLabel": "Jan 2013 – Apr 2013",
    "sideLabel": "2013",
    "blurb": "Shipped features on the eVow Online Dating Android app alongside product, design, and QA, and drove down front-end reliability issues.",
    "tags": [
      "Android",
      "Java"
    ],
    "stack": [
      "Java",
      "Android"
    ],
    "accent": "#7fc8d4",
    "featured": false,
    "promotion": false,
    "resume": false,
    "metrics": [],
    "links": [],
    "highlights": [
      "Implemented new features on the eVow Online Dating Android app as part of a cross-functional team",
      "Investigated and fixed front-end reliability issues, and ran UI testing across other verticals and platforms"
    ],
  body: "",
  },
  {
    "order": 15,
    "kind": "job",
    "slug": "ubc-pharmacy-residency",
    "title": "Volunteer Web Programmer",
    "org": "UBC Pharmacy Practice Residency Program",
    "location": "Vancouver, BC",
    "dateLabel": "Jan 2012 – Mar 2013",
    "sideLabel": "2012 – 2013",
    "blurb": "Designed and built a hemodialysis drug reference website for hospital pharmacists at St. Paul's Hospital.",
    "tags": [
      "PHP",
      "Joomla!"
    ],
    "stack": [
      "PHP",
      "HTML",
      "CSS",
      "Joomla!"
    ],
    "accent": "#e3c58f",
    "featured": false,
    "promotion": false,
    "resume": false,
    "metrics": [],
    "links": [],
    "highlights": [
      "Consulted with hospital pharmacist end-users and built a Joomla! template delivering a drug reference tool"
    ],
  body: "",
  },
  {
    "order": 16,
    "kind": "job",
    "slug": "ubc-bioinformatics-research",
    "title": "Bioinformatics Research Assistant",
    "org": "UBC Centre for High-Throughput Biology",
    "location": "Vancouver, BC",
    "dateLabel": "Sep 2011 – Apr 2012",
    "sideLabel": "2011 – 2012",
    "blurb": "Curated gene-association literature for neurodevelopmental disorders and contributed to a neuroanatomical connectivity text-mining project.",
    "tags": [
      "Research",
      "Bioinformatics"
    ],
    "stack": [],
    "accent": "#a371f7",
    "featured": false,
    "promotion": false,
    "resume": false,
    "metrics": [],
    "links": [],
    "highlights": [],
  body: "",
  },
  {
    "order": 17,
    "kind": "education",
    "slug": "ubc",
    "title": "B.S., Combined Computer Science and Biology",
    "org": "University of British Columbia",
    "location": "Vancouver, BC",
    "dateLabel": "Graduated 2014",
    "sideLabel": "2014",
    "blurb": "Combined major spanning computer science and biology.",
    "tags": [],
    "stack": [],
    "accent": "#e0a458",
    "featured": false,
    "promotion": false,
    "resume": true,
    "metrics": [],
    "links": [],
    "highlights": [],
  body: "",
  },
];
