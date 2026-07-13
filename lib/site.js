// Single source of truth for site-wide constants.
// Reused by metadata, JSON-LD structured data, sitemap and UI.

// TODO: replace with your real production domain once deployed.
export const siteUrl = "https://sumitsingh.dev";

export const siteConfig = {
  name: "Sumit Singh",
  role: "Senior Frontend Developer",
  title: "Sumit Singh — Senior Frontend Developer",
  shortBio:
    "Senior Frontend Developer with 4+ years building performant, accessible React & Next.js applications and AI-powered SaaS products.",
  description:
    "Portfolio of Sumit Singh, a Senior Frontend Developer with 4+ years of experience specializing in React.js, Next.js, Redux Toolkit, Tailwind CSS, AI SaaS products, frontend architecture and performance optimization.",
  location: "Mumbai, India",
  email: "sumitme1620@gmail.com",
  url: siteUrl,
  keywords: [
    "Sumit Singh",
    "Senior Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Redux Toolkit",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "AI SaaS",
    "Frontend Architecture",
    "Performance Optimization",
    "Frontend Engineer Mumbai",
  ],
  socials: {
    github: "https://github.com/sumitme1620",
    linkedin: "https://www.linkedin.com/in/sumitme1620/",
    twitter: "https://x.com/home", // TODO: replace with your real profile URL
  },
};

// Skills the person is known for — surfaced in JSON-LD `knowsAbout`.
export const knowsAbout = [
  "React.js",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Redux Toolkit",
  "Tailwind CSS",
  "Frontend Architecture",
  "Performance Optimization",
  "AI SaaS Products",
  "Authentication (OAuth, JWT, RBAC)",
  "Real-time Streaming",
  "WebSocket Collaboration",
];
