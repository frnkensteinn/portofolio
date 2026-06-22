import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import type { ReactNode } from "react";

import { profile } from "~/data/portfolio";

import { Reveal } from "./reveal";

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-zinc-200 bg-white py-24 dark:border-zinc-800 dark:bg-zinc-900 sm:py-32">
      <Reveal className="container-page text-center">
        <p className="eyebrow">04 / Contact</p>
        <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-zinc-950 dark:text-stone-50 sm:text-6xl">
          Need a campus web project built?
        </h2>
        <p className="muted-text mx-auto mt-6 max-w-2xl leading-8">
          Email me or reach out on GitHub and LinkedIn. I am open to event sites, organization pages, and small front-end work.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <ContactLink href={`mailto:${profile.email}`} label="Email" icon={<Mail className="size-4" />} />
          <ContactLink href={profile.github} label="GitHub" icon={<Github className="size-4" />} />
          <ContactLink href={profile.linkedin} label="LinkedIn" icon={<Linkedin className="size-4" />} />
        </div>
      </Reveal>
    </section>
  );
}

function ContactLink({ href, label, icon }: { href: string; label: string; icon: ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="inline-flex items-center justify-between gap-8 rounded border border-zinc-200 bg-stone-50 px-5 py-4 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-400 dark:border-zinc-800 dark:bg-zinc-950"
    >
      <span className="inline-flex items-center gap-2">
        {icon}
        {label}
      </span>
      <ArrowUpRight className="size-4" aria-hidden="true" />
    </a>
  );
}
