import { Link } from "react-router-dom";
import { ArrowRight } from "../components/Icons.jsx";
import PageHeader from "../components/PageHeader.jsx";
import { skills } from "../content.js";

const FACTS = [
  { label: "Location", value: "Kigali, Rwanda · Previously Tokyo, Japan" },
  { label: "Education", value: "Associate's degree in Civil Engineering, Japan" },
  { label: "Languages", value: "English, Japanese, Kinyarwanda" },
  { label: "Focus", value: "Laravel, React, APIs, databases, backend architecture" },
];

const EXPERIENCE = [
  { year: "2026", title: "Full-stack developer", text: "Maintained and improved a client's production Laravel booking platform on Laravel Cloud." },
  { year: "2025", title: "MERN applications", text: "Built full-stack apps with JWT auth, REST APIs, and MongoDB." },
  { year: "2025", title: "Browser extensions", text: "Automated a real work workflow with a Chrome extension and Google Calendar OAuth." },
  { year: "2024", title: "Started full-stack development", text: "Began building web applications after a background in civil engineering." },
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="I like understanding how things work — and making them work better."
        intro="I'm a full-stack developer who came to software from civil engineering. That background taught me to approach problems with structure, patience, and attention to detail."
      />

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="section-title mb-6">Background</h2>
            <p className="body-text mb-4">
              I studied civil engineering in Japan, where I learned to break complex problems into parts that can be designed, tested, and improved. I brought the same mindset into software development.
            </p>
            <p className="body-text mb-4">
              Since then I've built applications from scratch and worked on a live production system — integrating Stripe, restoring email and real-time updates, fixing difficult bugs, and talking directly with the client about what needed to change.
            </p>
            <p className="body-text">
              I'm most at home in the backend, but I enjoy the whole path from database to interface. Good software, to me, is software that people can rely on without thinking about it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/projects" className="btn-primary">
                See my work <ArrowRight />
              </Link>
              <a href="/Brice-Resume.pdf" target="_blank" rel="noreferrer" className="btn-outline">
                View resume
              </a>
            </div>
          </div>

          <div className="card h-fit p-6 sm:p-8">
            <dl className="space-y-6">
              {FACTS.map(({ label, value }) => (
                <div key={label}>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted">{label}</dt>
                  <dd className="mt-1 text-sm leading-6 text-paper">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-16">
        <div className="container-page">
          <p className="eyebrow mb-3">Toolkit</p>
          <h2 className="section-title mb-10">Technologies I use.</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {skills.map(({ title, items }) => (
              <div key={title} className="card p-6">
                <h3 className="text-lg font-semibold">{title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line py-16">
        <div className="container-page">
          <p className="eyebrow mb-3">Experience</p>
          <h2 className="section-title mb-8">Recent chapters.</h2>
          <div className="divide-y divide-line">
            {EXPERIENCE.map(({ year, title, text }) => (
              <div key={`${year}-${title}`} className="grid gap-2 py-5 sm:grid-cols-[5rem_1fr]">
                <span className="text-sm font-semibold text-accent">{year}</span>
                <div>
                  <h3 className="font-semibold text-paper">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
