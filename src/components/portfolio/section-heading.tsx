import { Reveal } from "./reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 max-w-3xl sm:mb-16">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] text-zinc-950 dark:text-stone-50 sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="muted-text mt-5 max-w-2xl text-base leading-8">{description}</p>
      ) : null}
    </Reveal>
  );
}
