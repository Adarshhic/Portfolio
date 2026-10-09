export interface ProjectData {
  banner: string;
  name: string;
  desc: string;
  tech: string[];
  github: string;
  live?: string;
  demoWarning?: boolean;
  isUnderDevelopment?: boolean;
  isPrivate?: boolean;
  stats?: string;
  hasSponsor?: boolean;
}

export const FEATURED_PROJECTS: ProjectData[] = [
  {
    banner: "https://ossium.in/demo/oss_og-toposspage.png",
    name: "Ossium",
    desc: "Search for OSS projects with unmatched speed and precision. Eliminate noise to find the best open-source solutions. Manage your PRs/Issues in one place.",
    tech: ["TypeScript", "Nextjs", "PostgreSQL", "Drizzle", "Tailwind", "Github APIs"],
    github: "https://github.com/mxCorpIn/",
    live: "https://ossium.in",
    isPrivate: true,
    stats: "1200+ signups",
    hasSponsor: true,
  },
  {
    banner: "/images/projects/mxicons.webp",
    name: "Mx Icons",
    desc: "Open source | Beautiful icons For React project. A modern, lightweight React icon library with beautiful SVG icons Built with React • Optimized for Production",
    tech: ["JavaScript", "React", "Svg", "Rollup.js", "Vite", "NPM"],
    github: "https://github.com/ig-imanish/mx-icons",
    live: "https://mx-icons.vercel.app",
    stats: "4k+ downloads | 110+ Stars",
    hasSponsor: true,
  },
  {
    banner: "/images/projects/Secure2FA.webp",
    name: "Secure2FA",
    desc: "A robust two-factor authentication system implementing Time-based One-Time Password (TOTP) for enhanced application security.",
    tech: ["JavaScript", "React", "Node.js", "MongoDB", "Java", "SpringBoot", "Spring Security"],
    github: "https://github.com/ig-imanish/Secure2FA",
    live: "https://secure2fa-landingpage.netlify.app/",
    demoWarning: true,
  },
  {
    banner: "/images/projects/BlogZone.webp",
    name: "BlogZone",
    desc: "About Blog Zone Blog Zone is a modern platform designed to empower writers, bloggers, and content creators to share their stories with the world.",
    tech: ["Html", "CSS", "JavaScript", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/ig-imanish/BlogZone-Clg-project",
    live: "https://blogzone-clg.netlify.app/",
  },
];

export const MORE_PROJECTS: ProjectData[] = [
  {
    banner: "/images/projects/ui-bristohq-landingPage.webp",
    name: "BristoHQ-Ui",
    desc: "BristoHQ-Ui is a set of beautifully designed components that you can customize, extend, and build on. Start here then make it your own. Open Source. Open Code.",
    tech: ["React", "TypeScript", "CSS", "Vite"],
    github: "https://github.com/ig-imanish/bristohq-ui-page",
    live: "https://ui.bristohq.me/",
    isUnderDevelopment: true,
  },
  {
    banner: "/images/projects/manishPortfoliov2.webp",
    name: "Portfolio-v2",
    desc: "Portfolio-v2 is a responsive personal portfolio website showcasing about me, my educations, my projects, skills, and experience.",
    tech: ["Html", "CSS", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/ig-imanish/ig-imanish.github.io/tree/v2-portfolio",
    live: "https://imanish.netlify.app/",
  },
  {
    banner: "/images/projects/quickrefme-clone.webp",
    name: "QuickRef Ui Clone",
    desc: "QuickRefMe is a productivity tool designed to help developers quickly access code snippets, documentation, and other resources.",
    tech: ["React", "JavaScript", "CSS", "Tailwind CSS", "Vite"],
    github: "https://github.com/ig-imanish/QuickRef-React-clone",
    live: "https://quickref.netlify.app/",
  },
  {
    banner: "/images/projects/BlogZone-v1.webp",
    name: "BlogZone-v1",
    desc: "BlogZone-v1 is a modern platform designed to empower writers, bloggers, and content creators to share their stories with the world.",
    tech: ["Html", "CSS", "Thymeleaf", "Java", "SpringBoot", "Spring Security", "MongoDB"],
    github: "https://github.com/ig-imanish/BlogZone",
  },
];

export const ALL_PROJECTS: ProjectData[] = [...FEATURED_PROJECTS, ...MORE_PROJECTS];
