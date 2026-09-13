import type { TagItem } from "../types/tagTypes";

const frameworkTags = {
  react: { text: "React", variant: "tech", group: "frameworks" },
  nextjs: {
    text: "Next.js",
    variant: "tech",
    group: "frameworks",
  },
  rrv7: {
    text: "React Router v7",
    variant: "tech",
    group: "frameworks",
  },
} as const satisfies Record<string, TagItem>;

const languageTags = {
  javascript: {
    text: "JavaScript",
    variant: "tech",
    group: "languages",
  },
  typescript: {
    text: "TypeScript",
    variant: "tech",
    group: "languages",
  },
  python: {
    text: "Python",
    variant: "tech",
    group: "languages",
  },
  java: {
    text: "Java",
    variant: "tech",
    group: "languages",
  },
  c: {
    text: "C / C++",
    variant: "tech",
    group: "languages",
  },
  html: {
    text: "HTML",
    variant: "tech",
    group: "languages",
  },
  bash: {
    text: "Bash",
    variant: "tech",
    group: "languages",
  },
} as const satisfies Record<string, TagItem>;

const cssTags = {
  tailwind: {
    text: "Tailwind",
    variant: "tech",
    group: "css",
  },
  bootstrap: {
    text: "Bootstrap",
    variant: "tech",
    group: "css",
  },
  css: { text: "CSS", variant: "tech", group: "css" },
  scss: { text: "SCSS", variant: "tech", group: "css" },
  sql: {
    text: "SQL",
    variant: "tech",
    group: "misc",
  },
} as const satisfies Record<string, TagItem>;

const backendTags = {
  nodejs: { text: "Node.js", variant: "tech", group: "backend" },
  apiIntegration: {
    text: "API Integration",
    variant: "topic",
    group: "backend",
  },
} as const satisfies Record<string, TagItem>;

const versionControlTags = {
  git: { text: "Git", variant: "tool", group: "version control" },
  github: {
    text: "GitHub",
    variant: "tool",
    group: "version control",
  },
} as const satisfies Record<string, TagItem>;

const hardwareTags = {
  arduino: {
    text: "Arduino",
    variant: "tech",
    group: "hardware",
  },
} as const satisfies Record<string, TagItem>;

const miscTags = {
  markdown: {
    text: "Markdown",
    variant: "tech",
    group: "misc",
  },
  vite: {
    text: "Vite",
    variant: "tech",
    group: "misc",
  },
} as const satisfies Record<string, TagItem>;

const toolTags = {
  figma: { text: "Figma", variant: "tool", group: "tool" },
  vscode: {
    text: "Visual Studio Code",
    variant: "tool",
    group: "tool",
  },
  ghActions: {
    text: "GitHub Actions",
    variant: "tool",
    group: "tool",
  },
  storybook: {
    text: "Storybook",
    variant: "tool",
    group: "tool",
  },
  jest: { text: "Jest", variant: "tool", group: "tool" },
  jira: { text: "JIRA", variant: "tool", group: "tool" },
  confluence: {
    text: "Confluence",
    variant: "tool",
    group: "tool",
  },
  slack: { text: "Slack", variant: "tool", group: "tool" },
  teams: {
    text: "Microsoft Teams",
    variant: "tool",
    group: "tool",
  },
  postman: {
    text: "Postman",
    variant: "tool",
    group: "tool",
  },
  voiceover: {
    text: "VoiceOver",
    variant: "tool",
    group: "tool",
  },
  trello: {
    text: "Trello",
    variant: "tool",
    group: "tool",
  },
  claudeCode: {
    text: "Claude Code",
    variant: "tool",
    group: "tool",
  },
  terminal: {
    text: "Terminal",
    variant: "tool",
    group: "tool",
  },
  cmux: {
    text: "cmux",
    variant: "tool",
    group: "tool",
  },
  obsidian: {
    text: "Obsidian",
    variant: "tool",
    group: "tool",
  },
  ohMyZsh: {
    text: "Oh My Zsh",
    variant: "tool",
    group: "tool",
  },
  biome: {
    text: "Biome",
    variant: "tool",
    group: "tool",
  },
} as const satisfies Record<string, TagItem>;

const aiTags = {
  copilot: {
    text: "GitHub Copilot",
    variant: "tool",
    group: "ai",
  },
  promptEngineering: {
    text: "Prompt Engineering",
    variant: "topic",
    group: "ai",
  },
} as const satisfies Record<string, TagItem>;

const interpersonalTags = {
  projectManagement: {
    text: "Project Management",
    variant: "human",
    group: "interpersonal",
  },
  bugHunting: {
    text: "Bug Hunting",
    variant: "topic",
    group: "interpersonal",
  },
  bugFixing: {
    text: "Bug Fixing",
    variant: "topic",
    group: "interpersonal",
  },
  codeReview: {
    text: "Code Review",
    variant: "topic",
    group: "interpersonal",
  },
  designSystems: {
    text: "Design Systems",
    variant: "topic",
    group: "interpersonal",
  },
  ui: {
    text: "User Interface",
    variant: "topic",
    group: "interpersonal",
  },
  ux: {
    text: "User Experience",
    variant: "topic",
    group: "interpersonal",
  },
  prototyping: {
    text: "Prototyping",
    variant: "topic",
    group: "interpersonal",
  },
  documentation: {
    text: "Documentation",
    variant: "topic",
    group: "interpersonal",
  },
  empathy: { text: "Empathy", variant: "human", group: "interpersonal" },
  crossFunctionalCollaboration: {
    text: "Cross-Functional Collaboration",
    variant: "human",
    group: "interpersonal",
  },
  crossCompanyCollaboration: {
    text: "Cross-Company Collaboration",
    variant: "human",
    group: "interpersonal",
  },
} as const satisfies Record<string, TagItem>;

const softSkillTags = {
  teamwork: {
    text: "Teamwork",
    variant: "human",
    group: "soft",
  },
  problemSolving: {
    text: "Problem Solving",
    variant: "human",
    group: "soft",
  },
  adaptability: {
    text: "Adaptability",
    variant: "human",
    group: "soft",
  },
  mentorship: {
    text: "Mentorship",
    variant: "human",
    group: "soft",
  },
  communication: {
    text: "Communication",
    variant: "human",
    group: "soft",
  },
  passionate: { text: "Passionate", variant: "human", group: "soft" },
  continuousLearning: {
    text: "Continuous Learning",
    variant: "human",
    group: "soft",
  },
} as const satisfies Record<string, TagItem>;

const topicTags = {
  seo: { text: "SEO", variant: "topic", group: "topic" },
  accessibility: {
    text: "Accessibility",
    variant: "topic",
    group: "topic",
  },
  wcag: {
    text: "WCAG 2.1 / 2.2",
    variant: "topic",
    group: "topic",
  },
  genai: { text: "GenAI", variant: "topic", group: "ai" },
  gameDesign: {
    text: "Game Design",
    variant: "topic",
    group: "topic",
  },
  gameDevelopment: {
    text: "Game Development",
    variant: "topic",
    group: "topic",
  },
  gameTesting: {
    text: "Game Testing",
    variant: "topic",
    group: "topic",
  },
  webDevelopment: {
    text: "Web Development",
    variant: "topic",
    group: "topic",
  },
  educationTech: {
    text: "Educational Tech",
    variant: "topic",
    group: "topic",
  },
} as const satisfies Record<string, TagItem>;

export const hobbyTags: Record<string, TagItem> = {
  legos: {
    text: "LEGOs",
    variant: "hobby",
    group: "hobby",
  },
  gardening: {
    text: "Gardening",
    variant: "hobby",
    group: "hobby",
  },
  videoGames: {
    text: "Video Games",
    variant: "hobby",
    group: "hobby",
  },
  nature: {
    text: "Nature",
    variant: "hobby",
    group: "hobby",
  },
  cooking: {
    text: "Cooking",
    variant: "hobby",
    group: "hobby",
  },
  reading: {
    text: "Reading",
    variant: "hobby",
    group: "hobby",
  },
  photography: {
    text: "Photography",
    variant: "hobby",
    group: "hobby",
  },
};

export const mediaTags: Record<string, TagItem> = {
  houseOfLeaves: {
    text: "House of Leaves",
    variant: "hobby",
    group: "hobby",
  },
  mrBlueSky: {
    text: "Mr Blue Sky",
    variant: "hobby",
    group: "hobby",
  },
  starless: {
    text: "Starless",
    variant: "hobby",
    group: "hobby",
  },
  electricState: {
    text: "The Electric State",
    variant: "hobby",
    group: "hobby",
  },
  minecraft: {
    text: "Minecraft",
    variant: "hobby",
    group: "hobby",
  },
  cyberpunk: {
    text: "Cyberpunk 2077",
    variant: "hobby",
    group: "hobby",
  },
};

export const TAGS = {
  ...frameworkTags,
  ...languageTags,
  ...cssTags,
  ...backendTags,
  ...versionControlTags,
  ...hardwareTags,
  ...miscTags,
  ...toolTags,
  ...aiTags,
  ...softSkillTags,
  ...interpersonalTags,
  ...topicTags,
} as const satisfies Record<string, TagItem>;
