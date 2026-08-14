"use client";
import { useEffect } from "react";
import "./styles.css";
import {
  ArrowCircleDownIcon,
  CodepenLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { CODEPEN_URL, GITHUB_URL, LINKEDIN_URL } from "@/constants";
import Card from "@/components/ui/Card";
import Orb from "@/components/ui/Orb";
import GitHubLink from "@/components/ui/GitHubLink";
import Stack from "@/components/ui/Stack";

export default function Hero() {
  useEffect(() => {
    const shouldReduceScroll = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isMobile = window.innerWidth < 768;
    if (shouldReduceScroll || isMobile) return;
    const hills = document.querySelectorAll<SVGPathElement>("path.hill");
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        hills.forEach((hill, index) => {
          const speed = (index + 1) * 0.018;
          hill.style.transform = `translateY(${scrollY * speed}px)`; // CSS transform, GPU-friendly
        });
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Remove SMIL <animate> elements on mount for reduced-motion users and on
  // mobile, where the continuous d-attribute repaint competes with scroll input.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isMobile = window.innerWidth < 768;
    if (prefersReducedMotion || isMobile) {
      const svgs = document.querySelectorAll(".home-hero__hills svg");
      svgs.forEach((svg) => {
        svg
          .querySelectorAll("animate, animateTransform")
          .forEach((el) => el.remove());
      });
    }
  }, []);
  return (
    <section id="hero" className="home-hero">
      <div className="home-hero__hills">
        <svg
          width="100%"
          viewBox="0 0 680 300"
          preserveAspectRatio="xMidYMax slice"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Hero section green hills SVG</title>
          <desc>
            Three layered rolling green hills for a parallax hero section
            background
          </desc>
          <defs>
            <clipPath id="hillsClip">
              <rect x="0" y="0" width="680" height="300" />
            </clipPath>
          </defs>
          <g clipPath="url(#hillsClip)">
            <path
              d="M-10 200 Q120 155 240 175 Q340 192 450 138 Q540 100 620 145 Q655 162 690 155 L690 400 L-10 400 Z"
              fill="var(--hill-far)"
              opacity="0.55"
              className="hill hill-far"
            />

            <path
              d="M-10 235 Q100 210 220 218 Q340 228 460 168 Q550 128 640 172 Q665 185 690 180 L690 400 L-10 400 Z"
              fill="var(--hill-mid)"
              opacity="0.75"
              className="hill hill-mid"
            />

            <path
              d="M-10 258 Q80 185 180 210 Q260 240 370 228 Q480 215 580 235 Q640 244 690 238 L690 9999 L-10 9999 Z"
              fill="var(--hill-near)"
              className="hill"
            >
              <animate
                attributeName="d"
                dur="6s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
                values="
  M-10 258 Q80 185 180 210 Q260 240 370 228 Q480 215 580 235 Q640 244 690 238 L690 9999 L-10 9999 Z;
  M-10 261 Q80 188 180 207 Q260 237 370 231 Q480 218 580 232 Q640 241 690 241 L690 9999 L-10 9999 Z;
  M-10 258 Q80 185 180 210 Q260 240 370 228 Q480 215 580 235 Q640 244 690 238 L690 9999 L-10 9999 Z
"
              />
            </path>
          </g>
        </svg>
      </div>
      <div className="home-hero__content">
        <Stack className="home-hero__card lg:w-2/3">
          <Card className="flex flex-col gap-4">
            <div>
              <p>Hello! I am</p>
              <h1 className="text-4xl lg:text-6xl font-bold italic text-balance">
                Vincent Langlois
              </h1>
            </div>
            <p className="text-pretty">
              Engineer by trade, tinkerer by nature. <br />
              Building things, breaking things, learning everything.
            </p>
          </Card>

          <Card size="small" variation="interface">
            <div className="flex flex-row gap-6 lg:gap-12 justify-center items-center flex-wrap">
              <Orb
                tag="a"
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="dark:bg-slate-600 bg-slate-200 hover:bg-blue-800 hover:text-slate-50"
                title="Link to Vincent Langlois's LinkedIn profile (opens in new tab)"
              >
                <LinkedinLogoIcon
                  size={32}
                  weight="duotone"
                />
              </Orb>
              <GitHubLink
                href={GITHUB_URL}
                alt="Link to Vincent Langlois's GitHub profile (opens in new tab)"
              />
              <Orb
                tag="a"
                href={CODEPEN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="dark:bg-slate-600 bg-slate-200 hover:bg-gray-900 hover:text-slate-50"
                title="Link to Vincent Langlois's Codepen profile (opens in new tab)"
              >
                <CodepenLogoIcon
                  size={32}
                  weight="duotone"
                />
              </Orb>
            </div>
          </Card>
        </Stack>
        <div className="home-hero__scroll flex flex-col items-center">
          Scroll to see more
          <ArrowCircleDownIcon size={24} weight="duotone" />
        </div>
      </div>
    </section>
  );
}
