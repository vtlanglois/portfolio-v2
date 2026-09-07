import { codePenDemos } from "@/data/projects";
import { ProjectItem } from "@/types/projectTypes";
import Container from "../ui/Container";
import ProjectCard from "../ui/ProjectCard";
import Section from "../ui/Section";
import Stack from "../ui/Stack";
import Card from "../ui/Card";
import { TabsIcon } from "@phosphor-icons/react/dist/ssr";

export default function CodepenProjectsGrid() {
  return (
    <Section id="codepen-projects" sectionNumber={2}>
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
                className="row-span-3 grid grid-rows-subgrid"
              />
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
