"use client";
import { useEffect } from "react";
import "./styles.css";
import {
  ArrowDownIcon,
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
    const handleScroll = () => {
      const isMobile = window.innerWidth < 768;
      const scrollY = window.scrollY;
      const hills = document.querySelectorAll("path.hill");
      hills.forEach((hill, index) => {
        const speed = (index + 1) * 0.018 * (isMobile ? 0.6 : 1); // Different speed for each layer
        hill.setAttribute("transform", `translate(0, ${scrollY * speed})`);
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section id="hero" className="hero">
      <div className="hero__hills">
        <svg
          width="100%"
          viewBox="0 0 680 270"
          preserveAspectRatio="xMidYMax slice"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Hero section green hills SVG</title>
          <desc>
            Two layered rolling green hills for a parallax hero section
            background
          </desc>
          <defs>
            <clipPath id="hillsClip">
              <rect x="0" y="0" width="680" height="270" />
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
      <div className="hero__content">
        <Stack className="hero__card lg:w-2/3">
          <Card className="flex flex-col gap-4">
            <h1 className="text-4xl lg:text-6xl font-bold italic text-balance">Projects</h1>
            <p>
              Projects I've worked on, showcasing my skills and experience in web development.
            </p>
          </Card>

        </Stack>
      </div>
    </section>
  );
}
