import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "../components/Icons.jsx";
import { projects, socials } from "../content.js";

const SERVICES = [
  {
    title: "Backend & APIs",
    text: "Laravel, PHP, and Node.js — authentication, payments, REST APIs, and the logic behind the interface.",
  },
  {
    title: "Full-stack apps",
    text: "React frontends connected to clean, maintainable backends and SQL databases.",
  },
  {
    title: "Production support",
    text: "Debugging live systems, improving reliability, and shipping changes without breaking what works.",
  },
];

export default function Home() {
  return (
    <>
      <section className="container-page flex min-h-[72vh] flex-col justify-center py-20 sm:py-28">
        <p className="eyebrow mb-6">Full-stack developer</p>
        <h1 className="max-w-4xl text-[clamp(2.5rem,7vw,4.75rem)] font-bold leading-[1.06] tracking-[-0.045em]">
          I build systems that <span className="text-accent">solve real problems.</span>
        </h1>
        <p className="body-text mt-6 max-w-xl text-lg">
          I'm Brice Byiringiro, a developer working with Laravel, React, and APIs. I care about systems that are reliable, practical, and easy to maintain.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link to="/projects" className="btn-primary">
            View my work <ArrowRight />
          </Link>
          <Link to="/contact" className="btn-outline">
            Get in touch
          </Link>
        </div>
        <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
          <span>Started my career in Tokyo, Japan, now based in Kigali, Rwanda</span>
          <span className="hidden h-1 w-1 rounded-full bg-line sm:block" />
          {socials.map(({ label, href }) => (
            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="text-muted no-underline transition-colors hover:text-accent">
              {label}
            </a>
          ))}
        </div>
      </section>

      <section className="border-t border-line py-20">
        <div className="container-page">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow mb-3">Selected work</p>
              <h2 className="section-title">A few things I've built.</h2>
            </div>
            <Link to="/projects" className="text-link">
              All projects <ArrowRight />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {projects.map((project) => (
              <Link key={project.id} to="/projects" className="card group flex flex-col p-6 no-underline transition-colors hover:border-muted">
                <div className="mb-10 flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted">{project.label}</span>
                  <ArrowUpRight className="h-4 w-4 text-muted transition-colors group-hover:text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-paper">{project.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{project.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line py-20">
        <div className="container-page">
          <p className="eyebrow mb-3">What I do</p>
          <h2 className="section-title mb-10">Simple, focused work.</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {SERVICES.map(({ title, text }, index) => (
              <div key={title} className="card p-6">
                <span className="text-xs font-semibold text-accent">0{index + 1}</span>
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line py-16">
        <div className="container-page flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="section-title">Have something in mind?</h2>
            <p className="body-text mt-2">I'd love to hear about it.</p>
          </div>
          <Link to="/contact" className="btn-primary">
            Let's talk <ArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
