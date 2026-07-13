import user_dark_image from "./user-dark-image.png";
import user_light_image from "./user-light-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import github from "./gitHub.png";
import figma from "./figma.png";
import git from "./git.png";
import slack from "./slack.png";
import vercel from "./vercel.png";
import Chrome_DevTools from "./Chrome_DevTools.png";
import chatGpt from "./chatGpt.png";
import claude from "./claude.png";
import GitHub_Copilot from "./GitHub_Copilot.png";
import plane from "./plane.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo_light.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import send_icon from "./send-icon.png";

export const assets = {
  user_dark_image,
  user_light_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  github,
  figma,
  git,
  slack,
  vercel,
  Chrome_DevTools,
  chatGpt,
  claude,
  GitHub_Copilot,
  plane,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  download_icon,
  hand_icon,
  header_bg_color,
  send_icon,
};

// --- Navigation ------------------------------------------------------------
export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

// --- About quick-info cards ------------------------------------------------
export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Tech Stack",
    description:
      "React.js, Next.js, TypeScript, JavaScript (ES6+), Redux Toolkit, Tailwind CSS",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "B.Tech in Mechanical Engineering",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Focus",
    description:
      "AI SaaS Platforms, Developer Platforms, Frontend Architecture, Performance Engineering",
  },
];

// --- Skills / Tech stack ---------------------------------------------------
// Grouped skills the user explicitly works with. Rendered by components/Skills.jsx,
// which maps known names to inline brand SVGs.
export const skillsData = [
  {
    category: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Python"],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "Context API",
      "React Router",
      "Axios",
      "Zustand",
    ],
  },

  {
    category: "Styling & UI",
    skills: [
      "Tailwind CSS",
      "Material UI",
      "Shadcn/UI",
      "Radix UI",
      "Framer Motion",
      "Responsive Design",
      "Accessibility",
    ],
  },
  {
    category: "Architecture & Practices",
    skills: [
      "Frontend Architecture",
      "Performance Optimization",
      "Authentication (OAuth, JWT, RBAC)",
      "Real-time Streaming",
      "WebSocket Collaboration",
      "SEO",
      "Core Web Vitals",
    ],
  },
  {
    category: "Tooling & Workflow",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "Chrome DevTools",
      "Postman",
      "Jira",
      "Vercel",
      "plane",
      "ChatGPT",
      "Claude",
      "GitHub Copilot",
    ],
  },
];

// Tool logos reused in the Skills section.
export const toolsData = [
  assets.vscode,
  assets.slack,
  assets.figma,
  assets.git,
  assets.github,
  assets.Chrome_DevTools,
  assets.plane,
  assets.vercel,
  assets.chatGpt,
  assets.claude,
  assets.GitHub_Copilot,
];

// --- Experience --------------------------------------------
export const experienceData = [
  {
    company: "169Pi — BuddhiMatrix Pvt. Ltd.",
    role: "Senior Frontend Developer",
    period: "Nov 2024 – Present",
    location: "Mumbai, India",
    summary:
      "Leading frontend development for the 169Pi Developer Platform and Alpie AI, building scalable AI SaaS products, developer tools, secure authentication systems, and high-performance user experiences from concept to production.",
    highlights: [
      "Led frontend development of the 169Pi Developer Platform from scratch to production, building authentication, API dashboard, billing, documentation, AI Playground, and developer workflows.",

      "Designed and developed key frontend features for Alpie AI including AI chat, Deep Research, real-time streaming, collaboration workspaces, document workflows, and reusable component architecture.",

      "Built secure cross-domain authentication using OAuth 2.0, JWT, RBAC, Google Sign-In, Apple Sign-In, and OTP authentication between 169pi.com and playground.169pi.ai.",

      "Improved page-load performance by 35–40% using lazy loading, code splitting, React memoization, optimized Redux state management, and Core Web Vitals optimization.",

      "Led and mentored a team of 4 frontend developers through code reviews, architecture discussions, and frontend best practices while maintaining production quality.",
    ],
    current: true,
  },
  {
    company: "StartUpodero Ventures Pvt. Ltd.",
    role: "Frontend Developer",
    period: "Jul 2022 – Nov 2024",
    location: "Hyderabad, India",
    summary:
      "Built scalable React.js applications across education, travel, and business domains, transforming Figma designs into reusable, responsive, and high-performance frontend applications.",
    highlights: [
      "Developed and maintained React.js applications for education, travel, and business products.",

      "Converted 20+ Figma designs into pixel-perfect, reusable React components using Tailwind CSS and Material UI.",

      "Improved Lighthouse scores from 62 to 85+ through image optimization, API optimization, render-cycle improvements, and bundle optimization.",

      "Integrated REST APIs, implemented reusable component architecture, and collaborated closely with designers and backend engineers to deliver production-ready features.",
    ],
    current: false,
  },
];

// --- Projects --------------------------------------------------------------

export const workData = [
  {
    title: "Alpie AI",
    description: "AI chat & deep research platform",
    bgImage: "/work-1.png",
    link: "https://alpie.ai/",
    role: "Senior Frontend Developer",
    stack: ["Next.js", "React", "Real-time Streaming", "Tailwind CSS"],
  },
  {
    title: "169Pi Official Website",
    description: "Discover enterprise AI solutions",
    bgImage: "/work-2.png",
    link: "https://169pi.ai/",
    role: "Senior Frontend Developer",
    stack: ["Next.js", "React", "Redux Toolkit", "Tailwind CSS", "WebSocket"],
  },

  {
    title: "169Pi Developer Platform",
    description: "Build, test & manage AI APIs",
    bgImage: "/work-3.png",
    link: "https://playground.169pi.ai/",
    role: "Senior Frontend Developer",
    stack: ["Next.js", "React", "Tailwind CSS", "SEO"],
  },
  {
    title: "ISRO Space Agent",
    description: "AI-powered space assistant",
    bgImage: "/work-4.png",
    link: "https://isrospaceagent.com/",
    role: "Senior Frontend Developer",
    stack: ["Next.js", "React", "Tailwind CSS", "SEO"],
  },
  {
    title: "PDF Agent",
    description: "Chat with your PDF documents",
    bgImage: "/work-5.png",
    link: "https://gyaanagent.com/",
    role: "Senior Frontend Developer",
    stack: ["Next.js", "React", "Tailwind CSS", "SEO"],
  },
  {
    title: "Film-Verse",
    description: "Movie discovery platform",
    bgImage: "/work-6.png",
    link: "https://film-verse-beta.vercel.app/",
  },
  {
    title: "Shras Holidays",
    description: "Travel made easy",
    bgImage: "/work-7.png",
    link: "https://shrasholidays.com/",
  },
  {
    title: "TSBridge Edu",
    description: "Education platform",
    bgImage: "/work-8.png",
    link: "https://tsbridgeedu.in/",
  },

  {
    title: "InfluensarHut",
    description: "Influencer marketing platform",
    bgImage: "/work-9.jpeg",
    link: "https://influensarhut.com/",
  },
];
