export type Link = { label: string; href: string };
export type Metric = { label: string; value: string };
export type Kind = "job" | "project" | "education";

export type TimelineEntry = {
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
  /** Whether this shows on /resume. Defaults true; set false to keep an
   *  entry on the full timeline without it appearing on the printable
   *  resume (e.g. student internships from a decade-plus back). */
  resume: boolean;
  metrics: Metric[];
  links: Link[];
  highlights: string[];
  /** Markdown write-up. Entries with a body get their own page at /work/[slug]. */
  body: string;
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
};

export type SkillGroup = { group: string; items: string[] };

export type Personal = {
  lede: string;
  crafts: string[];
};
