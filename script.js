const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const themeColor = document.querySelector('meta[name="theme-color"]');
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const header = document.querySelector(".site-header");

const preferredTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");

function applyTheme(theme) {
  root.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
  const isDark = theme === "dark";
  themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  themeColor.setAttribute("content", isDark ? "#10100f" : "#f3f1e9");
}

applyTheme(preferredTheme);

themeToggle.addEventListener("click", () => {
  applyTheme(root.classList.contains("dark") ? "light" : "dark");
});

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
  navLinks.classList.toggle("mobile-open", !isOpen);
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("mobile-open");
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const sections = document.querySelectorAll("main section[id]");
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.querySelectorAll("a").forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-35% 0px -55% 0px" },
);

sections.forEach((section) => sectionObserver.observe(section));

window.addEventListener(
  "scroll",
  () => header.classList.toggle("scrolled", window.scrollY > 20),
  { passive: true },
);

document.getElementById("year").textContent = new Date().getFullYear();
