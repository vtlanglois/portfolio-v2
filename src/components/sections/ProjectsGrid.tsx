import projects from "@/data/projects";
import { ProjectItem } from "@/types/projectTypes";
import Container from "../ui/Container";
import ProjectCard from "../ui/ProjectCard";
import Section from "../ui/Section";
import Stack from "../ui/Stack";

export default function Projects() {
  return (
    <Section id="projects" sectionNumber={1}>
      <Container>
        <Stack>
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
        </Stack>
      </Container>
    </Section>
  );
}
