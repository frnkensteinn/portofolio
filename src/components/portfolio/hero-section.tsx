import { ArrowDown, ArrowUpRight } from "lucide-react";

import { education, profile } from "~/data/portfolio";

import { Reveal } from "./reveal";

export function HeroSection() {
  return (
    <section id="home" className="container-page grid min-h-screen items-center gap-14 pb-20 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:pt-24">
      <Reveal>
        <p className="eyebrow">Portfolio / Front-end Developer</p>
        <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-zinc-950 dark:text-stone-50 sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>
        <p className="muted-text mt-7 max-w-2xl text-lg leading-8">{profile.headline}</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-3 rounded bg-zinc-950 px-5 py-3 text-sm font-semibold text-stone-50 transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-lime-400 dark:bg-lime-300 dark:text-zinc-950"
          >
            View Projects
            <ArrowDown className="size-4" aria-hidden="true" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-400 dark:border-zinc-800 dark:bg-zinc-900"
          >
            GitHub
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </Reveal>

      <Reveal className="relative">
        <div className="rounded border border-zinc-200 bg-white p-5 shadow-2xl shadow-zinc-950/10 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/30">
          <div className="flex items-center justify-between border-b border-zinc-200 pb-4 dark:border-zinc-800">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="size-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
              <span className="size-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
              <span className="size-2 rounded-full bg-lime-400" />
            </div>
            <span className="font-mono text-xs text-zinc-500">portfolio.ts</span>
          </div>
          <div className="space-y-4 py-8 font-mono text-sm leading-7 text-zinc-600 dark:text-zinc-300">
            <p>
              <span className="text-lime-700 dark:text-lime-300">const</span> developer = {"{"}
            </p>
            <p className="pl-5">{`name: "${profile.name}",`}</p>
            <p className="pl-5">{`school: "${education.school}",`}</p>
            <p className="pl-5">{`focus: "responsive web interfaces",`}</p>
            <p className="pl-5">{`stack: ["Next.js", "TypeScript", "Tailwind CSS"],`}</p>
            <p>{"};"}</p>
          </div>
        </div>
        <div className="absolute -bottom-5 left-5 rounded border border-zinc-200 bg-stone-50 px-4 py-3 text-sm font-semibold shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
          {profile.role}
        </div>
      </Reveal>
    </section>
  );
}
