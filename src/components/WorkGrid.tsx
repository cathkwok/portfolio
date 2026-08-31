import Link from "next/link";
import type { CSSProperties } from "react";
import type { Entry } from "@/lib/content";

function accentVar(accent: string) {
  return { "--dot": accent } as CSSProperties;
}

export default function WorkGrid({ projects }: { projects: Entry[] }) {
  return (
    <section className="work" id="work" aria-labelledby="work-heading">
      <div className="work-inner">
        <div className="section-head">
          <span className="eyebrow">Signature initiatives</span>
          <h2 id="work-heading">What I&rsquo;ve led, and what it took to scale it.</h2>
          <p>
            Each one has a write-up: the problem, how the team and the product grew together,
            and what I&rsquo;d do differently now.
          </p>
        </div>

        <div className="work-grid">
          {projects.map((p) => (
            <article key={p.slug} className="wcard" style={accentVar(p.accent)}>
              <div className="meta">
                <span className="org">{p.org}</span>
                <span>{p.dateLabel}</span>
              </div>

              <h3>
                {p.hasDetail ? <Link href={`/work/${p.slug}`}>{p.title}</Link> : p.title}
              </h3>
              <p className="blurb">{p.blurb}</p>

              {p.metrics.length > 0 && (
                <div className="wmetrics">
                  {/* two headline numbers per card; the rest live on the detail page */}
                  {p.metrics.slice(0, 2).map((m) => (
                    <div key={m.label}>
                      <div className="v">{m.value}</div>
                      <div className="k">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}

              <div className="tags">
                {p.tags.map((t) => (
                  <b key={t}>{t}</b>
                ))}
              </div>

              <div className="foot">
                {p.hasDetail && (
                  <span className="more">
                    Read the write-up <span aria-hidden="true">→</span>
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
