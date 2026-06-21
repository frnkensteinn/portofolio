import { profile } from "~/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="container-page flex flex-col gap-3 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright {new Date().getFullYear()} {profile.name}</p>
        <a href="#home" className="font-semibold text-zinc-700 transition hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-stone-50">
          Back to top
        </a>
      </div>
    </footer>
  );
}
