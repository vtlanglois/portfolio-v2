import type { TagItem } from "../types/tagTypes";

const frameworkTags = {
  react: { text: "React", variant: "tech", icon: "atom", group: "frameworks" },
  nextjs: {
    text: "Next.js",
    variant: "tech",
    icon: "atom",
    group: "frameworks",
  },
} as const satisfies Record<string, TagItem>;

const languageTags = {
  javascript: {
    text: "JavaScript",
    variant: "tech",
    icon: "file-code",
    group: "languages",
  },
  typescript: {
    text: "TypeScript",
    variant: "tech",
    icon: "file-code",
    group: "languages",
  },
  python: {
    text: "Python",
    variant: "tech",
    icon: "file-code",
    group: "languages",
  },
  java: {
    text: "Java",
    variant: "tech",
    icon: "file-code",
    group: "languages",
  },
  c: { text: "C", variant: "tech", icon: "file-code", group: "languages" },
  html: {
    text: "HTML",
    variant: "tech",
    icon: "file-code",
    group: "languages",
  },
  semanticHtml: {
    text: "Semantic HTML",
    variant: "tech",
    icon: "a11y",
    group: "languages",
  },
} as const satisfies Record<string, TagItem>;

const cssTags = {
  tailwind: {
    text: "Tailwind",
    variant: "tech",
    icon: "palette",
    group: "css",
  },
  bootstrap: {
    text: "Bootstrap",
    variant: "tech",
    icon: "palette",
    group: "css",
  },
  css: { text: "CSS", variant: "tech", icon: "file-code", group: "css" },
  scss: { text: "SCSS", variant: "tech", icon: "file-code", group: "css" },
  sql: {
    text: "SQL",
    variant: "tech",
    icon: "db",
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
  git: { text: "Git", variant: "tool", icon: "git", group: "version control" },
  github: {
    text: "GitHub",
    variant: "tool",
    icon: "github",
    group: "version control",
  },
} as const satisfies Record<string, TagItem>;

const hardwareTags = {
  arduino: {
    text: "Arduino",
    variant: "tech",
    group: "hardware",
    icon: "circuit",
  },
} as const satisfies Record<string, TagItem>;;

const miscTags = {
  markdown: {
    text: "Markdown",
    variant: "tech",
    group: "misc",
    icon: "file-code",
  },
} as const satisfies Record<string, TagItem>;;

const toolTags = {
  figma: { text: "Figma", variant: "tool", icon: "figma", group: "tool" },
  vscode: {
    text: "Visual Studio Code",
    variant: "tool",
    group: "tool",
  },
  storybook: {
    text: "Storybook",
    variant: "tool",
    icon: "file-code",
    group: "tool",
  },
  jest: { text: "Jest", variant: "tool", icon: "file-code", group: "tool" },
  jira: { text: "JIRA", variant: "tool", group: "tool", icon: "browser" },
  confluence: {
    text: "Confluence",
    variant: "tool",
    group: "tool",
    icon: "browser",
  },
  slack: { text: "Slack", variant: "tool", group: "tool", icon: "browser" },
  teams: {
    text: "Microsoft Teams",
    variant: "tool",
    group: "tool",
    icon: "browser",
  },
  postman: {
    text: "Postman",
    variant: "tool",
    group: "tool",
    icon: "browser",
  },
  voiceover: {
    text: "VoiceOver",
    variant: "tool",
    group: "tool",
    icon: "a11y",
  },
  trello: {
    text: "Trello",
    variant: "tool",
    group: "tool",
  },
  prettier: {
    text: "Prettier",
    variant: "tool",
    group: "tool",
  },
  npm: {
    text: "npm",
    variant: "tool",
    group: "tool",
  },
} as const satisfies Record<string, TagItem>;;

const aiTags = {
  copilot: {
    text: "GitHub Copilot",
    variant: "tool",
    icon: "robot",
    group: "ai",
  },
  promptEngineering: {
    text: "Prompt Engineering",
    variant: "topic",
    icon: "robot",
    group: "ai",
  },
} as const satisfies Record<string, TagItem>;

const interpersonalTags = {
  projectManagement: {
    text: "Project Management",
    variant: "human",
    group: "interpersonal",
    icon: "users",
  },
  bugHunting: {
    text: "Bug Hunting",
    variant: "topic",
    group: "interpersonal",
    icon: "bug",
  },
  bugFixing: {
    text: "Bug Fixing",
    variant: "topic",
    group: "interpersonal",
    icon: "bug",
  },
  codeReview: {
    text: "Code Review",
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
    icon: "users",
  },
  crossCompanyCollaboration: {
    text: "Cross-Company Collaboration",
    variant: "human",
    group: "interpersonal",
    icon: "users",
  },
} as const satisfies Record<string, TagItem>;

const softSkillTags = {
  teamwork: {
    text: "Teamwork",
    variant: "human",
    group: "soft",
    icon: "users",
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
    icon: "users",
  },
  communication: {
    text: "Communication",
    variant: "human",
    group: "soft",
    icon: "users",
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
    icon: "a11y",
    group: "topic",
  },
  wcag: { text: "WCAG", variant: "topic", icon: "a11y", group: "topic" },
  genai: { text: "GenAI", variant: "topic", icon: "robot", group: "ai" },
  gameDesign: {
    text: "Game Design",
    variant: "topic",
    group: "topic",
    icon: "palette",
  },
  gameDevelopment: {
    text: "Game Development",
    variant: "topic",
    group: "topic",
    icon: "controller",
  },
  gameTesting: {
    text: "Game Testing",
    variant: "topic",
    group: "topic",
    icon: "bug",
  },
  webDevelopment: {
    text: "Web Development",
    variant: "topic",
    icon: "atom",
    group: "topic",
  },
  educationTech: {
    text: "Educational Tech",
    variant: "topic",
    icon: "book",
    group: "topic",
  },
} as const satisfies Record<string, TagItem>;

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
} as const satisfies Record<string, TagItem> ;
