import type { Metadata } from "next";
import PrintButton from "@/components/PrintButton";
import {
  getEducation,
  getProfile,
  getProjects,
  getResumeJobs,
  getSkills,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Resume",
  description: "Experience, selected projects, and skills.",
};

export default function Resume() {
  const profile = getProfile();
  const jobs = getResumeJobs();
  const projects = getProjects();
  const education = getEducation();
  const skills = getSkills();

  return (
    <main className="resume content" id="main">
      <div className="resume-inner">
        <header className="resume-head">
          <div>
            <h1>{profile.name}</h1>
            <p className="role">
              {profile.role} · {profile.location}
            </p>
          </div>
          <div className="resume-contact">
            {profile.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target={l.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
              >
                {l.handle}
              </a>
            ))}
          </div>
        </header>

        <PrintButton />

        <section className="rsection">
          <h2>Summary</h2>
          <p>{profile.bio[0]}</p>
        </section>

        <section className="rsection">
          <h2>Experience</h2>
          {jobs.map((job) => (
            <article className="rrole" key={job.slug}>
              <div className="rrole-head">
                <div>
                  <h3>{job.title}</h3>
                  <div className="org">
                    {job.org}
                    {job.location && ` · ${job.location}`}
                  </div>
                </div>
                <div className="when">{job.dateLabel}</div>
              </div>
              <p className="blurb">{job.blurb}</p>
              {job.highlights.length > 0 && (
                <ul>
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </section>

        <section className="rsection">
          <h2>Selected projects</h2>
          {projects.map((p) => (
            <article className="rrole" key={p.slug}>
              <div className="rrole-head">
                <div>
                  <h3>{p.title}</h3>
                  <div className="org">
                    {p.org}
                    {p.stack.length > 0 && ` · ${p.stack.join(", ")}`}
                  </div>
                </div>
                <div className="when">{p.dateLabel}</div>
              </div>
              <p className="blurb">{p.blurb}</p>
              {p.metrics.length > 0 && (
                <ul>
                  <li>
                    {p.metrics.map((m) => `${m.label}: ${m.value}`).join(" · ")}
                  </li>
                </ul>
              )}
            </article>
          ))}
        </section>

        <section className="rsection">
          <h2>Skills</h2>
          <div className="rskills">
            {skills.map((g) => (
              <div key={g.group}>
                <div className="k">{g.group}</div>
                <div className="v">{g.items.join(", ")}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="rsection">
          <h2>Education</h2>
          {education.map((e) => (
            <article className="rrole" key={e.slug}>
              <div className="rrole-head">
                <div>
                  <h3>{e.title}</h3>
                  <div className="org">{e.org}</div>
                </div>
                <div className="when">{e.dateLabel}</div>
              </div>
              <p className="blurb">{e.blurb}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
