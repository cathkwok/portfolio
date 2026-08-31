import { getProfile } from "@/lib/content";

export default function Home() {
  const profile = getProfile();

  return (
    <main className="content" id="main">
      <section className="hero" aria-label="Introduction">
        <div className="hero-copy">
          <span className="eyebrow">
            {profile.role} · {profile.location}
          </span>
          <h1 className="name">
            {profile.name}
            <span className="aside">{profile.tagline}</span>
          </h1>
        </div>
        <div className="scrollcue" aria-hidden="true">
          <span>Scroll &darr;</span>
        </div>
      </section>
    </main>
  );
}
