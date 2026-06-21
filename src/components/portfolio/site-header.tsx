"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { profile } from "~/data/portfolio";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";
  const themeLabel = mounted && isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/80 bg-stone-50/85 backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-950/85">
      <nav className="container-page flex h-20 items-center justify-between" aria-label="Main navigation">
        <a href="#home" className="flex items-center gap-3 font-semibold" aria-label={`${profile.name} home`}>
          <span className="grid size-10 place-items-center rounded bg-zinc-950 font-mono text-xs text-lime-300 dark:bg-lime-300 dark:text-zinc-950">
            {profile.initials}
          </span>
          <span className="hidden text-sm sm:inline">{profile.name}</span>
        </a>

        <div
          className={`absolute inset-x-4 top-24 rounded border border-zinc-200 bg-stone-50 p-4 shadow-xl dark:border-zinc-800 dark:bg-zinc-950 md:static md:flex md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none dark:md:bg-transparent ${
            isOpen ? "block" : "hidden md:flex"
          }`}
          id="site-menu"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block rounded px-3 py-3 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-lime-400 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-stone-50 md:px-0 md:py-0 md:hover:bg-transparent dark:md:hover:bg-transparent"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="grid size-10 place-items-center rounded border border-zinc-200 text-zinc-700 transition hover:border-lime-500 hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-lime-400 dark:border-zinc-800 dark:text-zinc-300 dark:hover:text-stone-50"
            aria-label={themeLabel}
            onClick={() => setTheme(isDark ? "light" : "dark")}
          >
            {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <button
            type="button"
            className="grid size-10 place-items-center rounded border border-zinc-200 text-zinc-700 focus:outline-none focus:ring-2 focus:ring-lime-400 dark:border-zinc-800 dark:text-zinc-300 md:hidden"
            aria-expanded={isOpen}
            aria-controls="site-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>
    </header>
  );
}
