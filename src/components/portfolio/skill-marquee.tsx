import { skills } from "~/data/portfolio";

export function SkillMarquee() {
  const loopedSkills = [...skills, ...skills];

  return (
    <section className="overflow-hidden border-y border-zinc-200 bg-lime-300 py-4 text-zinc-950 dark:border-zinc-800" aria-label="Skill list">
      <div className="flex w-max animate-[marquee_30s_linear_infinite] items-center">
        {loopedSkills.map((skill, index) => (
          <span key={`${skill}-${index}`} className="flex items-center">
            <span className="px-6 font-mono text-xs font-medium uppercase tracking-[0.16em]">{skill}</span>
            <span className="size-1 rounded-full bg-current" aria-hidden="true" />
          </span>
        ))}
      </div>
    </section>
  );
}
