import { ProjectItem } from "@/types/projectTypes";
import { TAGS } from "@/data/skills";

export const portfolioProject: ProjectItem = {
  id: "portfolio-website",
  name: "Portfolio Website",
  summary: "My personal portfolio website built with Next.js and Tailwind CSS.",
  tags: [TAGS.webDevelopment, TAGS.nextjs, TAGS.tailwind],
  externalUrl: "https://github.com/vtlanglois/portfolio-website",
  linkAltText: "",
};

export const altasM1Project: ProjectItem = {
  id: "atlas-m-1",
  name: "Atlas M-1",
  summary:
    "A short visual and audio experience about a doomed submarine operator at the bottom of the ocean. Built with Construct 3.",
  tags: [TAGS.gameDevelopment, TAGS.gameTesting],
  externalUrl: "https://startcmd.itch.io/atlas-m-1",
  linkAltText: "Link to Atlas M-1 on itch.io",
};

export const youtubeKidControllerProject: ProjectItem = {
  id: "youtube-kid-controller",
  name: "YouTube Kid Controller",
  summary:
    "A YouTube controller for kids. Built with Arduino and Legos, designed for Windows & Chrome.",
  tags: [TAGS.c, TAGS.arduino],
  externalUrl: "https://github.com/vtlanglois/ArduinoKidController-I341",
  linkAltText: "Link to YouTube Kid Controller on GitHub",
};

export const oledMatrixDisplayDemoProject: ProjectItem = {
  id: "oled-matrix-display-demo",
  name: "OLED Matrix Display Demo",
  summary:
    "A showcase of the capabilities of an OLED Screen for Arduino devices.",
  tags: [TAGS.c, TAGS.arduino, TAGS.educationTech],
  externalUrl: "https://github.com/vtlanglois/OLED-Demo",
  linkAltText: "Link to OLED Matrix Display Demo on GitHub",
};

export const rgbLEDDemoProject: ProjectItem = {
  id: "rgb-led-demo",
  name: "RGB LED Demo",
  summary:
    "An interactive educational experience built to demonstrate an Arduino's analog and PWD pins.",
  tags: [TAGS.c, TAGS.arduino, TAGS.educationTech],
  externalUrl: "https://github.com/vtlanglois/RGB_LED_Dials",
  linkAltText: "Link to RGB LED Demo on GitHub",
};

export const pybotProject: ProjectItem = {
  id: "pybot",
  name: "PyBot",
  summary:
    "A Discord chatbot using OpenAI's GPT models. Used to demo LLMs at a youth STEM fair.",
  tags: [TAGS.python, TAGS.genai, TAGS.apiIntegration],
  externalUrl: "https://github.com/vtlanglois/PyBot",
  linkAltText: "Link to PyBot on GitHub",
};

export const runGZDoomProject: ProjectItem = {
  id: "run-gzdoom",
  name: "Run GZDoom S(hell)",
  summary:
    "A very simple GZDoom file manager. Built as an experiment in writing BASH scripts.",
  tags: [TAGS.bash],
  externalUrl: "https://github.com/vtlanglois/run-gzdoom.sh",
  linkAltText: "Link to Run GZDoom Sh(ell) on GitHub",
};

export const obsidianMarkdownSpedUpProject: ProjectItem = {
  id: "obsidian-sped-up",
  name: "Obsidian Markdown Sped Up",
  summary:
    "A set of custom Markdown snippets for Obsidian to speed up your notetaking.",
  tags: [TAGS.typescript, TAGS.markdown, TAGS.obsidian],
  externalUrl: "https://github.com/vtlanglois/obsidian-MarkdownSpedUp",
  linkAltText: "Link to Obsidian Markdown Sped Up on GitHub",
};

export const cssSubgridDemo: ProjectItem = {
  id: "css-subgrid-demo",
  name: "CSS Subgrid Demo",
  summary:
    "A demo of CSS Subgrid using horizontal cards. Used to showcase new styling to my organization.",
  tags: [TAGS.html, TAGS.css],
  externalUrl: "https://codepen.io/vtlanglois/pen/LEVgdqX",
  linkAltText: "Link to CSS Subgrid Demo on CodePen",
};

export const hyperLinkHoverHighlightersDemo: ProjectItem = {
  id: "hyperlink-highlighter",
  name: "Hyperlink Hover Highlighters",
  summary:
    "A set of hover transitions meant to mimic a highlighter. Includes monochrome and rainbow versions.",
  tags: [TAGS.html, TAGS.css],
  externalUrl: "https://codepen.io/vtlanglois/pen/WbvYpNx",
  linkAltText: "Link to Hyperlink Hover Highlighters on CodePen",
};

export const stickyLegendsDemo: ProjectItem = {
  id: "sticky-legends",
  name: "Sticky Fieldset Legend",
  summary:
    "A demo of sticky fieldset legends. Used to demo a possible UI for a component on a project.",
  tags: [TAGS.html, TAGS.css],
  externalUrl: "https://codepen.io/vtlanglois/details/YPWJymr",
  linkAltText: "Link to Sticky Fieldset Legends Demo on CodePen",
};

export const jitterEffectDemo: ProjectItem = {
  id: "jitter-effect",
  name: "Jitter Effect Demo",
  summary:
    "A demo of a jitter effect on letters, words, sentences, and containers. Inspired by the jitter effect on enclose.horse.",
  tags: [TAGS.html, TAGS.css, TAGS.javascript],
  externalUrl: "https://codepen.io/vtlanglois/pen/vEKVjNW",
  linkAltText: "Link to Jitter Effect Demo on CodePen",
};

export const colorInterpolationMethodsDemo: ProjectItem = {
  id: "color-interpolation",
  name: "Color Interpolation Methods",
  summary:
    "Demo of how different color interpolation methods change the final computed gradient.",
  tags: [TAGS.html, TAGS.css],
  externalUrl: "https://codepen.io/vtlanglois/pen/bNemxrZ",
  linkAltText: "Link to Color Interpolation Methods Demo on CodePen",
};

export const contrastColorDemo: ProjectItem = {
  id: "contrast-color",
  name: "contrast-color() Demo",
  summary:
    "A demo of the newly available contrast-color() CSS function, added to Baseline in April 2026.",
  tags: [TAGS.html, TAGS.css, TAGS.javascript],
  externalUrl: "https://codepen.io/vtlanglois/pen/bNemxrZ",
  linkAltText: "Link to Color Interpolation Methods Demo on CodePen",
};

export const codePenDemos: Array<ProjectItem> = [
  cssSubgridDemo,
  hyperLinkHoverHighlightersDemo,
  contrastColorDemo,
  stickyLegendsDemo,
  jitterEffectDemo,
  colorInterpolationMethodsDemo,
];

const projects: Array<ProjectItem> = [
  // portfolioProject,
  // altasM1Project,
  pybotProject,
  youtubeKidControllerProject,
  oledMatrixDisplayDemoProject,
  rgbLEDDemoProject,
  obsidianMarkdownSpedUpProject,
  runGZDoomProject,
];

export default projects;
