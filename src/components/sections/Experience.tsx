import { LaptopIcon  } from "@phosphor-icons/react/dist/ssr";
import { TAGS } from "@/data/skills";
import { ExperienceItem } from "@/types/experienceTypes";
import Card from "../ui/Card";
import Container from "../ui/Container";
import ExperienceCard from "../ui/ExperienceCard";
import Section, { SectionDivider } from "../ui/Section";
import Stack from "../ui/Stack";

const experiences: ExperienceItem[] = [
  {
    id: "eli-lilly",
    role: "Senior Software Engineer",
    company: "Eli Lilly & Company",
    dates: "July 2023 - Present",
    location: "Indianapolis, IN",
    duration: "+3 yrs",
    descriptions: [
      <p className="text-pretty" key="lilly-current">
        Currently revamping the logged-in experience for Lilly users.
      </p>,
      <p className="text-pretty" key="lilly-scalable">
        Worked on developing scalable web applications and systems to enhance the customer experience for Lilly&apos;s online services, focusing on accessible user interfaces. Led a full-stack development team to deliver high-quality software solutions.
      </p>,
      <p className="text-pretty" key="lilly-direct">
        Worked on the initial launch of LillyDirect®. Learned the ropes of software development practices and lifecycle in a real-world, high-profile project.
      </p>,
    ],
    tags: [
      TAGS.webDevelopment,
      TAGS.accessibility,
      TAGS.nextjs,
      TAGS.rrv7,
      TAGS.crossFunctionalCollaboration,
      TAGS.codeReview,
      TAGS.teamwork,
      TAGS.adaptability,
    ],
    isTimelineItem: true,
  },
  {
    id: "bcforward",
    role: "Software Engineer Intern",
    company: "BCForward",
    dates: "May 2022 - August 2022",
    location: "Carmel, IN",
    duration: "3mos",
    descriptions: [
      <p className="text-pretty" key="bcforward-case-management">
        Worked on developing features for the Indiana Prosecutor Case Management System, focused on enhancing user experience and customer support. Reduced customer support calls by the hundreds.
      </p>,
    ],
    tags: [
      TAGS.javascript,
      TAGS.react,
      TAGS.nodejs,
      TAGS.sql,
      TAGS.bootstrap,
      TAGS.webDevelopment,
      TAGS.problemSolving,
      TAGS.prototyping,
    ],
    isTimelineItem: true,
  },
  {
    id: "iu-luddy-school",
    role: "Community Outreach Intern",
    company: "IU Luddy School",
    dates: "August 2020 - July 2023",
    location: "Bloomington, IN",
    duration: "2 yrs 11mos",
    descriptions: [
      <p className="text-pretty" key="luddy-outreach">
        Directed and coordinated community outreach programs, focused on promoting STEM education and engaging with local schools to inspire the next generation of technologists. Engaged students within the Luddy school.
      </p>,
    ],
    tags: [
      TAGS.projectManagement,
      TAGS.communication,
      TAGS.teamwork,
      TAGS.educationTech,
      TAGS.adaptability,
    ],
  },
];

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
            {experiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
