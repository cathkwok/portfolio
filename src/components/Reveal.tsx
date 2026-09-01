"use client";

import { useEffect } from "react";

/**
 * Adds `.in` to timeline entries as they scroll into view. Kept as a single
 * observer over the server-rendered markup so the timeline itself ships no JS.
 */
export default function Reveal() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = document.querySelectorAll<HTMLElement>(".entry, .spine");

    if (reduce || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("in"));
      return;
    }

    // The spine is many screens tall, so it reveals at threshold 0 while the
    // cards wait until they are meaningfully on screen.
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
