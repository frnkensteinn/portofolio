import { education, profile, skillGroups } from "~/data/portfolio";

import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function AboutSection() {
  return (
    <section id="about" className="container-page section-pad">
      <SectionHeading
        eyebrow="01 / About"
        title="Front-end, campus work, and the details in between."
        description={profile.summary}
      />
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal className="space-y-5 text-base leading-8 text-zinc-600 dark:text-zinc-400">
          <p>
            I spend most of my time turning designs and event needs into websites that are clear, responsive, and easy to maintain.
          </p>
          <p>
            I study {education.program} at {education.school}, and I keep learning through real projects with real users.
          </p>
        </Reveal>

        <Reveal className="overflow-hidden rounded border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
          <InfoRow label="Education" title={education.school} detail={`${education.program} - ${education.period}`} />
          <InfoRow label="Focus" title="Front-end Development" detail="Responsive web, UI implementation, accessibility basics" />
          <InfoRow label="Location" title={profile.location} detail="Open to project and organization work" />
          {skillGroups.map((group) => (
            <InfoRow key={group.title} label={group.title} title={group.items.join(", ")} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function InfoRow({ label, title, detail }: { label: string; title: string; detail?: string }) {
  return (
    <div className="grid gap-2 border-b border-zinc-200 p-5 last:border-b-0 dark:border-zinc-800 sm:grid-cols-[0.35fr_1fr] sm:gap-6">
      <span className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-500">{label}</span>
      <div>
        <p className="font-semibold text-zinc-950 dark:text-stone-50">{title}</p>
        {detail ? <p className="mt-1 text-sm text-zinc-500">{detail}</p> : null}
      </div>
    </div>
  );
}
