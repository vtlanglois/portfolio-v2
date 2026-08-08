import {
  ArrowSquareOutIcon,
  DiscIcon,
  GearIcon,
  HandPointingIcon,
  LegoIcon,
  UserCircleIcon,
} from "@phosphor-icons/react/dist/ssr";
import Card from "../ui/Card";
import Container from "../ui/Container";
import Section from "../ui/Section";
import Stack from "../ui/Stack";
import TagList from "../ui/TagList";
import { hobbyTags, mediaTags, TAGS } from "../../data/skills";

export default function About() {
  return (
    <Section id="about" sectionNumber={1}>
      <Container>
        <Stack>
          <div className="grid grid-rows-1">
            <Card
              variation="heading"
              className="flex flex-row flex-wrap items-center justify-between"
            >
              <h2 className="text-3xl font-bold leading-none">About Me</h2>
              <UserCircleIcon size={30} weight="duotone" />
            </Card>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-4">
            <Card className="row-span-2 col-span-2 flex flex-col gap-3 text-pretty">
              <p>
                I&apos;m a passionate software engineer with a focus on web
                development, UI / UX, and accessibility. I graduated from
                Indiana University Bloomington in 2023 with a Bachelor&apos;s of
                Science in Computer Science and a minor in Game Design. I have a
                strong foundation in software development and have a keen
                interest in making digital experiences worth using by everyone
                and anyone.
              </p>
              <p>
                I currently work at Eli Lilly. My work includes the initial
                release of LillyDirect®, which you can see on{" "}
                <a
                  href="https://www.nbcnews.com/now/video/eli-lilly-launches-new-website-to-help-patients-get-weight-loss-drugs-201386053731"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline inline-flex items-center-safe"
                >
                  NBC News
                  <ArrowSquareOutIcon />
                  <span className="sr-only">(opens in new tab)</span>
                </a>
                , and various micro-frontends for Lilly websites.
              </p>
              <p>
                As a 2000s kid, I grew up alongside technological innovation, from the early
                days of online games to the rise of smartphones. I even had a
                desktop at 3 years-old, which sparked my curiosity about how
                tech worked behind the scenes. This led to me to build my own
                games and websites. Eventually, this led me to pursue a career
                in software engineering.
              </p>
              <p>
                I&apos;m also a big fan of building and making things, including
                LEGO sets, Minecraft worlds, video games, furniture, paintings,
                meals, and more! Give me something I can build, and I&apos;ll be
                happy.
              </p>
            </Card>
            <Card className="row-span-1 col-span-2">
              <Stack>
                <div>
                  <h3
                    id="tech-interests"
                    className="inline-flex w-full items-center justify-between text-lg font-bold mb-2"
                  >
                    My technical interests
                    <GearIcon size={20} weight="duotone" aria-hidden />
                  </h3>
                  <TagList
                    labelledBy="tech-interests"
                    tags={[
                      TAGS.accessibility,
                      TAGS.educationTech,
                      TAGS.gameDevelopment,
                      TAGS.webDevelopment,
                      TAGS.ui,
                      TAGS.ux,
                    ]}
                  />
                </div>
                <div>
                  <h3
                    id="personal-interests"
                    className="inline-flex w-full items-center justify-between text-lg font-bold mb-2"
                  >
                    My personal interests
                    <LegoIcon size={20} weight="duotone" aria-hidden />
                  </h3>
                  <TagList
                    labelledBy="personal-interests"
                    tags={[
                      hobbyTags.nature,
                      hobbyTags.legos,
                      hobbyTags.gardening,
                      hobbyTags.cooking,
                      hobbyTags.photography,
                    ]}
                  />
                </div>
                <div>
                  <h3
                    id="favorite-media"
                    className="inline-flex w-full items-center justify-between text-lg font-bold mb-2"
                  >
                    My favorite media
                    <DiscIcon size={20} weight="duotone" aria-hidden />
                  </h3>
                  <TagList
                    labelledBy="favorite-media"
                    tags={[
                      mediaTags.houseOfLeaves,
                      mediaTags.starless,
                      mediaTags.minecraft,
                      mediaTags.cyberpunk,
                    ]}
                  />
                </div>
              </Stack>
            </Card>
            <Card className="row-span-1 col-span-2">
              <h3 className="inline-flex w-full items-center justify-between text-lg font-bold">
                Fun Facts
                <HandPointingIcon size={20} weight="duotone" aria-hidden />
              </h3>
              <ul className="list-disc list-inside">
                <li>I love to cook and experiment with new recipes.</li>
                <li>
                  I enjoy playing video games, especially those with rich
                  narratives and immersive worlds.
                </li>
                <li>
                  I grown a collection of LEGO sets and comic
                  books throughout the years.
                </li>
                <li>
                  I have a passion for photography, especially nature, urban, and liminal spaces.
                </li>
                <li>
                  I enjoy writing stories and worlds, especially sci-fi and modern settings.
                </li>
              </ul>
            </Card>
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
