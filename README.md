# Cathy Kwok — Portfolio

A personal portfolio site: engineering leadership experience, a handful of
signature projects with full write-ups, and a printable resume.

```bash
npm run dev     # http://localhost:3000
npm run build   # static export of every page
```

## Pages

| Route | What it is |
| --- | --- |
| `/` | Hero, the signature-work grid, the career timeline, skills, contact |
| `/work/[slug]` | A full write-up per project — generated for every entry with a `body` |
| `/resume` | The same content as a printable resume |

## Themes

The site is built around a "journey, not the destination" idea — a
nautical, growth-oriented way of thinking about a career: navigation,
course changes, and progress that isn't always a straight line.

Everything on the site is content-driven — see [src/data](src/data) for
how to add or edit a role, project, or skill.

## Design lineage

The layout — frosted-glass cards, mono uppercase eyebrows, the reverse-chronological
timeline spine with a "promoted" connector — is adapted from
[roblesi/personal-web](https://github.com/roblesi/personal-web), including the
single-data-file content pattern this project originally followed.
