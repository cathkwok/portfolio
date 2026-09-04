# Agent notes

- Always work on a feature branch and open a PR — never commit directly to `main`.
- The whole site renders from `src/data/resume.ts`. Adding a role, project, or
  skill means editing that file, not the components. See [README.md](README.md).
- Run `npm run lint` and `npx tsc --noEmit` before opening a PR.
