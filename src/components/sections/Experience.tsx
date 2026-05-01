import Card from "../ui/Card";
import Container from "../ui/Container";
import Section from "../ui/Section";
import Stack from "../ui/Stack";

export default function Experience() {
  return (
    <Section sectionNumber={2}>
      <div className="section-divider">
        <svg
          width="100%"
          viewBox="0 0 680 30"
          preserveAspectRatio="xMidYMax slice"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block" }}
          fill="var(--section-color)"
          className="mb-[-2px]"
        >
          <path d="M0 30 L0 20 Q80 8 180 14 Q260 18 320 8 Q380 2 460 10 Q560 18 680 8 L680 30 Z" className="hill">
            <animate
              attributeName="d"
              dur="12s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              values="
          M0 30 L0 20 Q80 8 180 14 Q260 18 320 8 Q380 2 460 10 Q560 18 680 8 L680 30 Z;
          M0 30 L0 22 Q80 10 180 16 Q260 20 320 10 Q380 4 460 12 Q560 20 680 10 L680 30 Z;
          M0 30 L0 20 Q80 8 180 14 Q260 18 320 8 Q380 2 460 10 Q560 18 680 8 L680 30 Z
        "
            />
          </path>
        </svg>
      </div>
      <Container>
        <Stack>
          <Card>
            <h2 className="text-3xl font-bold">Experience</h2>
          </Card>
          <div className="grid grid-cols-1 gap-4">
            <Card className="flex flex-col gap-2">
              <div className="flex flex-row justify-between gap-1 flex-wrap">
                <h3 className="text-xl font-semibold">
                  Senior Software Engineer at Eli Lilly & Company
                </h3>
                <p>July 2023 - Present</p>
              </div>
              <p className="text-sm">Indianapolis, IN</p>
              <p>
                Currently working on developing scalable web applications and
                systems to enhance the customer experience for Lilly&apos;s
                online services, focusing on accessible user interfaces. Leading
                a full-stack development team to deliver high-quality software
                solutions.
              </p>
            </Card>
            <Card className="flex flex-col gap-2">
              <div className="flex flex-row justify-between gap-1 flex-wrap">
                <h3 className="text-xl font-semibold">
                  Software Engineer Intern at BCForward
                </h3>
                <p>May 2022 - August 2022</p>
              </div>
              <p className="text-sm">Carmel, IN</p>
              <p>
                Worked on developing and maintaining the Indiana Prosecutor Case
                Management System, focused on enhancing user experience and
                performance.
              </p>
            </Card>
            <Card className="flex flex-col gap-2">
              <div className="flex flex-row justify-between gap-1 flex-wrap">
                <h3 className="text-xl font-semibold mb-2">
                  Community Outreach Intern at IU Luddy School of Informatics,
                  Computing, and Engineering
                </h3>
                <p>August 2020 - July 2023</p>
              </div>
              <p className="text-sm">Bloomington, IN</p>
              <p>
                Directed and coordinated community outreach programs, focused on
                promoting STEM education and engaging with local schools to
                inspire the next generation of technologists.
              </p>
            </Card>
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
