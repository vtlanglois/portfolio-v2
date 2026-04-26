"use client";
import { useEffect } from "react";
import "./styles.css";
import {
  CodepenLogoIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

export default function Hero() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const hills = document.querySelectorAll("path");
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
              d="M-10 200 Q60 130 160 165 Q260 195 370 140 Q460 95 560 150 Q630 185 690 160 L690 400 L-10 400 Z"
              fill="#7ecb6e"
              opacity="0.55"
              filter="url(#noise-far)"
            >
              <animate
                attributeName="d"
                dur="13s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
                values="
  M-10 200 Q60 130 160 165 Q260 195 370 140 Q460 95 560 150 Q630 185 690 160 L690 400 L-10 400 Z;
  M-10 203 Q60 133 160 162 Q260 192 370 143 Q460 98 560 147 Q630 182 690 163 L690 400 L-10 400 Z;
  M-10 200 Q60 130 160 165 Q260 195 370 140 Q460 95 560 150 Q630 185 690 160 L690 400 L-10 400 Z
"
              />
            </path>
            <path
              d="M-10 230 Q80 165 200 195 Q320 225 430 170 Q520 130 620 180 Q660 200 690 185 L690 400 L-10 400 Z"
              fill="#5ab84a"
              opacity="0.75"
              filter="url(#noise-mid)"
            >
              <animate
                attributeName="d"
                dur="9s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
                values="
  M-10 230 Q80 165 200 195 Q320 225 430 170 Q520 130 620 180 Q660 200 690 185 L690 400 L-10 400 Z;
  M-10 233 Q80 168 200 192 Q320 222 430 173 Q520 133 620 177 Q660 197 690 188 L690 400 L-10 400 Z;
  M-10 230 Q80 165 200 195 Q320 225 430 170 Q520 130 620 180 Q660 200 690 185 L690 400 L-10 400 Z
"
              />
            </path>
            <path
              d="M-10 258 Q70 205 180 228 Q290 252 400 205 Q490 168 590 210 Q645 232 690 218 L690 9999 L-10 9999 Z"
              fill="#3ea032"
              filter="url(#noise-near)"
            >
              <animate
                attributeName="d"
                dur="6s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
                values="
  M-10 258 Q70 205 180 228 Q290 252 400 205 Q490 168 590 210 Q645 232 690 218 L690 9999 L-10 9999 Z;
  M-10 261 Q70 208 180 225 Q290 249 400 208 Q490 171 590 207 Q645 229 690 221 L690 9999 L-10 9999 Z;
  M-10 258 Q70 205 180 228 Q290 252 400 205 Q490 168 590 210 Q645 232 690 218 L690 9999 L-10 9999 Z
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
            <h1 className="text-4xl lg:text-6xl bold italic underline text-balance">
              Vincent Langlois
            </h1>
          </div>
          <p>
            Senior Software Engineer @ Eli Lilly <br />
            Engineer by trade, tinkerer by nature <br />
            Building things, breaking things, learning everything
          </p>
          <div className="flex flex-row gap-12 justify-center items-center">
            <a
              href="https://www.linkedin.com/in/vtlanglois/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-blue-700 hover:bg-blue-900 hover:scale-125  p-2 transition-colors transition-transform duration-300"
              title="Link to Vincent's LinkedIn profile"
            >
              <LinkedinLogoIcon
                size={32}
                weight="duotone"
                className="text-slate-50"
              />
            </a>
            <a
              href="https://github.com/vtlanglois"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-purple-500 hover:bg-purple-600 hover:scale-125 p-2 transition-colors transition-transform duration-300"
              title="Link to Vincent's GitHub profile"
            >
              <GithubLogoIcon
                size={32}
                weight="duotone"
                className="text-slate-50 "
              />
            </a>
            <a
              href="https://codepen.io/vtlanglois"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-800 hover:bg-gray-900 p-2  hover:scale-125 transition-colors transition-transform duration-300"
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
        {/* <div className="hero__scroll">Scroll to see more</div> */}
      </div>
    </section>
  );
}
