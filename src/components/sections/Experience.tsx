import Card from "../ui/Card";
import Container from "../ui/Container";
import Section from "../ui/Section";
import Stack from "../ui/Stack";

export default function Experience() {
  return (
    <Section>
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
                systems to enhance the customer experience for Lilly's online
                services, focusing on accessible user interfaces. Leading a
                full-stack development team to deliver high-quality software
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
