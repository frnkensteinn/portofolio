import { AboutSection } from "~/components/portfolio/about-section";
import { ContactSection } from "~/components/portfolio/contact-section";
import { ExperienceSection } from "~/components/portfolio/experience-section";
import { HeroSection } from "~/components/portfolio/hero-section";
import { ProjectsSection } from "~/components/portfolio/projects-section";
import { SiteFooter } from "~/components/portfolio/site-footer";
import { SiteHeader } from "~/components/portfolio/site-header";
import { SkillMarquee } from "~/components/portfolio/skill-marquee";

export default function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded bg-lime-300 px-4 py-2 text-sm font-semibold text-zinc-950 transition focus:translate-y-0"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <SkillMarquee />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
