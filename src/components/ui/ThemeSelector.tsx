"use client";
import { THEMES } from "@/constants";
import { useEffect, useState } from "react";
import Orb from "./Orb";
import { AnimatePresence, motion, Variants } from "framer-motion";
import {
  ArrowRightIcon,
  CactusIcon,
  CloudIcon,
  FlowerIcon,
  HorseIcon,
  IceCreamIcon,
  LegoIcon,
  LightningIcon,
  MeteorIcon,
  MinusIcon,
  PlanetIcon,
  PlantIcon,
  PlusIcon,
  PrinterIcon,
  RainbowCloudIcon,
  ShuffleIcon,
  SnowflakeIcon,
  SquareIcon,
  SunHorizonIcon,
  TreeEvergreenIcon,
  WavesIcon,
  WindIcon,
} from "@phosphor-icons/react";
import Card from "./Card";

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

export default function ThemeSelector() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("bliss");
  const [direction, setDirection] = useState(1);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    setTheme(document.documentElement.getAttribute("data-theme") ?? "bliss");
    setMounted(true);
  }, []);

  const nextTheme = () => {
    const currentIndex = THEMES.indexOf(theme);
    const newTheme = THEMES[(currentIndex + 1) % THEMES.length];
    document.documentElement.setAttribute("data-theme", newTheme);
    window.history.replaceState(null, "", `?theme=${newTheme}`);
    setDirection(1);
    setTheme(newTheme);
  };

  const previousTheme = () => {
    const currentIndex = THEMES.indexOf(theme);
    const newTheme = THEMES[(currentIndex - 1 + THEMES.length) % THEMES.length];
    document.documentElement.setAttribute("data-theme", newTheme);
    window.history.replaceState(null, "", `?theme=${newTheme}`);
    setDirection(-1);
    setTheme(newTheme);
  };

  const selectRandomTheme = () => {
    const currentIndex = THEMES.indexOf(theme);
    const currentTheme = THEMES[currentIndex];
    let randomTheme;
    do {
      randomTheme = THEMES[Math.floor(Math.random() * THEMES.length)];
    } while (randomTheme === currentTheme);
    if (currentIndex > THEMES.indexOf(randomTheme)) {
      setDirection(-1);
    } else {
      setDirection(1);
    }
    document.documentElement.setAttribute("data-theme", randomTheme);
    window.history.replaceState(null, "", `?theme=${randomTheme}`);
    setTheme(randomTheme);
  };

  const toggleHidden = () => {
    setHidden(!hidden);
  };

  return (
    <Card
      size="small"
      variation="interface"
      className="absolute lg:fixed top-4 left-4 flex flex-row"
      aria-expanded={!hidden}
      aria-label="Theme selector. Click to expand or collapse theme options."
      aria-description="Allows you to change the website theme. Click the arrows to cycle through themes, or the shuffle icon to select a random theme."
    >
      <Orb
        tag="div"
        className={
          theme !== "rainbow"
            ? "bg-(--hill-near) hover:bg-(--hill-far) mr-2 !hover:scale-100"
            : "rainbow-orb filter hover:hue-rotate-30 mr-2 !hover:scale-100"
        }
        title={`Current theme: ${theme}.`}
      >
        {mounted ? (
          <AnimatePresence mode="popLayout" initial={false} custom={direction}>
            <motion.div
              key={theme}
              custom={direction}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ type: "spring", duration: 0.35, bounce: 0 }}
            >
              <span className="sr-only">Current Theme: {theme}</span>
              <ThemeIcon theme={theme} />
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="w-8 h-8 rounded-full bg-white/20 animate-pulse" />
        )}
      </Orb>
      <AnimatePresence initial={hidden}>
        {!hidden && (
          <motion.span
            initial={{ opacity: 0, scale: 0, width: 0 }}
            animate={{ opacity: 1, scale: 1, width: "auto" }}
            exit={{ opacity: 0, scale: 0, width: 0 }}
            transition={{ type: "spring", duration: 0.35, bounce: 0 }}
            style={{
              transformOrigin: "left center",
              overflow: hidden ? "hidden" : "inherit",
            }}
            className="flex flex-row gap-2 "
            key="box"
          >
            <Orb
              tag="button"
              className="dark:bg-slate-600/80 bg-slate-200/80 hover:bg-slate-400 !hover:scale-100 active:scale-90"
              title="Previous theme"
              onClick={previousTheme}
            >
              <span className="sr-only">Previous theme</span>
              <ArrowRightIcon
                size={32}
                weight="duotone"
                className="rotate-180"
              />
            </Orb>
            <Orb
              tag="button"
              className="dark:bg-slate-600/80 bg-slate-200/80 hover:bg-slate-400 !hover:scale-100 active:scale-90"
              title="Next theme"
              onClick={nextTheme}
            >
              <span className="sr-only">Next theme</span>
              <ArrowRightIcon size={32} weight="duotone" />
            </Orb>
            <Orb
              tag="button"
              className="dark:bg-slate-600/80 bg-slate-200/80 hover:bg-slate-400 !hover:scale-100 active:scale-90"
              title="Random theme"
              onClick={selectRandomTheme}
            >
              <span className="sr-only">Random theme</span>
              <ShuffleIcon size={32} weight="duotone" />
            </Orb>
          </motion.span>
        )}
      </AnimatePresence>

      <Orb
        tag="button"
        className="dark:bg-slate-600/80 bg-slate-200/80 hover:bg-slate-400 !hover:scale-100 ml-2 "
        title={hidden ? "Expand theme selector" : "Collapse Theme Selector"}
        onClick={toggleHidden}
      >
        <span className="sr-only">
          {hidden ? "Expand theme selector" : "Collapse Theme Selector"}
        </span>
        <AnimatePresence mode="popLayout">
          <motion.div
            key={hidden ? "plus" : "minus"}
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {hidden ? <PlusIcon size={32} /> : <MinusIcon size={32} />}
          </motion.div>
        </AnimatePresence>
      </Orb>
    </Card>
  );
}

function ThemeIcon({ theme }: { theme: string }) {
  switch (theme) {
    case "ocean":
      return <WavesIcon size={32} weight="duotone" />;
    case "dunes":
      return <CactusIcon size={32} weight="duotone" />;
    case "lava":
      return <MeteorIcon size={32} weight="duotone" />;
    case "spring":
      return <FlowerIcon size={32} weight="duotone" />;
    case "winter":
      return <SnowflakeIcon size={32} weight="duotone" />;
    case "pink":
      return <HorseIcon size={32} weight="duotone" />;
    case "rainbow":
      return <RainbowCloudIcon size={32} weight="duotone" />;
    case "cmyk":
      return <PrinterIcon size={32} weight="duotone" />;
    case "neopolitan":
      return <IceCreamIcon size={32} weight="duotone" />;
    case "misty":
      return <TreeEvergreenIcon size={32} weight="duotone" />;
    case "blocks":
      return <LegoIcon size={32} weight="duotone" />;
    case "plain":
      return <SquareIcon size={32} weight="duotone" />;
    case "neon":
      return <LightningIcon size={32} weight="duotone" />;
    case "galaxy":
      return <PlanetIcon size={32} weight="duotone" />;
    case "sunset":
      return <SunHorizonIcon size={32} weight="duotone" />;
    case "cloudy":
      return <CloudIcon size={32} weight="duotone" />;
    case "arctic":
      return <WindIcon size={32} weight="duotone" />;
    case "bliss":
    default:
      return <PlantIcon size={32} weight="duotone" />;
  }
}
