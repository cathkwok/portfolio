# Cathy Kwok — Portfolio

A data-driven portfolio built with Next.js 16, React 19, and Tailwind v4.
Every page renders from files in `content/` — **adding a role, a project, or a skill
means editing a file, never a component.**

```bash
npm run dev     # http://localhost:3000
npm run build   # static export of every page
```

## Pages

| Route | What it is |
| --- | --- |
| `/` | Hero, the project grid, the career timeline, skills, contact |
| `/work/[slug]` | A full write-up per project — generated for every entry that has a body |
| `/resume` | The same content as a printable resume (`Print / save as PDF` uses the browser's print dialog) |

## The content model

```
content/
  profile.json        name, role, tagline, bio, links, availability
  skills.json         grouped skill lists
  timeline/
    NN-slug.md        one file per career stop or project
```

`timeline/` is the spine of the whole site. Files are ordered by the `order` field:
**`order: 1` is the most recent**, and higher numbers go further back in time.
The `kind` field decides where an entry appears:

- `kind: project` → the project grid on the home page, plus `/resume`
- `kind: job` → the career timeline, plus `/resume`
- `kind: education` → the bottom of the timeline, plus `/resume`

### Adding a project

Create `content/timeline/00-my-thing.md`:

```markdown
---
order: 0                      # 1 = newest; lower sorts higher
kind: project
slug: my-thing                # the URL: /work/my-thing
title: My Thing
org: Open Source
location: ""
dateLabel: "Jan 2026 – now"   # shown on the card
sideLabel: "2026 – now"       # shown opposite the card on the timeline
blurb: "One sentence on what it is and why it was hard."
tags: ["Go", "Open Source"]   # chips on the card
stack: ["Go", "PostgreSQL"]   # the full stack, shown on the detail page
accent: "#7fb069"             # per-entry accent colour
featured: true
promotion: false
metrics:                      # first two show on the card, all show on the detail page
  - label: Requests/day
    value: 1.2B
links:
  - label: Source
    href: "https://github.com/..."
highlights:
  - A bullet that shows up on the card and the detail page
---

## Anything below the frontmatter

is markdown, and becomes the write-up at `/work/my-thing`. Headings, tables,
code blocks, and links are all styled. **An entry with no body simply has no
detail page** — it stays a timeline stop, and nothing links to a dead route.
```

### Notes

- **Quote any frontmatter value containing `: `** — otherwise YAML reads it as a nested map.
- `promotion: true` draws the "promoted" connector between an entry and the one
  directly below it (used for the two Meridian roles).
- Markdown bodies are rendered at build time and trusted, since they are authored
  in this repo. Don't paste untrusted HTML into them.

## Replacing the seed content

The content in `content/` is realistic placeholder material, written so the
layout could be designed against real-shaped text. Swap in the real details:

1. `content/profile.json` — name, tagline, location, email, and the GitHub/LinkedIn URLs
   (they currently point at bare `https://github.com/`).
2. `content/timeline/*.md` — real roles and projects.
3. `content/skills.json` — the real toolkit.

Nothing in `src/` needs to change.
