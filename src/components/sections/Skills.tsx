import {
  FileCodeIcon,
  GlobeIcon,
  ListStarIcon,
  ToolboxIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react/dist/ssr";
import Card from "../ui/Card";
import Container from "../ui/Container";
import Section from "../ui/Section";
import Stack from "../ui/Stack";
import TagList from "../ui/TagList";
import { TAGS } from "@/data/skills";
export default function Skills() {
  return (
    <Section id="skills" sectionNumber={2}>
      <div className="section-divider">
        <svg
          width="100%"
          viewBox="0 0 680 30"
          preserveAspectRatio="xMidYMax slice"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block" }}
          fill="var(--section-color)"
          className="mb-[-4px]"
        >
          <path
            d="M0 30 L0 14 Q120 6 240 12 Q340 18 440 6 Q560 0 680 10 L680 30 Z"
            fill="var(--section-color)"
            className="section-hill"
          ></path>
        </svg>
      </div>
      <Container>
        <Stack>
          <Card
            variation="heading"
            className="flex flex-row flex-wrap items-center justify-between"
          >
            <h2 className="text-3xl font-bold leading-none">
              Skills and Tools
            </h2>
            <ListStarIcon size={30} weight="duotone" />
          </Card>
          <div className="grid grid-rows-1 lg:grid-cols-2 gap-4">
            <Card className="row-span-2 grid grid-rows-subgrid">
              <h3
                id="skills-web-dev"
                className="inline-flex items-center justify-between text-xl font-semibold "
              >
                Web Dev
                <GlobeIcon size={24} weight="duotone" />
              </h3>
              <TagList
                labelledBy="skills-web-dev"
                tags={[
                  TAGS.react,
                  TAGS.nextjs,
                  TAGS.rrv7,
                  TAGS.nodejs,
                  TAGS.vite,
                  TAGS.typescript,
                  TAGS.javascript,
                  TAGS.html,
                  TAGS.tailwind,
                  TAGS.bootstrap,
                  TAGS.css,
                  TAGS.scss,
                  TAGS.accessibility,
                  TAGS.wcag,
                  TAGS.storybook,
                  TAGS.jest,
                  TAGS.seo,
                  TAGS.apiIntegration,
                  TAGS.ui,
                  TAGS.ux,
                ]}
              />
            </Card>
            <Card className="row-span-2 grid grid-rows-subgrid">
              <h3
                id="skills-interpersonal"
                className="inline-flex items-center justify-between text-xl font-semibold "
              >
                Interpersonal
                <UsersThreeIcon size={24} weight="duotone" />
              </h3>
              <TagList
                labelledBy="skills-interpersonal"
                tags={[
                  TAGS.projectManagement,
                  TAGS.teamwork,
                  TAGS.problemSolving,
                  TAGS.crossFunctionalCollaboration,
                  TAGS.communication,
                  TAGS.documentation,
                  TAGS.empathy,
                  TAGS.crossCompanyCollaboration,
                  TAGS.adaptability,
                  TAGS.passionate,
                  TAGS.mentorship,
                  TAGS.continuousLearning,
                ]}
              />
            </Card>
            <Card className="row-span-2 grid grid-rows-subgrid">
              <h3
                id="skills-technical"
                className="inline-flex items-center justify-between text-xl font-semibold "
              >
                Technical
                <FileCodeIcon size={24} weight="duotone" />
              </h3>
              <TagList
                labelledBy="skills-technical"
                tags={[
                  TAGS.python,
                  TAGS.c,
                  TAGS.java,
                  TAGS.bash,
                  TAGS.arduino,
                  TAGS.markdown,
                  TAGS.genai,
                  TAGS.bugHunting,
                  TAGS.bugFixing,
                  TAGS.codeReview,
                  TAGS.prototyping,
                  TAGS.sql,
                  TAGS.gameDevelopment,
                  TAGS.gameDesign,
                  TAGS.gameTesting,
                  TAGS.promptEngineering,
                  TAGS.designSystems,
                ]}
              />
            </Card>
            <Card className="row-span-2 grid grid-rows-subgrid">
              <h3
                id="skills-tools"
                className="inline-flex items-center justify-between  text-xl font-semibold "
              >
                Tools
                <ToolboxIcon size={24} weight="duotone" />
              </h3>
              <TagList
                labelledBy="skills-tools"
                tags={[
                  TAGS.git,
                  TAGS.github,
                  TAGS.figma,
                  TAGS.copilot,
                  TAGS.claudeCode,
                  TAGS.vscode,
                  TAGS.jira,
                  TAGS.confluence,
                  TAGS.slack,
                  TAGS.teams,
                  TAGS.voiceover,
                  TAGS.trello,
                  TAGS.terminal,
                  TAGS.cmux,
                  TAGS.postman,
                  TAGS.obsidian,
                  TAGS.ohMyZsh,
                  TAGS.biome,
                ]}
              />
            </Card>
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
