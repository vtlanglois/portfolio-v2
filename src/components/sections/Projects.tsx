import Card from "../ui/Card";
import Container from "../ui/Container";
import GitHubLink from "../ui/GitHubLink";
import Section from "../ui/Section";
import Stack from "../ui/Stack";

export default function Projects() {
  return (
    <Section>
      <Container>
        <Stack>
          <Card>
            <h2 className="text-3xl font-bold">Projects</h2>
          </Card>
          <div className="grid grid-rows-1 lg:grid-cols-3 gap-4">
            <Card className="row-span-3 grid grid-rows-subgrid">
              <h3 className="text-xl font-semibold mb-2">PyBot</h3>
              <p>
                A Python-based chatbot that integrates with various APIs,
                include OpenAI&apos;s GPT models. Used to demo GenAI to a
                younger audience at a STEM event.
              </p>
              <div className="text-end">
                <GitHubLink
                  href="https://github.com/vtlanglois/PyBot"
                  alt="Link to PyBot on GitHub"
                />
              </div>
            </Card>
            <Card className="row-span-3 grid grid-rows-subgrid">
              <h3 className="text-xl font-semibold mb-2">
                OLED Matrix Display Demo
              </h3>
              <p>
                A showcase of the capabilities of an OLED Screen for Arduino
                devices for data visualization and animation.
              </p>
              <div className="text-end">
                <GitHubLink
                  href="https://github.com/vtlanglois/OLED-Demo"
                  alt="Link to OLED Matrix Display Demo on GitHub"
                />
              </div>
            </Card>
            <Card className="row-span-3 grid grid-rows-subgrid">
              <h3 className="text-xl font-semibold mb-2">
                Obsidian Markdown Sped Up
              </h3>
              <p>
                A set of custom Markdown snippets for Obsidian to speed up your
                notetaking.
              </p>
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
