import { experiences } from "~/data/portfolio";

import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function ExperienceSection() {
  return (
    <section id="experience" className="border-y border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
      <div className="container-page section-pad">
        <SectionHeading
          eyebrow="02 / Experience"
          title="Roles where I learned by doing."
          description="A mix of web work, organization roles, and leadership responsibilities from campus and school activities."
        />
        <div className="border-t border-zinc-200 dark:border-zinc-800">
          {experiences.map((experience) => (
            <Reveal
              key={`${experience.title}-${experience.organization}`}
              className="grid gap-4 border-b border-zinc-200 py-7 dark:border-zinc-800 md:grid-cols-[0.35fr_0.45fr_1fr] md:gap-8"
            >
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-lime-700 dark:text-lime-300">{experience.period}</p>
              <div>
                <h3 className="font-semibold text-zinc-950 dark:text-stone-50">{experience.title}</h3>
                <p className="mt-1 text-sm text-zinc-500">{experience.organization}</p>
                <p className="mt-1 text-xs text-zinc-500">{experience.location}</p>
              </div>
              <div className="space-y-4">
                <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">{experience.description}</p>
                <ul className="space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-lime-500" aria-hidden="true" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
