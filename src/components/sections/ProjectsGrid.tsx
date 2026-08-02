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
    <Section id="projects" sectionNumber={1}>
      <Container>
        <Stack>
          <div className="grid grid-rows-1 lg:grid-cols-3 gap-4">
            <Card className="row-span-4 grid grid-rows-subgrid">
              <h3 className="text-xl font-semibold ">PyBot</h3>
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
              <h3 className="text-xl font-semibold ">
                OLED Matrix Display Demo
              </h3>
              <p>
                A showcase of the capabilities of an OLED Screen for Arduino
                devices for data visualization and animation.
              </p>
              <TagList
                labelledBy="skills-tag-label"
                tags={[TAGS.c, TAGS.arduino, TAGS.educationTech]}
              />
              <div className="text-end">
                <GitHubLink
                  href="https://github.com/vtlanglois/OLED-Demo"
                  alt="Link to OLED Matrix Display Demo on GitHub"
                />
              </div>
            </Card>
            <Card className="row-span-4 grid grid-rows-subgrid">
              <h3 className="text-xl font-semibold ">
                Obsidian Markdown Sped Up
              </h3>
              <p>
                A set of custom Markdown snippets for Obsidian to speed up your
                notetaking.
              </p>
              <TagList
                labelledBy="skills-tag-label"
                tags={[TAGS.typescript, TAGS.markdown, TAGS.obsidian]}
              />
              <div className="text-end">
                <GitHubLink
                  href="https://github.com/vtlanglois/obsidian-MarkdownSpedUp"
                  alt="Link to Obsidian Markdown Sped Up on GitHub"
                />
              </div>
            </Card>
            <Card className="row-span-4 grid grid-rows-subgrid">
              <h3 className="text-xl font-semibold ">YouTube Kid Controller</h3>
              <p>
                A YouTube controller for kids. Built with Arduino, designed for
                Windows & Chrome.
              </p>
              <TagList labelledBy="skills-tag-label" tags={[TAGS.c, TAGS.arduino]} />
              <div className="text-end">
                <GitHubLink
                  href="https://github.com/vtlanglois/ArduinoKidController-I341"
                  alt="Link to YouTube Kid Controller on GitHub"
                />
              </div>
            </Card>
            <Card className="row-span-4 grid grid-rows-subgrid">
              <h3 className="text-xl font-semibold ">RGB LED Demo</h3>
              <p>
                An interactive educational experience built to demonstrate an
                Arduino's analog and PWD pins for a young audience. Built for
                developers and educators alike.
              </p>
              <TagList
                labelledBy="skills-tag-label"
                tags={[TAGS.c, TAGS.arduino, TAGS.educationTech]}
              />
              <div className="text-end">
                <GitHubLink
                  href="https://github.com/vtlanglois/RGB_LED_Dials"
                  alt="Link to RGB LED Demo on GitHub"
                />
              </div>
            </Card>
            <Card className="row-span-4 grid grid-rows-subgrid">
              <h3 className="text-xl font-semibold ">
                Run GZDoom Sh&#40;ell&#41;
              </h3>
              <p>
                A very simple GZDoom file manager. Built as an experiment in
                writing BASH scripts.
              </p>
              <TagList labelledBy="skills-tag-label" tags={[TAGS.bash]} />
              <div className="text-end">
                <GitHubLink
                  href="https://github.com/vtlanglois/run-gzdoom.sh"
                  alt="Link to Run GZDoom Sh(ell) on GitHub"
                />
              </div>
            </Card>
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
