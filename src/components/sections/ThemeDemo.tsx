import Container from "../ui/Container";
import Section from "../ui/Section";
import Stack from "../ui/Stack";
import Card from "../ui/Card";
import {
  BlueprintIcon,
  MountainsIcon,
  GlobeIcon,
  LightbulbIcon,
} from "@phosphor-icons/react/dist/ssr";
import ThemeCard from "../ui/ThemeCard";

export default function ThemeDemo() {
  return (
    <Section id="themes" sectionNumber={1}>
      <Container>
        <Stack>
          <Card
            variation="heading"
            className="flex flex-row flex-wrap items-center justify-between"
          >
            <h2 className="text-3xl font-bold leading-none">Design Approach</h2>
            <BlueprintIcon size={30} weight="duotone" />
          </Card>
          <Card className="flex flex-col gap-3">
            <p>
              This site is the fourth version of my portfolio website. During
              each stage of my web dev career, they served to teach me various
              web tools and practices. However, the sites didn&apos;t really
              stand out. They were websites with blue / white backgrounds that
              had an About, Education, Experience, and Projects sections. Not to
              say those are <i>bad</i>, but after doing it for the third time I
              wanted a change and a <b>challenge</b>.
            </p>
            <p>
              I settled on a few challenges I wanted to beat. These included:
            </p>
            <ol className="list-decimal list-inside">
              <li>
                <b>Themes</b>: Since my first site, I&apos;ve always wanted to
                add a feature where the user could change the site&apos;s theme
                to another, beyond just Light and Dark Mode. I had some
                experience working with themes from building a colorblind
                palette accessibility setting for a game project, so I wanted to
                try out a creative version on a website.
              </li>
              <li>
                <b>Unique look</b>: I didn&apos;t want another site with a
                single background color. I wanted something that reminded me of
                expressive sites from my childhood but built with modern tools
                and a better understanding of site accessibility.
              </li>
              <li>
                <b>Great feel:</b> all of my sites were pretty static without
                many complex parts. This was intentional, as I wanted the sites
                out to let people know who I was without burning myself out. Now
                that I got a few years in my career, I wanted to showcase that
                here rather than hope people see my work out in the wild. I
                wanted this portfolio to feel great to use and navigate.
              </li>
            </ol>
            <p>
              These challenges landed me to decide on a natural / Frutiger Aero
              themed background with a set of hill SVGs and a standard white
              card + black text foreground. This allowed for the following:
            </p>
            <ul className="list-disc list-inside">
              <li>
                Plenty of theme ideas. Hills could be seen as plains, water,
                deserts, desserts, clouds, snows, and so much more with a simple
                color change! Plus, I do enjoy 2000s internet aesthetics, so it
                all helped inspire me through this project.
              </li>
              <li>
                Unique look without reducing accessibility. Black text on a blue
                background is hard to read. However, with all the black text
                shown on top of white cards, the background could be whatever it
                wanted and the text would still pass contrast standards. Plus,
                it complemented the Frutiger Aero theme with the squircle look!
              </li>
            </ul>
            <p>
              I&apos;m quite happy with how this site turned out, so much so I
              don&apos;t really see myself throwing this out for quite a while.
              It still has many improvements to make, such as optimization, but
              those will help me become an even better engineer! I&apos;ll
              welcome a good challenge, especially ones with a calming theme.
            </p>
          </Card>
          <Card
            variation="heading"
            className="flex flex-row flex-wrap items-center justify-between"
          >
            <h2 className="text-3xl font-bold leading-none">Nature Themes</h2>
            <MountainsIcon size={30} weight="duotone" />
          </Card>
          <div className="grid grid-rows-1 lg:grid-cols-4 gap-4">
            <ThemeCard theme="bliss">
              <p>
                The site&apos;s default theme. Based on the default Windows XP
                wallpaper. My handed-down, childhood PC had this exact image!
              </p>
            </ThemeCard>
            <ThemeCard theme="sunset">
              <p>
                This theme serves as a gentle, yet impactful showcase of the
                theming system by setting the default theme to a sunset.
              </p>
            </ThemeCard>
            <ThemeCard theme="spring">
              <p>
                I wanted a theme for each season. Spring was the hardest to
                figure out, but I landed on wildflowers. Colors are based on
                Indiana wildflowers I&apos;ve seen.
              </p>
            </ThemeCard>
            <ThemeCard theme="winter">
              <p>
                My favorite season! This theme transforms the hills into mounds
                of snow. Based on winter walks and photos of local parks.
              </p>
            </ThemeCard>
            <ThemeCard theme="arctic">
              <p>
                I liked winter so much I gave it <i>2</i> themes! This ones a
                bit bluer and earlier in the day. Has northern lights in Dark
                Mode!
              </p>
            </ThemeCard>
            <ThemeCard theme="misty">
              <p>
                Based on rainy forests and driving in southern Indiana. The
                darker colors make the hills feel bigger IMO. Inspired by Turkey
                Run State Park too!
              </p>
            </ThemeCard>
            <ThemeCard theme="ocean">
              <p>
                The second theme made for the site! I saw the green hills and
                immediately thought that they could be waves!
              </p>
            </ThemeCard>
            <ThemeCard theme="dunes">
              <p>
                The third theme made for the site! Second idea after seeing the
                hills was that this could also be a desert. Named after the
                Indiana Dunes National Park.
              </p>
            </ThemeCard>
            <ThemeCard theme="cloudy">
              <p>
                I wanted clouds in the sky above the hills. I realized this
                would limit the possible themes, so I settled on a cloud theme
                instead. Is stormy in Dark Mode!
              </p>
            </ThemeCard>
            <ThemeCard theme="lava">
              <p>
                This was supposed to be the fall theme! Having each hill be a
                different autumn leaf color ended up not being good. But it{" "}
                <i>did</i> look like lava!
              </p>
            </ThemeCard>
            <ThemeCard theme="galaxy">
              <p>
                This theme&apos;s brightness peaks in the middle, much like
                galaxies! This transitions the user from the nature themes to
                the online themes, so wanted something that worked well with
                Vaporwave.
              </p>
            </ThemeCard>
          </div>
          <Card
            variation="heading"
            className="flex flex-row flex-wrap items-center justify-between"
          >
            <h2 className="text-3xl font-bold leading-none">
              Online Aesthetic Themes
            </h2>
            <GlobeIcon size={30} weight="duotone" />
          </Card>
          <div className="grid grid-rows-1 lg:grid-cols-4 gap-4">
            <ThemeCard theme="vaporwave">
              <p>
                I couldn&apos;t go 10 feet on the 2010s internet w/o seeing
                these colors. This theme&apos;s purpleness works well as a
                transition from Galaxy.
              </p>
            </ThemeCard>
            <ThemeCard theme="metro">
              <p>
                I can&apos;t pinpoint <i>what</i> from my childhood that had
                this theme, but I distinctly remember the boomboxes and the
                bright greens and blues.
              </p>
            </ThemeCard>
            <ThemeCard theme="aqua">
              Aqua started as an attempt at an underwater theme mixing the Ocean
              and Dunes theme. The colors didn&apos;t really end up working, but
              the ocean &quot;sky&quot; reminded me a bit of Apple&apos;s Aqua
              theme.
            </ThemeCard>
            <ThemeCard theme="dorfic">
              <p>
                Personally, I&apos;m not the biggest fan of DORFic. However, the
                orange background goes very well the white cards used in Light
                Mode. Plus, adds another warm theme.
              </p>
            </ThemeCard>
          </div>
          <Card
            variation="heading"
            className="flex flex-row flex-wrap items-center justify-between"
          >
            <h2 className="text-3xl font-bold leading-none">Misc Themes</h2>
            <LightbulbIcon size={30} weight="duotone" />
          </Card>
          <div className="grid grid-rows-1 lg:grid-cols-3 gap-4">
            <ThemeCard theme="blocks">
              <p>
                LEGOs were the initial design approach I had for the site before
                settling on nature and 2000s internet aesthetics. Wanted to
                include it as a theme to show a &quot;What if?&quot; version of
                the site. Has an easter egg where all UI elements become blocky.
              </p>
            </ThemeCard>
            <ThemeCard theme="neopolitan">
              <p>
                As I was working on the site, I wanted to include something that
                would use the hills in a way that <i>wasn&apos;t</i> based on
                nature or 2000s internet aesthetics. From that, a friend told me
                the hills looked like ice cream.
              </p>
            </ThemeCard>
            <ThemeCard theme="plain">
              <p>
                I didn&apos;t know what the last theme would be, so a plain
                theme both helps to inform the user about the end of themes list
                and easily transition the user back to Bliss.
              </p>
            </ThemeCard>
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
