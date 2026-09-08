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
          <svg viewBox="0 0 16 16" width="13" height="13" fill="none">
            <circle cx="8" cy="8" r="6.4" stroke="currentColor" strokeWidth="1" />
            <path d="M8 2.4 9.4 8 8 13.6 6.6 8Z" fill="currentColor" />
            <path
              d="M2.4 8 8 6.6 13.6 8 8 9.4Z"
              fill="currentColor"
              opacity="0.55"
            />
          </svg>
        </span>{" "}
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
