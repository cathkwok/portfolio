import fs from "node:fs";
import path from "node:path";
import { cache } from "react";
import matter from "gray-matter";
import { marked } from "marked";

/**
 * Everything on this site is read from /content at build time. Adding a role,
 * a project, or a skill means adding or editing a file there — never a component.
 */
const CONTENT_DIR = path.join(process.cwd(), "content");

export type Link = { label: string; href: string };
export type Metric = { label: string; value: string };
export type Kind = "job" | "project" | "education";

export type Entry = {
  order: number;
  kind: Kind;
  slug: string;
  title: string;
  org: string;
  location: string;
  dateLabel: string;
  sideLabel: string;
  blurb: string;
  tags: string[];
  stack: string[];
  accent: string;
  featured: boolean;
  promotion: boolean;
  metrics: Metric[];
  links: Link[];
  highlights: string[];
  /** Rendered markdown body. Empty when the entry is just a timeline stop. */
  html: string;
  /** Entries with a body get their own page at /work/[slug]. */
  hasDetail: boolean;
};

export type Profile = {
  name: string;
  initials: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  available: boolean;
  availabilityNote: string;
  bio: string[];
  links: (Link & { handle: string })[];
  resumeUrl: string;
};

export type SkillGroup = { group: string; items: string[] };

function readJson<T>(file: string): T {
  return JSON.parse(fs.readFileSync(path.join(CONTENT_DIR, file), "utf8")) as T;
}

export const getProfile = cache((): Profile => readJson<Profile>("profile.json"));
export const getSkills = cache((): SkillGroup[] => readJson<SkillGroup[]>("skills.json"));

export const getTimeline = cache((): Entry[] => {
  const dir = path.join(CONTENT_DIR, "timeline");
  const entries = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      const body = content.trim();

      return {
        order: Number(data.order ?? 999),
        kind: (data.kind ?? "project") as Kind,
        slug: String(data.slug ?? file.replace(/^\d+-/, "").replace(/\.md$/, "")),
        title: String(data.title ?? ""),
        org: String(data.org ?? ""),
        location: String(data.location ?? ""),
        dateLabel: String(data.dateLabel ?? ""),
        sideLabel: String(data.sideLabel ?? ""),
        blurb: String(data.blurb ?? ""),
        tags: (data.tags ?? []) as string[],
        stack: (data.stack ?? []) as string[],
        accent: String(data.accent || "#e3c58f"),
        featured: Boolean(data.featured),
        promotion: Boolean(data.promotion),
        metrics: (data.metrics ?? []) as Metric[],
        links: (data.links ?? []) as Link[],
        highlights: (data.highlights ?? []) as string[],
        html: body ? (marked.parse(body, { async: false }) as string) : "",
        hasDetail: body.length > 0,
      } satisfies Entry;
    });

  // order 1 is the most recent; higher numbers go further back in time.
  return entries.sort((a, b) => a.order - b.order);
});

export const getProjects = cache((): Entry[] =>
  getTimeline().filter((e) => e.kind === "project"),
);

export const getFeatured = cache((): Entry[] =>
  getProjects().filter((e) => e.featured),
);

export const getJobs = cache((): Entry[] => getTimeline().filter((e) => e.kind === "job"));
export const getEducation = cache((): Entry[] => getTimeline().filter((e) => e.kind === "education"));

export const getDetailEntries = cache((): Entry[] => getTimeline().filter((e) => e.hasDetail));

export function getEntry(slug: string): Entry | undefined {
  return getTimeline().find((e) => e.slug === slug && e.hasDetail);
}

/** Previous/next in timeline order, across entries that have their own page. */
export function getNeighbors(slug: string): { prev?: Entry; next?: Entry } {
  const list = getDetailEntries();
  const i = list.findIndex((e) => e.slug === slug);
  if (i === -1) return {};
  return { prev: list[i - 1], next: list[i + 1] };
}
