import { ArrowUpRight } from "../components/Icons.jsx";
import PageHeader from "../components/PageHeader.jsx";
import { projects } from "../content.js";

export default function Projects() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Selected work."
        intro="A small set of projects I'm happy to stand behind — a production recovery, a community tool, and an extension built to solve my own problem."
      />

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-5">
          {projects.map((project, index) => (
            <article key={project.id} className="card p-6 sm:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="max-w-2xl">
                  <p className="eyebrow mb-3">
                    {String(index + 1).padStart(2, "0")} · {project.label}
                  </p>
                  <h2 className="text-2xl font-semibold tracking-tight text-paper">{project.title}</h2>
                  <p className="body-text mt-3">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex shrink-0 flex-wrap gap-3">
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-primary">
                      Live demo <ArrowUpRight />
                    </a>
                  ) : null}
                  <a href={project.sourceUrl} target="_blank" rel="noreferrer" className="btn-outline">
                    Source <ArrowUpRight />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
