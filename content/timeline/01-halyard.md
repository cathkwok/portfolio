---
order: 1
kind: project
slug: halyard
title: Halyard
org: Open Source
location: ""
dateLabel: "Dec 2024 – now"
sideLabel: "2024 – now"
blurb: "A schema-aware feature flag service that validates every flag against the code paths that read it, so a stale flag can't silently change behavior in production."
tags: ["Go", "PostgreSQL", "gRPC", "Open Source"]
stack: ["Go", "PostgreSQL", "gRPC", "Redis", "Kubernetes"]
accent: "#7fb069"
featured: true
promotion: false
metrics:
  - label: Flag evaluations/day
    value: 2.1B
  - label: p99 eval latency
    value: 1.4ms
  - label: Services onboarded
    value: "80+"
links:
  - label: Source
    href: "https://github.com/"
  - label: Docs
    href: "https://example.com/"
highlights:
  - Typed flag definitions generated from a central schema, checked at build time in Go and TypeScript
  - Local evaluation via a sidecar with a streaming update channel — no network hop on the hot path
  - Automatic detection of stale flags by correlating evaluation telemetry with code references
---

## The problem

Feature flags rot. A team ships a flag, the rollout finishes, and the flag stays in the codebase for eighteen months — still evaluated, still branching, and now nobody remembers which side is the safe one. At a certain scale the flag system stops being a safety mechanism and becomes a source of incidents.

Halyard started as an internal answer to that: what if the flag service knew about the code that reads it?

## How it works

Flags are declared in a schema file that lives with the service that owns them. A codegen step turns that schema into typed accessors, so `flags.CheckoutV2.Enabled(ctx)` either compiles or it doesn't — there are no string keys to typo.

At runtime, each service runs a lightweight sidecar that holds the full flag set in memory and receives updates over a streaming gRPC channel. Evaluation never touches the network, which is what keeps p99 in the low single-digit milliseconds even under load.

```go
if flags.CheckoutV2.Enabled(ctx) {
    return h.checkoutV2(ctx, order)
}
return h.checkoutV1(ctx, order)
```

The interesting part is the third piece. The sidecar reports which flags it actually evaluated, and a background job joins that against static references found in the codebase. A flag that's been returning the same value for 30 days with no variant traffic gets opened as a cleanup PR automatically.

## What I'd do differently

The schema-per-service model was right, but I under-designed the migration story for flags that need to move between services. It works, but it involves a manual two-phase rename that I'd replace with an alias table if I started over.
