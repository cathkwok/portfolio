# Cathy Kwok — Portfolio

A personal portfolio site: engineering leadership experience, signature
projects with full write-ups, and a printable resume. Live at
[cathkwok.github.io/portfolio](https://cathkwok.github.io/portfolio/).

```bash
npm run dev     # http://localhost:3000/portfolio
npm run build   # static export of every page to out/
```

Pushes to `main` deploy to GitHub Pages through
[.github/workflows/deploy.yml](.github/workflows/deploy.yml).

## Pages

| Route | What it is |
| --- | --- |
| `/` | Hero, about, the work grid, the career timeline, skills, contact |
| `/work/[slug]` | A full write-up per project — generated for every entry with a `body` |
| `/resume` | The same content as a printable resume |
| `/personal` | A short note on life outside work |

## Design

The look is "Sailcloth & Rope": sailcloth white, a navy nav bar, chambray
blue, a muted buoy red, rope-bordered work cards, and a life-ring icon. It
comes from a nautical way of thinking about a career: navigation, course
changes, and progress that isn't always a straight line. Every color is a
token at the top of [src/app/globals.css](src/app/globals.css).

## Content

Everything on the site is content-driven — see [src/data](src/data) for
how to add or edit a role, project, or skill.

## Credits

The reverse-chronological timeline spine with a "promoted" connector and the
single-data-file content pattern are adapted from
[roblesi/personal-web](https://github.com/roblesi/personal-web).
