export const profile = {
  name: "Ihsan Fadhlih Akbar",
  initials: "I",
  role: "Information Systems and Technology Student",
  headline: "I build event and organization websites, mostly with React, Next.js, and Tailwind CSS.",
  location: "Bandung, Indonesia",
  email: "ihsanfadhlihakbar@gmail.com",
  github: "https://github.com/frnkensteinn",
  linkedin: "https://www.linkedin.com/in/ihsanfa/",
};

export const education = {
  school: "Institut Teknologi Bandung",
  program: "Information Systems and Technology",
  period: "2025 - 2029",
};

export const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "MapLibre GL JS",
  "HTML",
  "CSS",
  "Git",
  "Vitest",
  "Vite",
  "Vercel",
];

export const skillGroups = [
  {
    title: "Front-end",
    items: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "MapLibre GL JS",
      "HTML/CSS",
    ],
  },
  {
    title: "Testing & Tools",
    items: ["Vitest", "Vite", "Git", "GitHub Actions", "Biome", "Vercel"],
  },
  {
    title: "Programming",
    items: ["Python", "C++", "C", "SQL"],
  },
];

export const experiences = [
  {
    title: "Human Resource & Development Staff",
    organization: "Inkubator IT",
    period: "Aug 2026 - Present",
    location: "Bandung, Indonesia",
    description:
      "Recently joined the Human Resource and Development division at Inkubator IT.",
    highlights: [],
  },
  {
    title: "Front-End Developer",
    organization: "OSKM ITB 2026 (KAT ITB)",
    period: "Jul 2026 - Present",
    location: "Bandung, Indonesia",
    description:
      "Developed interactive front-end web features for the official OSKM ITB 2026 Web Portofolio within a 28-engineer monorepo setup.",
    highlights: [
      "Engineered an interactive campus map for ITB Jatinangor using MapLibre GL JS & OpenFreeMap with custom animated building markers, glowing hover states, collapsible legend, and detail sheets.",
      "Implemented real-time geolocation tracking with granular permission error handling (denied, timeout) and smooth camera repositioning.",
      "Built an in-page Day 1 weather forecast overlay with HMME Atmosphaira telemetry metrics and graceful fallback states for missing data.",
      "Adhered to strict automated CI/CD quality gates with Vitest/RTL unit testing, peer code reviews, and Greptile AI review scores ≥ 4/5.",
    ],
  },
  {
    title: "Intern",
    organization: "URO ITB - Ganesis Programming Division",
    period: "May 2026 - Present",
    location: "Bandung, Indonesia",
    description:
      "Learning the programming workflow inside URO ITB's Ganesis division while contributing to robotics-related software tasks.",
    highlights: ["Joining technical discussions and taking small programming assignments from the team."],
  },
  {
    title: "Web Development Explorer",
    organization: "GDGOC ITB",
    period: "May 2026 - Present",
    location: "Bandung, Indonesia",
    description:
      "Following GDGOC ITB web development sessions and applying the material through small front-end exercises.",
    highlights: ["Practicing layout, component structure, and basic web project workflow."],
  },
  {
    title: "IT Staff",
    organization: "PEMIRA KM-ITB 2026",
    period: "Jan 2026 - Mar 2026",
    location: "Bandung, Indonesia",
    description:
      "Helped build front-end sections for the official PEMIRA KM-ITB 2026 website.",
    highlights: ["Worked on interface sections for the election website and received Best IT Staff."],
  },
  {
    title: "HR Staff",
    organization: "The Sandbox 3.0 - IEEE ITB SB",
    period: "Jan 2026 - May 2026",
    location: "Bandung, Indonesia",
    description:
      "Handled staff monitoring and administration for The Sandbox 3.0.",
    highlights: ["Kept staff records organized and helped prepare performance evaluation notes."],
  },
  {
    title: "HR Staff",
    organization: "ZOOM-IN ITB",
    period: "Dec 2025 - Feb 2026",
    location: "Padang, Indonesia",
    description:
      "Managed HR administration, attendance, and performance notes for ZOOM-IN ITB.",
    highlights: ["Helped with post-event reports, Best Staff selection, and certificates."],
  },
  {
    title: "Secretariat Division",
    organization: "Batik Birru 13th",
    period: "Jun 2024 - Nov 2024",
    location: "Padang Panjang, Indonesia",
    description:
      "Built the registration website and helped manage participant data for Batik Birru 13.",
    highlights: ["Helped the event reach 3,056 registrants, the highest in Batik Birru history."],
  },
  {
    title: "Head of Majelis Permusyawaratan Asrama",
    organization: "Majelis Permusyawaratan Asrama",
    period: "Jul 2024 - Jan 2025",
    location: "Padang Panjang, Indonesia",
    description:
      "Led dormitory election processes and leadership handover events.",
    highlights: ["Facilitated the selection and inauguration of the new Dormitory Council Chair."],
  },
  {
    title: "Supervisor of Public Relations and Literary-Cultural Affairs Division",
    organization: "Majelis Permusyawaratan Kelas",
    period: "Dec 2024 - Dec 2025",
    location: "Padang Panjang, Indonesia",
    description:
      "Supervised communication, public relations, and cultural-literary programs.",
    highlights: ["Coordinated announcements, class relations, and student creativity programs."],
  },
];

export const projects = [
  {
    title: "OSKM ITB 2026 - Web Portofolio & Interactive Map",
    type: "Team Project",
    period: "2026",
    href: "https://portofolio-kat.itb.ac.id/",
    description:
      "Built the vector-tile interactive campus map (MapLibre GL JS + OpenFreeMap) and Day-1 weather forecast system for the official ITB orientation website in a high-scale React / TypeScript monorepo.",
    stack: ["React", "TypeScript", "MapLibre GL JS", "Tailwind CSS", "Vite", "Vitest"],
  },
  {
    title: "PEMIRA KM-ITB 2026",
    type: "Team Project",
    period: "2026",
    href: "https://pemirakmitb.com/",
    description:
      "Implemented front-end sections for the KM ITB election site, including navigation, footer components, font setup, and visual asset integration.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Batik Birru 13",
    type: "Independent Project",
    period: "2024",
    href: "https://batikbirru.vercel.app/",
    description:
      "Built the event information and registration website for Batik Birru 13 with Google Forms integration, supporting 3,056 registrants.",
    stack: ["HTML", "Tailwind CSS", "JavaScript", "Google Forms"],
  },
];
