import ProjectsGrid from "@/components/sections/ProjectsGrid";
import Card from "@/components/ui/Card";
import Hero from "@/components/ui/Hero";

import Stack from "@/components/ui/Stack";

export default function ProjectsPage() {
  return (
    <>
      <Hero>
        <Stack className="hero__card lg:w-3/4">
          <Card className="flex flex-col gap-4">
            <h1 className="text-4xl lg:text-6xl font-bold italic text-balance">
              Projects
            </h1>
            <p>
              Projects I&apos;ve worked on, showcasing my skills and experience in
              web development.
            </p>
          </Card>
        </Stack>
      </Hero>
      <ProjectsGrid />
    </>
  );
}
