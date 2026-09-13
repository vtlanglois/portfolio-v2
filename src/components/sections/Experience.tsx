import { LaptopIcon  } from "@phosphor-icons/react/dist/ssr";
import Card from "../ui/Card";
import Container from "../ui/Container";
import Section, { SectionDivider } from "../ui/Section";
import Stack from "../ui/Stack";
import TagList from "../ui/TagList";
import { TAGS } from "@/data/skills";
import {
  MapPinSimpleAreaIcon,
  TimerIcon 
} from "@phosphor-icons/react/dist/ssr";

export default function Experience() {
  return (
    <Section id="experience" sectionNumber={3}>
      <SectionDivider variant="wave" />
      <Container>
        <Stack>
          <Card
            variation="heading"
            className="flex flex-row flex-wrap items-center justify-between"
          >
            <h2 className="text-2xl font-bold leading-none">Experience</h2>
            <LaptopIcon size={30} weight="duotone" />
          </Card>
          <div className="grid grid-cols-1 gap-4">
            <Card className="flex flex-col gap-2 timeline">
              <div className="flex flex-row items-center justify-between gap-1 flex-wrap">
                <h3 className="text-xl font-semibold text-balance">
                Senior Software Engineer at <i>Eli Lilly & Company</i>
                </h3>
                <p>July 2023 - Present</p>
              </div>
              <p className="text-sm inline-flex items-center gap-1">
                <MapPinSimpleAreaIcon className="colored-icon" weight="duotone" aria-hidden />{" "}
                Indianapolis, IN •
                <TimerIcon className="colored-icon" weight="duotone" aria-hidden /> +3 yrs
              </p>
              <div className="flex flex-col gap-2">
                <p>
                  Currently revamping the logged-in experience for Lilly users.
                </p>
                <p className="text-pretty">
                  Worked on developing scalable web applications and
                  systems to enhance the customer experience for Lilly&apos;s
                  online services, focusing on accessible user interfaces.
                  Led a full-stack development team to deliver high-quality
                  software solutions.
                </p>
                <p className="text-pretty">
                  Worked on the initial launch of LillyDirect®. Learned the ropes of software development practices and lifecycle in a real-world, high-profile project.
                </p>
              </div>
              <span id="skills-tag-label" className="sr-only">
                Skills
              </span>
              <TagList
                labelledBy="skills-tag-label"
                tags={[
                  TAGS.webDevelopment,
                  TAGS.accessibility,
                  TAGS.nextjs,
                  TAGS.rrv7,
                  TAGS.codeReview,
                  TAGS.crossFunctionalCollaboration,
                  TAGS.adaptability,
                  TAGS.teamwork,
                ]}
              />
            </Card>
            <Card className="flex flex-col gap-2 timeline">
              <div className="flex flex-row items-center justify-between gap-1 flex-wrap">
                <h3 className="text-xl font-semibold text-balance">
                  Software Engineer Intern at <i>BCForward</i>
                </h3>
                <p>May 2022 - August 2022</p>
              </div>
              <p className="text-sm inline-flex items-center gap-1">
                {" "}
                <MapPinSimpleAreaIcon className="colored-icon" weight="duotone" aria-hidden />
                Carmel, IN •
                <TimerIcon className="colored-icon" weight="duotone" aria-hidden /> 3mos
              </p>
              <p className="text-pretty">
                Worked on developing features for the Indiana Prosecutor Case
                Management System, focused on enhancing user experience and
                customer support. Reduced customer support calls by the
                hundreds.
              </p>
              <TagList
                labelledBy="skills-tag-label"
                tags={[
                  TAGS.javascript,
                  TAGS.react,
                  TAGS.nodejs,
                  TAGS.sql,
                  TAGS.bootstrap,
                  TAGS.webDevelopment,
                  TAGS.prototyping,
                  TAGS.problemSolving,
                ]}
              />
            </Card>
            <Card className="flex flex-col gap-2">
              <div className="flex flex-row items-center justify-between gap-1 flex-wrap">
                <h3 className="text-xl font-semibold text-balance">
                  Community Outreach Intern at <i>IU Luddy School</i>
                </h3>
                <p>August 2020 - July 2023</p>
              </div>
              <p className="text-sm inline-flex items-center gap-1">
                <MapPinSimpleAreaIcon className="colored-icon" weight="duotone" aria-hidden />{" "}
                Bloomington, IN • <TimerIcon className="colored-icon" weight="duotone" aria-hidden /> 2
                yrs 11mos
              </p>
              <p className="text-pretty">
                Directed and coordinated community outreach programs, focused on
                promoting STEM education and engaging with local schools to
                inspire the next generation of technologists. Engaged students
                within the Luddy school.
              </p>
              <TagList
                labelledBy="skills-tag-label"
                tags={[
                  TAGS.educationTech,
                  TAGS.projectManagement,
                  TAGS.teamwork,
                  TAGS.communication,
                  TAGS.adaptability,
                ]}
              />
            </Card>
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
