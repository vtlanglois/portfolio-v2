"use client";
import { useState } from "react";
import Orb from "./Orb";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Card from "./Card";
import { ListIcon } from "@phosphor-icons/react/dist/ssr";

const variants: Variants = {
  initial: (d: number) => ({
    opacity: 0,
    y: d * 20,
    scale: 0.25,
    filter: "blur(4px)",
  }),
  animate: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
  exit: (d: number) => ({
    opacity: 0,
    y: d * -20,
    scale: 0.25,
    filter: "blur(4px)",
  }),
};

export default function Nav() {
  const [hidden, setHidden] = useState(true);

  const toggleHidden = () => {
    setHidden(!hidden);
  };

  return (
    <div className="relative">
      <Card
        size="small"
        variation="interface"
        className="absolute lg:fixed top-4 right-4 flex flex-row z-10"
        aria-expanded={!hidden}
        aria-label="Theme selector. Click to expand or collapse theme options."
        aria-description="Allows you to change the website theme. Click the arrows to cycle through themes, or the shuffle icon to select a random theme."
      >
        <AnimatePresence initial={hidden}>
          {!hidden && (
            <motion.span
              initial={{ opacity: 0, scale: 0, width: 0 }}
              animate={{ opacity: 1, scale: 1, width: "auto" }}
              exit={{ opacity: 0, scale: 0, width: 0 }}
              transition={{ type: "spring", duration: 0.35, bounce: 0 }}
              style={{
                transformOrigin: "right center",
                overflow: hidden ? "hidden" : "inherit",
              }}
              className="flex flex-row gap-2 "
              key="box"
            >
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </motion.span>
          )}
        </AnimatePresence>
                <Orb
          tag="button"
          className="dark:bg-slate-600/80 bg-slate-200/80 hover:bg-slate-400 !hover:scale-100 active:scale-90"
          onClick={toggleHidden}
        >
          <ListIcon size={32} />
        </Orb>
      </Card>
    </div>
  );
}
