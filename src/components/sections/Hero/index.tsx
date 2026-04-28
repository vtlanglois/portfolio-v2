"use client";
import { useEffect } from "react";
import "./styles.css";
import {
  ArrowDownIcon,
  CodepenLogoIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { CODEPEN_URL, GITHUB_URL, LINKEDIN_URL } from "@/constants";

export default function Hero() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const hills = document.querySelectorAll("path.hill");
      hills.forEach((hill, index) => {
        const speed = (index + 1) * 0.03; // Different speed for each layer
        hill.setAttribute("transform", `translate(0, ${scrollY * speed})`);
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="hero">
      <div className="hero__hills">
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
            {/* <filter id="noise-far">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="2 3"
                numOctaves="3"
                stitchTiles="stitch"
                seed="1"
              />
              <feColorMatrix type="saturate" values="0" />
              <feBlend in="SourceGraphic" in2="turbulence" mode="soft-light"  />
              <feComposite in2="SourceGraphic" operator="in" />
            </filter>
            <filter id="noise-mid">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="2 2.9"
                numOctaves="3"
                stitchTiles="stitch"
                seed="2"
              />
              <feColorMatrix type="saturate" values="0" />
              <feBlend in="SourceGraphic" in2="turbulence" mode="soft-light" />
              <feComposite in2="SourceGraphic" operator="in" />
            </filter>
            <filter id="noise-near">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="2 2.7"
                numOctaves="3"
                stitchTiles="stitch"
                seed="3"
              />
              <feColorMatrix type="saturate" values="0" />
              <feBlend in="SourceGraphic" in2="turbulence" mode="soft-light" />
              <feComposite in2="SourceGraphic" operator="in" />
            </filter> */}
          </defs>
          <g clipPath="url(#hillsClip)">
            <path
              d="M-10 200 Q120 155 240 175 Q340 192 450 138 Q540 100 620 145 Q655 162 690 155 L690 400 L-10 400 Z"
              fill="#93bfa8"
              opacity="0.55"
              filter="url(#noise-far)"
              className="hill"
            >
              <animate
                attributeName="d"
                dur="13s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
                values="
  M-10 200 Q120 155 240 175 Q340 192 450 138 Q540 100 620 145 Q655 162 690 155 L690 400 L-10 400 Z;
  M-10 203 Q120 158 240 172 Q340 189 450 141 Q540 103 620 142 Q655 159 690 158 L690 400 L-10 400 Z;
  M-10 200 Q120 155 240 175 Q340 192 450 138 Q540 100 620 145 Q655 162 690 155 L690 400 L-10 400 Z
"
              />
            </path>

            <path
              d="M-10 235 Q100 210 220 218 Q340 228 460 168 Q550 128 640 172 Q665 185 690 180 L690 400 L-10 400 Z"
              fill="#5dab6e"
              opacity="0.75"
              filter="url(#noise-mid)"
              className="hill"
            >
              <animate
                attributeName="d"
                dur="9s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
                values="
  M-10 235 Q100 210 220 218 Q340 228 460 168 Q550 128 640 172 Q665 185 690 180 L690 400 L-10 400 Z;
  M-10 238 Q100 213 220 215 Q340 225 460 171 Q550 131 640 169 Q665 182 690 183 L690 400 L-10 400 Z;
  M-10 235 Q100 210 220 218 Q340 228 460 168 Q550 128 640 172 Q665 185 690 180 L690 400 L-10 400 Z
"
              />
            </path>

            <path
              d="M-10 258 Q80 185 180 210 Q260 240 370 228 Q480 215 580 235 Q640 244 690 238 L690 9999 L-10 9999 Z"
              fill="#3ea032"
              filter="url(#noise-near)"
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
        <div className="hero__card lg:w-2/3 flex flex-col gap-6">
          <div>
            <p>Hello! My name is</p>
            <h1 className="text-4xl lg:text-6xl font-bold italic text-balance">
              Vincent Langlois
            </h1>
          </div>
          <p>
            Senior Software Engineer @ Eli Lilly <br />
            Engineer by trade, tinkerer by nature | Building things, breaking
            things, learning everything
          </p>
          <div className="flex flex-row gap-12 justify-center items-center">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full opacity-80 bg-blue-700 hover:bg-blue-800 hover:scale-125  p-2 transition duration-300 motion-reduce:transition-none motion-reduce:transform-none"
              title="Link to Vincent's LinkedIn profile"
            >
              <LinkedinLogoIcon
                size={32}
                weight="duotone"
                className="text-slate-50"
              />
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full opacity-80 bg-purple-500 hover:bg-purple-600 hover:scale-125 p-2 transition duration-300 motion-reduce:transition-none motion-reduce:transform-none"
              title="Link to Vincent's GitHub profile"
            >
              <GithubLogoIcon
                size={32}
                weight="duotone"
                className="text-slate-50 "
              />
            </a>
            <a
              href={CODEPEN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full opacity-80 bg-gray-800 hover:bg-gray-900 p-2  hover:scale-125 transition duration-300 motion-reduce:transition-none motion-reduce:transform-none"
              title="Link to Vincent's Codepen profile"
            >
              <CodepenLogoIcon
                size={32}
                weight="duotone"
                className="text-slate-50"
              />
            </a>
          </div>
        </div>
        <div className="hero__scroll flex flex-col items-center">
          Scroll to see more
          <ArrowDownIcon size={16} weight="duotone" />
        </div>
      </div>
    </section>
  );
}
