import "./styles.css";

export default function Hero({ children }: { children?: React.ReactNode }) {
  
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
      <div className="hero__content">{children}</div>
    </section>
  );
}
