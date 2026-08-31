---
order: 1
kind: project
slug: pippin
title: "Pippin"
org: "Amazon · StoreGen"
location: ""
dateLabel: "Sep 2025 – now"
sideLabel: "2025 – now"
blurb: "An internal AI documentation platform I took from a community side project to a resilient, enterprise-tier tool used by roughly 40% of Amazon's knowledge workers."
tags: ["Applied AI", "Platform", "0-to-1"]
stack: ["AWS Bedrock", "Anthropic Claude", "MCP", "Jira integrations"]
accent: "#e3c58f"
featured: true
promotion: false
metrics:
  - label: Monthly active users
    value: "125,000+"
  - label: Daily active users
    value: "40,000+"
  - label: MoM growth
    value: "15–20%"
links: []
highlights:
  - "Grew the team from 7 to 13 engineers, hiring the entire group and coaching new hires to mid-level — one engineer is on track for Senior Engineer within 6 months"
  - "Led a major editor revamp plus rollout of accessibility features, real-time collaboration, spreadsheet support, agentic tools, and a review mode"
  - "Built proprietary usability benchmarking and an AI-driven end-to-end regression suite to validate product decisions before they shipped"
  - "Instrumented model and feature degradation detection, with fallback and safe-regression logic between the document store and agentic features"
---

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
