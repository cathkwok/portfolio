import { cache } from "react";
import { marked } from "marked";
import {
  profile as rawProfile,
  skills as rawSkills,
  timeline as rawTimeline,
  type Kind,
  type Link,
  type Metric,
  type Profile,
  type SkillGroup,
} from "@/data/resume";

export type { Kind, Link, Metric, Profile, SkillGroup };

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
  /** Whether this shows on /resume. Defaults true; set false to keep an entry
   *  in the full career timeline without bloating the concise resume view
   *  (e.g. student internships from a decade-plus back). */
  resume: boolean;
};

export const getProfile = cache((): Profile => rawProfile);
export const getSkills = cache((): SkillGroup[] => rawSkills);

export const getTimeline = cache((): Entry[] => {
  const entries = rawTimeline.map((e) => {
    const body = e.body.trim();
    return {
      ...e,
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

/** Full-time roles only — leaves early-career internships out of the printable resume. */
export const getResumeJobs = cache((): Entry[] => getJobs().filter((e) => e.resume));

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
