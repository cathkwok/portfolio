import type { Personal, Profile } from "./types";

export const profile: Profile = {
  name: "Cathy Kwok",
  initials: "CK",
  role: "Engineering Manager, Applied AI",
  tagline:
    "I build engineering teams and the AI tools they ship. Currently leading applied GenAI and developer tooling at Amazon.",
  location: "Seattle, WA",
  email: "cathykwok13@gmail.com",
  available: true,
  availabilityNote: "Reach out and connect!",
  bio: [
    "AI-native leader with 12 years of experience and 8 years of direct people management, specializing in scaling hyperscale platforms (300M+ users) and applied AI solutions.",
    "I bridge the gap between technical architecture and product strategy, managing high-performance teams through ambiguity while maintaining hands-on involvement in complex problem solving.",
    "I am passionate about building highly collaborative team environments and excited about how we can accelerate solving real customer problems with applied AI.",
  ],
  links: [
    { label: "LinkedIn", href: "https://linkedin.com/in/cathy-kwok", handle: "in/cathy-kwok" },
    { label: "Email", href: "mailto:cathykwok13@gmail.com", handle: "cathykwok13@gmail.com" },
  ],
};

export const personal: Personal = {
  lede: "Home base is Seattle, where I am a mom to two wonderful kids. When I'm not building, you'll find me walking the dog, sailing with my husband, hosting a dinner party for friends, or taking up yet another crafting hobby",
  crafts: ["Crochet", "Knitting", "Watercolor", "Paper flowers", "Embroidery"],
};
