# Cathy Kwok — Portfolio

A data-driven portfolio built with Next.js 16, React 19, and Tailwind v4.
Every page renders from one file — [src/data/resume.ts](src/data/resume.ts) —
**adding a role, a project, or a skill means editing that file, never a component.**

```bash
npm run dev     # http://localhost:3000
npm run build   # static export of every page
```

## Pages

| Route | What it is |
| --- | --- |
| `/` | Hero, the signature-work grid, the career timeline, skills, contact |
| `/work/[slug]` | A full write-up per project — generated for every entry with a `body` |
| `/resume` | The same content as a printable resume (`Print / save as PDF` uses the browser's print dialog) |

## The content model

`src/data/resume.ts` exports three things:

```ts
export const profile: Profile          // name, role, tagline, bio, links, availability
export const skills: SkillGroup[]      // grouped skill lists
export const timeline: TimelineEntry[] // every job, project, and degree
```

`timeline` is the spine of the whole site. Entries are ordered by the `order` field:
**`order: 1` is the most recent**, and higher numbers go further back in time.
The `kind` field decides where an entry appears:

- `kind: "project"` → the signature-work grid on the home page, plus `/resume`
- `kind: "job"` → the career timeline, plus `/resume` (unless `resume: false`)
- `kind: "education"` → the bottom of the timeline, plus `/resume`

### Adding a project

Add an object to the `timeline` array in `src/data/resume.ts`:

```ts
{
  order: 0,                       // 1 = newest; lower sorts higher
  kind: "project",
  slug: "my-thing",               // the URL: /work/my-thing
  title: "My Thing",
  org: "Open Source",
  location: "",
  dateLabel: "Jan 2026 – now",    // shown on the card
  sideLabel: "2026 – now",        // shown opposite the card on the timeline
  blurb: "One sentence on what it is and why it was hard.",
  tags: ["Go", "Open Source"],    // chips on the card
  stack: ["Go", "PostgreSQL"],    // the full stack, shown on the detail page
  accent: "#7fb069",              // per-entry accent colour
  featured: true,
  promotion: false,
  resume: true,
  metrics: [                      // first two show on the card, all show on the detail page
    { label: "Requests/day", value: "1.2B" },
  ],
  links: [
    { label: "Source", href: "https://github.com/..." },
  ],
  highlights: [
    "A bullet that shows up on the card and the detail page",
  ],
  body: `
## Anything in this template literal

is markdown, and becomes the write-up at /work/my-thing. Headings, tables,
code blocks, and links are all styled. **An entry with an empty \`body\`
simply has no detail page** — it stays a timeline stop, and nothing links
to a dead route.
  `,
},
```

### Notes

- `promotion: true` draws the "promoted" connector between an entry and the one
  directly below it (used for the two Meridian roles).
- `resume: false` keeps an entry on the full timeline without it showing on the
  printable resume — used for student-era internships that would otherwise
  outweigh a decade of full-time roles on a one-page resume.
- Markdown bodies render at build time and are trusted, since they're authored
  in this repo. Don't paste untrusted HTML into a `body` template literal.
- Being one `.ts` file means normal TypeScript tooling applies: the `TimelineEntry`
  type catches a missing or misspelled field at compile time, and there's no YAML
  frontmatter to get the quoting wrong on (a `blurb` with a bare `: ` in it used to
  silently break the old Markdown-frontmatter version of this file).

## Design lineage

The layout — frosted-glass cards, mono uppercase eyebrows, the reverse-chronological
timeline spine with a "promoted" connector — is adapted from
[roblesi/personal-web](https://github.com/roblesi/personal-web), including the
single-data-file pattern this project's content model now follows
([`src/data/resume.mjs`](https://github.com/roblesi/personal-web/blob/main/src/data/resume.mjs)
there, [`src/data/resume.ts`](src/data/resume.ts) here). The scroll-scrubbed canvas
background from that reference was dropped in favor of a static layered backdrop —
no pre-rendered frame sequence, no canvas, no JS.

## Replacing the seed content

Edit `src/data/resume.ts` directly:

1. `profile` — name, tagline, location, email, and links.
2. `timeline` — roles and projects.
3. `skills` — the toolkit.

Nothing in `src/app/` or `src/components/` needs to change.
