import PaletteDemo from "@/components/sections/ThemeDemo";
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
              Themes
            </h1>
            <p>
              Some of my thoughts on this site&apos;s design direction and
              available themes!
            </p>
          </Card>
        </Stack>
      </Hero>
      <PaletteDemo />
    </>
  );
}
