import Reveal from "@/components/Reveal";
import Timeline from "@/components/Timeline";
import WorkGrid from "@/components/WorkGrid";
import {
  getEducation,
  getJobs,
  getProfile,
  getProjects,
  getSkills,
} from "@/lib/content";

export default function Home() {
  const profile = getProfile();
  const projects = getProjects();
  const skills = getSkills();
  // The spine is the career itself; projects get their own grid above it.
  const path = [...getJobs(), ...getEducation()].sort((a, b) => a.order - b.order);

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

      <WorkGrid projects={projects} />

      <Timeline entries={path} />

      <section className="skills" aria-labelledby="skills-heading">
        <div className="skills-inner">
          <div className="section-head center">
            <span className="eyebrow">Toolkit</span>
            <h2 id="skills-heading">The toolkit used along the way.</h2>
          </div>
          <div className="skills-grid">
            {skills.map((g) => (
              <div key={g.group}>
                <h3>{g.group}</h3>
                <ul>
                  {g.items.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="source" id="contact" aria-labelledby="contact-heading">
        <div className="source-inner">
          <span className="eyebrow">Get in touch</span>
          <h2 id="contact-heading">
            {profile.available ? profile.availabilityNote : "Always happy to chat."}
          </h2>
          <p>Fastest way to reach me is email.</p>
          <div className="source-links">
            {profile.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target={l.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
              >
                {l.label}
              </a>
            ))}
            <a href="/resume">Resume</a>
          </div>
        </div>
      </section>

      <footer className="colophon">
        {profile.name} — built with Next.js. Content lives in src/data/resume.ts.
      </footer>

      <Reveal />
    </main>
  );
}
