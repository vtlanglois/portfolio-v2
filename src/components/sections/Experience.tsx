import { LaptopIcon  } from "@phosphor-icons/react/dist/ssr";
import Card from "../ui/Card";
import Container from "../ui/Container";
import Section from "../ui/Section";
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
            d="M0 30 L0 20 Q80 8 180 14 Q260 18 320 8 Q380 2 460 10 Q560 18 680 8 L680 30 Z"
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
            <h2 className="text-3xl font-bold leading-none">Experience</h2>
            <LaptopIcon size={30} weight="duotone" />
          </Card>
          <div className="grid grid-cols-1 gap-4">
            <Card className="flex flex-col gap-2 timeline">
              <div className="flex flex-row items-center justify-between gap-1 flex-wrap">
                <h3 className="text-xl font-semibold text-balance">
                  Senior Software Engineer at Eli Lilly & Company
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
                  Software Engineer Intern at BCForward
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
                  Community Outreach Intern at IU Luddy School
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
