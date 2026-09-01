import Link from "next/link";
import type { Metadata } from "next";
import { getPersonal, getProfile } from "@/lib/content";

export const metadata: Metadata = {
  title: "Personal",
  description: "A brief look outside of work.",
};

export default function Personal() {
  const profile = getProfile();
  const personal = getPersonal();

  return (
    <main className="detail content" id="main">
      <div className="detail-inner">
        <Link href="/" className="back">
          <span aria-hidden="true">←</span> Home
        </Link>

        <span className="eyebrow">{profile.location}</span>
        <h1>Outside of work</h1>
        <p className="lede">{personal.lede}</p>

        <div className="tags" style={{ marginTop: 30 }}>
          {personal.crafts.map((c) => (
            <b key={c}>{c}</b>
          ))}
        </div>
      </div>
    </main>
  );
}
