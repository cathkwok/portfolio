import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { getDetailEntries, getEntry, getNeighbors } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getDetailEntries().map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntry(slug);
  if (!entry) return {};
  return { title: entry.title, description: entry.blurb };
}

export default async function WorkDetail({ params }: Props) {
  const { slug } = await params;
  const entry = getEntry(slug);
  if (!entry) notFound();

  const { prev, next } = getNeighbors(slug);

  return (
    <main className="detail content" id="main" style={{ "--dot": entry.accent } as CSSProperties}>
      <div className="detail-inner">
        <Link href="/#work" className="back">
          <span aria-hidden="true">←</span> All work
        </Link>

        <span className="eyebrow">
          {entry.org}
          {entry.location && ` · ${entry.location}`} · {entry.dateLabel}
        </span>
        <h1>{entry.title}</h1>
        <p className="lede">{entry.blurb}</p>

        <div className="factbar">
          <div>
            <div className="k">Timeframe</div>
            <div className="v">{entry.dateLabel}</div>
          </div>
          {entry.stack.length > 0 && (
            <div style={{ flex: "1 1 260px" }}>
              <div className="k">Stack</div>
              <div className="v">{entry.stack.join(" · ")}</div>
            </div>
          )}
          {entry.links.length > 0 && (
            <div>
              <div className="k">Links</div>
              <div className="v">
                <span className="links-row" style={{ marginTop: 0 }}>
                  {entry.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                      {l.label}
                    </a>
                  ))}
                </span>
              </div>
            </div>
          )}
        </div>

        {entry.metrics.length > 0 && (
          <div className="metrics">
            {entry.metrics.map((m) => (
              <div key={m.label}>
                <div className="v">{m.value}</div>
                <div className="k">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        {entry.highlights.length > 0 && (
          <ul className="highlights">
            {entry.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}

        {/* Body is authored locally in src/data/resume.ts — trusted markdown, not user input. */}
        <div className="prose" dangerouslySetInnerHTML={{ __html: entry.html }} />

        {(prev || next) && (
          <nav className="pager" aria-label="More work">
            {prev ? (
              <Link href={`/work/${prev.slug}`}>
                <div className="k">Newer</div>
                <div className="v">{prev.title}</div>
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link href={`/work/${next.slug}`} className="next">
                <div className="k">Older</div>
                <div className="v">{next.title}</div>
              </Link>
            )}
          </nav>
        )}
      </div>
    </main>
  );
}
