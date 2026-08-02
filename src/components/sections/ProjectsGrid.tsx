import projects, { codePenDemos } from "@/data/projects";
import { ProjectItem } from "@/types/projectTypes";
import Container from "../ui/Container";
import ProjectCard from "../ui/ProjectCard";
import Section from "../ui/Section";
import Stack from "../ui/Stack";
import Card from "../ui/Card";
import { TabsIcon, GitForkIcon } from "@phosphor-icons/react/dist/ssr";

export default function ProjectsGrid() {
  return (
    <Section id="projects" sectionNumber={1}>
      <Container>
        <Stack>
          <Card
            variation="heading"
            className="flex flex-row flex-wrap items-center justify-between"
          >
            <h2 className="text-3xl font-bold leading-none">GitHub Projects</h2>
            <GitForkIcon size={30} weight="duotone" />
          </Card>
          <div className="grid grid-rows-1 lg:grid-cols-3 gap-4">
            {projects.map((project: ProjectItem) => (
              <ProjectCard
                key={project.id}
                title={project.name}
                summary={project.summary}
                tags={project.tags}
                link={project.externalUrl}
                altText={project.linkAltText}
                className="row-span-4 grid grid-rows-subgrid"
              />
            ))}
          </div>
          <Card
            variation="heading"
            className="flex flex-row flex-wrap items-center justify-between"
          >
            <h2 className="text-3xl font-bold leading-none">
              CodePen Projects
            </h2>
            <TabsIcon size={30} weight="duotone" />
          </Card>
          <div className="grid grid-rows-1 lg:grid-cols-3 gap-4">
            {codePenDemos.map((demo: ProjectItem) => (
              <ProjectCard
                key={demo.id}
                title={demo.name}
                summary={demo.summary}
                tags={demo.tags}
                link={demo.externalUrl}
                altText={demo.linkAltText}
                className="row-span-4 grid grid-rows-subgrid"
              />
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
