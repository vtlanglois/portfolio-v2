import { KanbanIcon } from "@phosphor-icons/react/dist/ssr";
import Card from "../ui/Card";
import Container from "../ui/Container";
import GitHubLink from "../ui/GitHubLink";
import Section from "../ui/Section";
import Stack from "../ui/Stack";
import TagList from "../ui/TagList";
import { TAGS } from "@/data/skills";

export default function Projects() {
  return (
    <Section id="projects" sectionNumber={3}>
      <div className="section-divider">
        <svg
          width="100%"
          viewBox="0 0 680 30"
          preserveAspectRatio="xMidYMax slice"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block" }}
          fill="var(--section-color)"
          className="mb-[-2px]"
        >
          <path
            d="M0 30 L0 14 Q120 6 240 12 Q340 18 440 6 Q560 0 680 10 L680 30 Z"
            fill="var(--section-color)"
            className="section-hill"
          >
            {/* <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              values="
          M0 30 L0 14 Q120 6 240 12 Q340 18 440 6 Q560 0 680 10 L680 30 Z;
          M0 30 L0 16 Q120 8 240 14 Q340 20 440 8 Q560 2 680 12 L680 30 Z;
          M0 30 L0 14 Q120 6 240 12 Q340 18 440 6 Q560 0 680 10 L680 30 Z
        "
            /> */}
          </path>
        </svg>
      </div>
      <Container>
        <Stack>
          <Card
            variation="heading"
            className="flex flex-row flex-wrap items-center justify-between"
          >
            <h2 className="text-3xl font-bold leading-none">Projects</h2>
            <KanbanIcon size={30} weight="duotone" />
          </Card>
          <div className="grid grid-rows-1 lg:grid-cols-3 gap-4">
            <Card className="row-span-4 grid grid-rows-subgrid">
              <h3 className="text-xl font-semibold mb-2">PyBot</h3>
              <p>
                A Python-based chatbot that integrates with various APIs,
                include OpenAI&apos;s GPT models. Used to demo GenAI to a
                younger audience at a STEM event.
              </p>
              <TagList
                labelledBy="skills-tag-label"
                tags={[
                  TAGS.python,
                  TAGS.genai,
                  TAGS.educationTech,
                  TAGS.apiIntegration,
                ]}
              />
              <div className="text-end">
                <GitHubLink
                  href="https://github.com/vtlanglois/PyBot"
                  alt="Link to PyBot on GitHub"
                />
              </div>
            </Card>
            <Card className="row-span-4 grid grid-rows-subgrid">
              <h3 className="text-xl font-semibold mb-2">
                OLED Matrix Display Demo
              </h3>
              <p>
                A showcase of the capabilities of an OLED Screen for Arduino
                devices for data visualization and animation.
              </p>
              <TagList
                labelledBy="skills-tag-label"
                tags={[TAGS.arduino, TAGS.educationTech]}
              />
              <div className="text-end">
                <GitHubLink
                  href="https://github.com/vtlanglois/OLED-Demo"
                  alt="Link to OLED Matrix Display Demo on GitHub"
                />
              </div>
            </Card>
            <Card className="row-span-4 grid grid-rows-subgrid">
              <h3 className="text-xl font-semibold mb-2">
                Obsidian Markdown Sped Up
              </h3>
              <p>
                A set of custom Markdown snippets for Obsidian to speed up your
                notetaking.
              </p>
              <TagList labelledBy="skills-tag-label" tags={[TAGS.typescript]} />
              <div className="text-end">
                <GitHubLink
                  href="https://github.com/vtlanglois/obsidian-MarkdownSpedUp"
                  alt="Link to Obsidian Markdown Sped Up on GitHub"
                />
              </div>
            </Card>
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
