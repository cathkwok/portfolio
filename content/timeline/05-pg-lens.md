---
order: 5
kind: project
slug: pg-lens
title: pg-lens
org: Open Source
location: ""
dateLabel: "2022 – now"
sideLabel: "2022 – now"
blurb: "A Postgres query plan visualizer that turns EXPLAIN ANALYZE output into something you can actually read, and points at the specific node that's costing you."
tags: ["TypeScript", "React", "WASM", "Open Source"]
stack: ["TypeScript", "React", "D3", "PostgreSQL", "WASM"]
accent: "#e0a458"
featured: true
promotion: false
metrics:
  - label: GitHub stars
    value: "3.4k"
  - label: Weekly downloads
    value: "18k"
links:
  - label: Source
    href: "https://github.com/"
  - label: Live demo
    href: "https://example.com/"
highlights:
  - Parses raw or JSON EXPLAIN output entirely client-side — query plans never leave the browser
  - "Flags the usual suspects: row estimate misses, accidental sequential scans, spilled sorts"
  - Diff mode for comparing a plan before and after an index change
---
