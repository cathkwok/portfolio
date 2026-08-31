---
order: 7
kind: project
slug: quicksilver
title: Quicksilver
org: Fernwood
location: "Remote"
dateLabel: "2021 – 2023"
sideLabel: "2021 – 2023"
blurb: "An incremental build cache for large TypeScript monorepos that reasons about the type graph, not just file hashes — so touching a comment doesn't rebuild the world."
tags: ["Rust", "TypeScript", "Developer Tools"]
stack: ["Rust", "TypeScript", "Node.js", "S3"]
accent: "#8fd4c1"
featured: true
promotion: false
metrics:
  - label: CI time
    value: "22m → 6m"
  - label: Repos using it
    value: "140"
  - label: Cache hit rate
    value: "91%"
links:
  - label: Source
    href: "https://github.com/"
highlights:
  - Content-addressed cache keyed on the resolved type graph rather than raw file contents
  - Remote cache backed by S3 with a local overlay, shared between CI and developer machines
  - Deterministic replay mode that reproduces any historical build for debugging
---
