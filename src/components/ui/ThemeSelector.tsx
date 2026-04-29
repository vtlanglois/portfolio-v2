"use client";
import { THEMES } from "@/constants";
import { useEffect, useState } from "react";
import Orb from "./Orb";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { CactusIcon, PlantIcon, WavesIcon } from "@phosphor-icons/react";

export default function ThemeSelector() {
  const [theme, setTheme] = useState("bliss");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const initialTheme = urlParams.get("theme");
    const newTheme = THEMES.includes(initialTheme || "") ? initialTheme! : "bliss";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  }, []);

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const currentThemeIndex = THEMES.indexOf(currentTheme || "bliss");
    const newTheme = THEMES[(currentThemeIndex + 1) % THEMES.length];
    document.documentElement.setAttribute("data-theme", newTheme);
    window.history.replaceState(null, "", `?theme=${newTheme}`);
    setTheme(newTheme);
  };

  const variants: Variants = {
    initial: (d: number) => ({
      opacity: 0,
      x: d * 20,
      scale: 0.25,
      filter: "blur(4px)",
    }),
    animate: { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" },
    exit: (d: number) => ({
      opacity: 0,
      x: d * -20,
      scale: 0.25,
      filter: "blur(4px)",
    }),
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <Orb
      tag="button"
      onClick={toggleTheme}
      className="bg-(--hill-near) hover:bg-(--hill-far)"
      title="Cycle themes: bliss, ocean, dunes"
    >
      <AnimatePresence mode="popLayout" initial={false} custom={1}>
        <motion.div
          key={theme}
          custom={1}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ type: "spring", duration: 0.35, bounce: 0 }}
        >
          <ThemeIcon theme={theme} />
        </motion.div>
      </AnimatePresence>
    </Orb>
  );
}

function ThemeIcon({ theme }: { theme: string }) {
  switch (theme) {
    case "bliss":
      return <PlantIcon size={32} weight="duotone" />;
    case "ocean":
      return <WavesIcon size={32} weight="duotone" />;
    case "dunes":
      return <CactusIcon size={32} weight="duotone" />;
    default:
      return null;
  }
}
