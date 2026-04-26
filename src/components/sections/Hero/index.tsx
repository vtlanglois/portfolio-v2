"use client";
import { useEffect } from "react";
import "./styles.css";

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
            />
            <path
              d="M-10 230 Q80 165 200 195 Q320 225 430 170 Q520 130 620 180 Q660 200 690 185 L690 400 L-10 400 Z"
              fill="#5ab84a"
              opacity="0.75"
              filter="url(#noise-mid)"
            />
            <path
              d="M-10 258 Q70 205 180 228 Q290 252 400 205 Q490 168 590 210 Q645 232 690 218 L690 9999 L-10 9999 Z"
              fill="#3ea032"
              filter="url(#noise-near)"
            />
          </g>
        </svg>
      </div>
      <div className="hero__content">
        <div className="hero__card lg:w-2/3 flex flex-col gap-6">
        <div>
          <p>Hello! My name is</p>
          <h1 className="text-6xl">Vince Langlois</h1>
        </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            quos velit eligendi delectus sint quas consequatur fugit id ipsam
            corporis? Atque nam quam dolorem eius laudantium unde corporis
            deserunt recusandae?
          </p>
        </div>
        <div className="">
          Scroll to see more
        </div>
      </div>
    </section>
  );
}
