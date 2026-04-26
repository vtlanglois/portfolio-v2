import Image from "next/image";
import Hero from "../components/sections/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="p-16">Skills</section>
      <section className="p-16">Experience</section>
      <section className="p-16">Projects</section>
    </>
  );
}
