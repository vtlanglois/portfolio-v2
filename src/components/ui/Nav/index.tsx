"use client";
import { ReactNode, useState, useEffect } from "react";
import "./styles.css";
import Orb from "../Orb";
import { AnimatePresence, motion } from "framer-motion";
import Card from "../Card";
import { ListIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const desktopVariants = {
  initial: { opacity: 0, scale: 0, width: 0 },
  animate: { opacity: 1, scale: 1, width: "auto" },
  exit: { opacity: 0, scale: 0, width: 0 },
};

const mobileVariants = {
  initial: { opacity: 0, y: -16, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -16, scale: 0.95 },
};

export default function Nav() {
  const [hidden, setHidden] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);

    const onChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggleHidden = () => {
    setHidden(!hidden);
  };

  function NavLink({
    href,
    className,
    children,
  }: {
    href: string;
    className?: string;
    children: ReactNode;
  }) {
    return (
      <li>
        <Link
          href={href}
          className={`nav-link font-bold rounded-full flex w-full md:w-auto items-center justify-center md:justify-start opacity-80 hover:scale-125 p-2 transition duration-300 motion-reduce:transition-none motion-reduce:transform-none dark:bg-slate-600 bg-slate-200 hover:bg-slate-400 !hover:scale-100 active:scale-90 ${className ? className : ""}`}
        >
          {children}
        </Link>
      </li>
    );
  }

  return (
    <nav className="relative">
      <Card
        size="small"
        variation="interface"
        className="absolute fixed top-4 right-4 flex flex-row z-10"
        aria-expanded={!hidden}
      >
        <AnimatePresence initial={hidden}>
          {!hidden && (
            <motion.ul
              initial={
                isMobile ? mobileVariants.initial : desktopVariants.initial
              }
              animate={
                isMobile ? mobileVariants.animate : desktopVariants.animate
              }
              exit={isMobile ? mobileVariants.exit : desktopVariants.exit}
              transition={{ type: "spring", duration: 0.35, bounce: 0 }}
              style={{
                transformOrigin: "right center",
                overflow: hidden ? "hidden" : "inherit",
              }}
              className={`flex ${isMobile ? "flex-col items-stretch absolute top-full right-0 pt-2 nav-menu" : "flex-row"} gap-2 items-center`}
              key="box"
            >
              <NavLink href="/">Home</NavLink>

              <NavLink href="/projects" className="md:mr-2">
                Projects
              </NavLink>
            </motion.ul>
          )}
        </AnimatePresence>
        <Orb
          tag="button"
          className="dark:bg-slate-600/80 bg-slate-200/80 hover:bg-slate-400 !hover:scale-100 active:scale-90"
          aria-label={hidden ? "Open navigation" : "Close navigation"}
          onClick={toggleHidden}
        >
          <ListIcon size={32} />
        </Orb>
      </Card>
    </nav>
  );
}
