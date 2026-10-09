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
    banner: "/images/projects/Secure2FA.webp",
    name: "Codzy",
    desc: "LeetCode-style online judge & coding platform. Features 50+ DSA problems, real-time code execution across 3+ languages via Judge0 API, WebSocket collaborative study rooms, Google Generative AI assistant for hints, and Cloudinary CDN optimization.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "WebSocket", "Judge0", "JWT", "Tailwind CSS"],
    github: "https://github.com/Adarshhic/codzy",
    live: "https://github.com/Adarshhic/codzy",
    stats: "50+ Problems | Real-Time Execution",
    hasSponsor: true,
  },
  {
    banner: "/images/projects/ui-bristohq-landingPage.webp",
    name: "AI Customer Support Chatbot SaaS",
    desc: "Full-stack multi-tenant SaaS platform that lets any website embed an AI-powered customer support chatbot via a single script tag. Powered by Gemini API, Scalekit org authentication, and MongoDB conversation storage.",
    tech: ["Next.js", "MongoDB", "Scalekit", "Gemini API", "Vercel", "Tailwind CSS"],
    github: "https://github.com/Adarshhic",
    live: "https://github.com/Adarshhic",
    stats: "Multi-Tenant SaaS | Gemini AI",
    hasSponsor: true,
  },
  {
    banner: "/images/projects/BlogZone.webp",
    name: "Second Brain",
    desc: "Personal knowledge management web app. Save, tag, and organize YouTube videos, tweets, and articles. Features shareable public brain via unique hash URLs with Zod schema validation and bcrypt auth.",
    tech: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "JWT", "Zod", "Tailwind CSS"],
    github: "https://github.com/Adarshhic/second-brain",
    live: "https://github.com/Adarshhic/second-brain",
    stats: "Full-Stack Knowledge Base",
  },
  {
    banner: "/images/projects/manishPortfoliov2.webp",
    name: "Modern Portfolio",
    desc: "High-performance developer portfolio built with Next.js 16, React 19, and Tailwind CSS. Features dynamic particle canvas effects, GitHub activity heatmap, and interactive subpages.",
    tech: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Canvas"],
    github: "https://github.com/Adarshhic/Portfolio",
    live: "/",
    stats: "Next.js 16 + React 19",
  },
];

export const MORE_PROJECTS: ProjectData[] = [
  {
    banner: "/images/projects/mxicons.webp",
    name: "DevConnect Real-Time",
    desc: "Developer collaboration & networking platform. Room-based live synchronization with WebSockets, instant markdown code sharing, and secure authentication.",
    tech: ["React.js", "TypeScript", "Node.js", "Express.js", "WebSocket", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Adarshhic",
    live: "https://github.com/Adarshhic",
    stats: "Real-Time Collaboration",
  },
  {
    banner: "/images/projects/quickrefme-clone.webp",
    name: "200+ DSA Algorithms Suite",
    desc: "Comprehensive collection of competitive programming solutions, optimized data structures, and algorithms solved across LeetCode and GeeksforGeeks.",
    tech: ["Java", "JavaScript", "Algorithms", "Data Structures", "Dynamic Programming"],
    github: "https://github.com/Adarshhic",
    live: "https://github.com/Adarshhic",
    stats: "200+ Solved",
  },
];

export const ALL_PROJECTS: ProjectData[] = [...FEATURED_PROJECTS, ...MORE_PROJECTS];
