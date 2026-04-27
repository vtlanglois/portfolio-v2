import Card from "../ui/Card";
import Container from "../ui/Container";
import Section from "../ui/Section";

export default function About() {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-4">
          <Card className="row-span-2 col-span-2 flex flex-col gap-2 text-pretty">
            <h2 className="text-xl font-bold">About</h2>
            <p>
              I'm a passionate software engineer with a focus on web development
              and accessibility. I graduated from Indiana University with a
              Bachelor's degree in Computer Science and a minor in Game Design.
              I have a strong foundation in computer science principles and a
              keen interest in creating inclusive digital experiences.
            </p>
            <p>
              I grew up surrounded by technology, from the early days on online
              games to the rise of smartphones. I even had a desktop at the age
              of 3, which sparked my curiosity about how things work behind the
              scenes. This led to me to build my own personal games and
              websites, and eventually to pursue a career in software
              engineering.
            </p>
            <p>
              I'm also a big fan of building and making things, including LEGO
              sets, Minecraft worlds, video games, furniture, paintings, meals,
              and more! Give me something I can build, and I'll be happy.
            </p>
            <p>
              This website is my fourth revision of my portfolio. For this take,
              I wanted to build off of what I learned about properly designing a
              website and build something both technically and aesthetically
              interesting. More sections and features will be added in future
              updates!
            </p>
          </Card>
          <Card className="row-span-1 col-span-2">
            <h3 className="text-lg font-bold">My technical interests</h3>
            <ul className="list-disc list-inside">
              <li>React</li>
              <li>Accessibility</li>
              <li>Design</li>
              <li>Educational Tech</li>
              <li>Game Development</li>
              <li>Web Development</li>
            </ul>
          </Card>
          <Card className="row-span-1 col-span-2">
            <h3 className="text-lg font-bold">Fun Facts</h3>
            <ul className="list-disc list-inside">
              <li>I love to cook and experiment with new recipes.</li>
              <li>
                I enjoy playing video games, especially those with rich
                narratives and immersive worlds.
              </li>
              <li>
                I got a reasonable-sized collection of LEGO sets and comic
                books, which I love to display and show off.
              </li>
              <li>
                I have a passion for photography and enjoy capturing moments in
                nature and urban settings.
              </li>
              <li>
                I enjoy worldbuilding and creating immersive experiences,
                whether in games or through storytelling.
              </li>
            </ul>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
