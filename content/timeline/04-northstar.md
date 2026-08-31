---
order: 4
kind: project
slug: northstar
title: Northstar Pipeline
org: Meridian Data
location: "San Francisco, CA"
dateLabel: "2023 – 2024"
sideLabel: "2023 – 2024"
blurb: "The event ingestion and aggregation pipeline behind a customer-facing analytics product — 2M events/sec at peak, with exactly-once semantics where it counts."
tags: ["Go", "Kafka", "Flink", "ClickHouse"]
stack: ["Go", "Kafka", "Flink", "ClickHouse", "Terraform", "AWS"]
accent: "#5fa8d3"
featured: true
promotion: false
metrics:
  - label: Peak throughput
    value: 2M/sec
  - label: p99 query latency
    value: "4.2s → 380ms"
  - label: Ingest-to-query lag
    value: "< 8s"
links: []
highlights:
  - Tiered aggregation that pre-computes the 20 most common query shapes at write time
  - Idempotent ingest keyed on client-generated event IDs with a bounded dedupe window
  - Multi-tenant isolation without per-tenant infrastructure, using cost-based admission control
---
