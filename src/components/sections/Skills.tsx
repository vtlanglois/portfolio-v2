import {
  GlobeIcon,
  ListStarIcon,
  ToolboxIcon,
  UsersThreeIcon,
  FilesIcon,
  GearSixIcon,
} from "@phosphor-icons/react/dist/ssr";
import Card from "../ui/Card";
import Container from "../ui/Container";
import Section, { SectionDivider } from "../ui/Section";
import Stack from "../ui/Stack";
import TagList from "../ui/TagList";
import { TAGS } from "@/data/skills";
export default function Skills() {
  return (
    <Section id="skills" sectionNumber={2}>
      <SectionDivider />
      <Container>
        <Stack>
          <Card
            variation="heading"
            className="flex flex-row flex-wrap items-center justify-between"
          >
            <h2 className="text-2xl font-bold leading-none">
              Skills and Tools
            </h2>
            <ListStarIcon size={30} weight="duotone" />
          </Card>
          <div className="grid grid-rows-1 lg:grid-cols-2 gap-3">
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
                  TAGS.accessibility,
                  TAGS.wcag,
                  TAGS.nodejs,
                  TAGS.apiIntegration,
                  TAGS.tailwind,
                  TAGS.ui,
                  TAGS.ux,
                  TAGS.motion,
                ]}
              />
            </Card>
            <Card className="row-span-2 grid grid-rows-subgrid">
              <h3
                id="skills-languages"
                className="inline-flex items-center justify-between text-xl font-semibold "
              >
                Languages
                <FilesIcon size={24} weight="duotone" />
              </h3>
              <TagList
                labelledBy="skills-languages"
                tags={[
                  TAGS.typescript,
                  TAGS.javascript,
                  TAGS.html,
                  TAGS.css,
                  TAGS.scss,
                  TAGS.python,
                  TAGS.sql,
                  TAGS.bash,
                  TAGS.c,
                  TAGS.java,
                ]}
              />
            </Card>
          </div>
          <div className="grid grid-rows-1 lg:grid-cols-3 gap-3">
            <Card className="row-span-2 grid grid-rows-subgrid">
              <h3
                id="skills-engineering-practices"
                className="inline-flex items-center justify-between text-xl font-semibold"
              >
                Engineering Practices
                <GearSixIcon size={24} weight="duotone" />
              </h3>
              <TagList
                labelledBy="skills-engineering-practices"
                tags={[
                  TAGS.designSystems,
                  TAGS.codeReview,
                  TAGS.debugging,
                  TAGS.prototyping,
                  TAGS.techDemos,
                  TAGS.documentation,
                  TAGS.productMindset,
                  TAGS.userCentricApproach,
                ]}
              />
            </Card>
            <Card className="row-span-2 grid grid-rows-subgrid">
              <h3
                id="skills-tools"
                className="inline-flex items-center justify-between text-xl font-semibold"
              >
                Tools
                <ToolboxIcon size={24} weight="duotone" />
              </h3>
              <TagList
                labelledBy="skills-tools"
                tags={[
                  TAGS.git,
                  TAGS.github,
                  TAGS.ghActions,
                  TAGS.jest,
                  TAGS.storybook,
                  TAGS.figma,
                  TAGS.postman,
                  TAGS.biome,
                  TAGS.jira,
                  TAGS.confluence,
                  TAGS.copilot,
                  TAGS.claudeCode,
                ]}
              />
            </Card>
            <Card className="row-span-2 grid grid-rows-subgrid">
              <h3
                id="skills-interpersonal"
                className="inline-flex items-center justify-between text-xl font-semibold"
              >
                Interpersonal
                <UsersThreeIcon size={24} weight="duotone" />
              </h3>
              <TagList
                labelledBy="skills-interpersonal"
                tags={[
                  TAGS.crossFunctionalCollaboration,
                  TAGS.communication,
                  TAGS.projectManagement,
                  TAGS.teamwork,
                  TAGS.problemSolving,
                  TAGS.mentorship,
                ]}
              />
            </Card>
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
