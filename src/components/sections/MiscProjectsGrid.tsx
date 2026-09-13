import { PinwheelIcon } from "@phosphor-icons/react/dist/ssr";
import { miscellaneousProjects } from "@/data/projects";
import { ProjectItem } from "@/types/projectTypes";
import Card from "../ui/Card";
import Container from "../ui/Container";
import ProjectCard from "../ui/ProjectCard";
import Section, { SectionDivider } from "../ui/Section";
import Stack from "../ui/Stack";

export default function MiscProjectsGrid() {
  return (
    <Section id="miscellaneous-projects" sectionNumber={3}>
      <SectionDivider />
      <Container>
        <Stack>
          <Card
            variation="heading"
            className="flex flex-row flex-wrap items-center justify-between"
          >
            <h2 className="text-2xl font-bold leading-none">
              Misc. Projects
            </h2>
            <PinwheelIcon size={30} weight="duotone" />
          </Card>
          <div className="grid grid-rows-1 lg:grid-cols-3 gap-4">
            {miscellaneousProjects.map((project: ProjectItem) => (
              <ProjectCard
                key={project.id}
                title={project.name}
                summary={project.summary}
                tags={project.tags}
                link={project.externalUrl}
                altText={project.linkAltText}
                className="row-span-3 grid grid-rows-subgrid"
              />
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}