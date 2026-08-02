import { KanbanIcon } from "@phosphor-icons/react/dist/ssr";
import Card from "../ui/Card";
import Container from "../ui/Container";
import Section from "../ui/Section";
import Stack from "../ui/Stack";
import ProjectCard from "../ui/ProjectCard";
import {
  obsidianMarkdownSpedUpProject,
  oledMatrixDisplayDemoProject,
  pybotProject,
} from "@/data/projects";

export default function Projects() {
  return (
    <Section id="projects" sectionNumber={4}>
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
          >
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
            <ProjectCard
              title={pybotProject.name}
              summary={pybotProject.summary}
              tags={pybotProject.tags}
              link={pybotProject.externalUrl}
              altText={pybotProject.linkAltText}
              className="row-span-3 grid grid-rows-subgrid"
            />
            <ProjectCard
              title={oledMatrixDisplayDemoProject.name}
              summary={oledMatrixDisplayDemoProject.summary}
              tags={oledMatrixDisplayDemoProject.tags}
              link={oledMatrixDisplayDemoProject.externalUrl}
              altText={oledMatrixDisplayDemoProject.linkAltText}
              className="row-span-3 grid grid-rows-subgrid"
            />
            <ProjectCard
              title={obsidianMarkdownSpedUpProject.name}
              summary={obsidianMarkdownSpedUpProject.summary}
              tags={obsidianMarkdownSpedUpProject.tags}
              link={obsidianMarkdownSpedUpProject.externalUrl}
              altText={obsidianMarkdownSpedUpProject.linkAltText}
              className="row-span-3 grid grid-rows-subgrid"
            />
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
