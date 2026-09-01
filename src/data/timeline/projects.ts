import type { TimelineEntry } from "../types";

export const projects: TimelineEntry[] = [
  {
    order: 1,
    kind: "project",
    slug: "pippin",
    title: "Pippin",
    org: "Amazon · StoreGen",
    location: "",
    dateLabel: "Sep 2025 – now",
    sideLabel: "2025 – now",
    blurb:
      "An internal AI documentation platform I took from a community side project to a resilient, enterprise-tier tool used by roughly 40% of Amazon's knowledge workers.",
    tags: ["Applied AI", "Platform", "0-to-1"],
    stack: ["AWS Bedrock", "Anthropic Claude", "MCP", "Jira integrations"],
    accent: "#e3c58f",
    featured: true,
    promotion: false,
    resume: true,
    metrics: [
      { label: "Monthly active users", value: "125,000+" },
      { label: "Daily active users", value: "40,000+" },
      { label: "MoM growth", value: "15–20%" },
    ],
    links: [],
    highlights: [
      "Grew the team from 7 to 13 engineers, hiring the entire group and coaching new hires to mid-level — one engineer is on track for Senior Engineer within 6 months",
      "Led a major editor revamp plus rollout of accessibility features, real-time collaboration, spreadsheet support, agentic tools, and a review mode",
      "Built proprietary usability benchmarking and an AI-driven end-to-end regression suite to validate product decisions before they shipped",
      "Instrumented model and feature degradation detection, with fallback and safe-regression logic between the document store and agentic features",
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
    order: 2,
    kind: "project",
    slug: "agentic-developer-tools",
    title: "Agentic Developer Tools & A2A Framework",
    org: "Amazon · StoreGen",
    location: "",
    dateLabel: "Apr 2025 – now",
    sideLabel: "2025 – now",
    blurb:
      "Foundational R&D on autonomous developer agents — an Agent-to-Agent orchestration framework that has since driven 100,000+ code reviews org-wide.",
    tags: ["Applied AI", "Agents", "R&D"],
    stack: ["AWS Bedrock", "Anthropic Claude", "A2A protocol", "MCP"],
    accent: "#7fc8d4",
    featured: true,
    promotion: false,
    resume: true,
    metrics: [
      { label: "Code reviews driven", value: "100,000+" },
      { label: "Org rank on deployments", value: "Top 3 of ~2,000" },
    ],
    links: [],
    highlights: [
      "Architected and hand-coded an A2A (Agent-to-Agent) orchestration framework powering an oncall agent and a service-based call agent",
      "Directed an async code-generation agent, connected via A2A to a teammate agent and a web-based prompt UX",
      "Built a deployment-pipeline health agent as part of a broader bet on AI-native operational tooling",
      "Built a weekly demo and knowledge-sharing culture from the ground up that made the team the org leader in AI tooling adoption",
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
];
