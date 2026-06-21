import { ArrowUpRight } from "lucide-react";

import { projects } from "~/data/portfolio";

import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function ProjectsSection() {
  return (
    <section id="projects" className="container-page section-pad">
      <SectionHeading
        eyebrow="03 / Projects"
        title="Websites I have worked on."
        description="A few shipped projects for organizations and events, with a focus on usable pages and registration flows."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.title}>
            <article className="flex h-full flex-col rounded border border-zinc-200 bg-white p-6 transition hover:-translate-y-1 hover:border-lime-500 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="mb-8 flex items-center justify-between font-mono text-xs uppercase tracking-[0.16em] text-lime-700 dark:text-lime-300">
                <span>{project.type}</span>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-zinc-950 dark:text-stone-50">{project.title}</h3>
              <p className="mt-2 text-sm text-zinc-500">{project.period}</p>
              <p className="muted-text mt-5 flex-1 text-sm leading-7">{project.description}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-zinc-200 px-3 py-1.5 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-300">
                    {item}
                  </span>
                ))}
              </div>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-zinc-950 transition hover:gap-3 focus:outline-none focus:ring-2 focus:ring-lime-400 dark:text-stone-50"
              >
                Visit website
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
