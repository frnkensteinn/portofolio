import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

import { ThemeProvider } from "~/components/portfolio/theme-provider";
import { siteUrl } from "~/data/site";
import "~/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ihsan Fadhlih Akbar | Portfolio",
    template: "%s | Ihsan Fadhlih Akbar",
  },
  description:
    "Portfolio of Ihsan Fadhlih Akbar, an ITB Information Systems and Technology student building front-end websites for campus events and organizations.",
  authors: [{ name: "Ihsan Fadhlih Akbar" }],
  creator: "Ihsan Fadhlih Akbar",
  keywords: [
    "Ihsan Fadhlih Akbar",
    "Portfolio",
    "Frontend Developer",
    "Next.js",
    "React",
    "Institut Teknologi Bandung",
  ],
  openGraph: {
    title: "Ihsan Fadhlih Akbar | Portfolio",
    description:
      "Event websites and organization work by Ihsan Fadhlih Akbar, an IST student at ITB.",
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ihsan Fadhlih Akbar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ihsan Fadhlih Akbar | Portfolio",
    description:
      "Front-end websites for campus events, organizations, and registration flows.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen bg-stone-50 font-sans text-zinc-950 antialiased transition-colors dark:bg-zinc-950 dark:text-stone-50">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
