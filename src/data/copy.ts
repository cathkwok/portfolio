import type { PageCopy } from "./types";
import { profile } from "./profile";

export const pageCopy: PageCopy = {
  work: {
    eyebrow: "Signature initiatives",
    heading: "What I’ve led, and what it took to scale it.",
    intro: "The story behind each one — what broke, what we built, what I’d do differently.",
  },
  experience: {
    eyebrow: "The path here",
    heading: "How I got here.",
    intro:
      "Twelve years in tech, eight of them building and leading teams — read from the top down, most recent first.",
  },
  toolkit: {
    eyebrow: "Toolkit",
    heading: "The toolkit used along the way.",
  },
  contact: {
    eyebrow: "Get in touch",
    fallbackHeading: "Always happy to chat.",
    note: "Fastest way to reach me is email.",
  },
  footer: `${profile.name} — built with Next.js. Content lives in src/data/.`,
};
