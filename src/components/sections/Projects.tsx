import { ArrowRightIcon, KanbanIcon } from "@phosphor-icons/react/dist/ssr";
import Card from "../ui/Card";
import Container from "../ui/Container";
import Section, { SectionDivider } from "../ui/Section";
import Stack from "../ui/Stack";
import ProjectCard from "../ui/ProjectCard";
import {
  obsidianMarkdownSpedUpProject,
  oledMatrixDisplayDemoProject,
  pybotProject,
} from "@/data/projects";
import Link from "next/link";

export default function Projects() {
  return (
    <Section id="projects" sectionNumber={4}>
      <SectionDivider />
      <Container>
        <Stack>
          <Card
            variation="heading"
            className="flex flex-row flex-wrap items-center justify-between"
          >
            <h2 className="text-2xl font-bold leading-none">Projects</h2>
            <KanbanIcon size={30} weight="duotone" />
          </Card>
          <div className="grid grid-rows-1 lg:grid-cols-4 gap-4">
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
            <Card className="row-span-3 grid grid-rows-subgrid">
              <p>...and many more!</p>
              <div style={{ visibility: "hidden" }} />
              <Link
                href="/projects"
                className="flex items-center justify-between gap-2 font-bold rounded-full opacity-80 p-2 transition duration-300 motion-reduce:transition-none motion-reduce:transform-none dark:bg-slate-600 bg-slate-200 hover:bg-slate-400 "
              >
                View all projects <ArrowRightIcon size={24} weight="bold" />
              </Link>
            </Card>
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
