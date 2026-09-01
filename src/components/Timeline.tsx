import Link from "next/link";
import type { CSSProperties } from "react";
import type { Entry, SectionCopy } from "@/lib/content";

export default function Timeline({ entries, copy }: { entries: Entry[]; copy: SectionCopy }) {
  const firstEdu = entries.findIndex((e) => e.kind === "education");

  return (
    <section className="timeline" id="experience" aria-labelledby="experience-heading">
      <div className="tl-intro">
        <span className="eyebrow">{copy.eyebrow}</span>
        <h2 id="experience-heading">{copy.heading}</h2>
        {copy.intro && <p>{copy.intro}</p>}
      </div>

      <div className="spine">
        {entries.map((e, i) => (
          <div key={e.slug}>
            {i === firstEdu && firstEdu > 0 && (
              <div className="older">&darr; before all that &darr;</div>
            )}

            <div
              className={`entry ${i % 2 === 0 ? "right" : "left"}`}
              style={{ "--dot": e.accent } as CSSProperties}
            >
              <div className="card">
                <div className="where">
                  <span className="org">
                    {e.org}
                    {e.location && ` · ${e.location}`}
                  </span>
                  <span>{e.dateLabel}</span>
                </div>

                <h3>{e.hasDetail ? <Link href={`/work/${e.slug}`}>{e.title}</Link> : e.title}</h3>
                <p className="blurb">{e.blurb}</p>

                {e.highlights.length > 0 && (
                  <ul className="highlights" style={{ marginTop: 16 }}>
                    {e.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}

                {e.tags.length > 0 && (
                  <div className="tags">
                    {e.tags.map((t) => (
                      <b key={t}>{t}</b>
                    ))}
                  </div>
                )}

                {e.links.length > 0 && (
                  <div className="links-row">
                    {e.links.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div className="side">{e.sideLabel}</div>
            </div>

            {e.promotion && (
              <div className="promo" aria-hidden="true">
                <span className="mark">
                  <i />
                  promoted
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
