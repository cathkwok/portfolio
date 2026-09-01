"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const LINKS = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Resume", href: "/resume" },
  { label: "Personal", href: "/personal" },
  { label: "Contact", href: "/#contact" },
];

export default function Nav({ initials }: { initials: string }) {
  const [open, setOpen] = useState(false);

  // Close the mobile menu on Escape so it never traps focus.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav className={`topnav${open ? " open" : ""}`} aria-label="Primary">
      <Link href="/" className="brand">
        <span aria-hidden="true">
          {/* a life ring: white body, four buoy-red bands */}
          <svg viewBox="0 0 16 16" width="22" height="22" fill="none">
            <circle cx="8" cy="8" r="5.4" stroke="currentColor" strokeWidth="3.6" />
            <circle
              cx="8"
              cy="8"
              r="5.4"
              stroke="var(--accent)"
              strokeWidth="3.6"
              strokeDasharray="4.24 4.24"
              strokeDashoffset="2.12"
            />
          </svg>
        </span>
        {initials}
      </Link>

      <button
        className="nav-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className="links">
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
