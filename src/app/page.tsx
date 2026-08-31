import Reveal from "@/components/Reveal";
import Timeline from "@/components/Timeline";
import WorkGrid from "@/components/WorkGrid";
import { getEducation, getJobs, getProfile, getProjects } from "@/lib/content";

export default function Home() {
  const profile = getProfile();
  const projects = getProjects();
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

      <Reveal />
    </main>
  );
}
