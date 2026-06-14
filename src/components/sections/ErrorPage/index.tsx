import Card from "@/components/ui/Card";
import "./styles.css";
import Stack from "@/components/ui/Stack";
import Orb from "@/components/ui/Orb";
import { HouseIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <section className="error">
      <Stack className="items-center justify-center ">
        <Card className="flex flex-col items-start justify-center gap-4">
          <h1 className="text-4xl lg:text-6xl font-bold italic text-balance">
            Oops!
          </h1>
          <p>
            Something went wrong. This page is either invalid or no longer
            available.
          </p>
          <Link href="/">
            <Orb tag="span" className="bg-(--hill-far) color-(contrast-color(var(--hill-far)))">
              <HouseIcon />
              Return Home
            </Orb>
          </Link>
        </Card>
      </Stack>
    </section>
  );
}
