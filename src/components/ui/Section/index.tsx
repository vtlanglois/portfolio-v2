import "./styles.css"

const dividerPaths = {
  standard:
    "M0 30 L0 14 Q120 6 240 12 Q340 18 440 6 Q560 0 680 10 L680 30 Z",
  wave: "M0 30 L0 20 Q80 8 180 14 Q260 18 320 8 Q380 2 460 10 Q560 18 680 8 L680 30 Z",
  rolling:
    "M0 30 L0 8 Q70 26 150 12 Q230 -2 320 14 Q410 30 500 10 Q590 -4 680 16 L680 30 Z",
} as const;

export type SectionDividerVariant = keyof typeof dividerPaths;

export function SectionDivider({
  variant = "standard",
}: {
  variant?: SectionDividerVariant;
}) {
  return (
    <div className="section-divider">
      <svg
        width="100%"
        viewBox="0 0 680 25"
        preserveAspectRatio="xMidYMax slice"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block" }}
        fill="var(--section-color)"
        className="mb-[-4px]"
        aria-hidden="true"
      >
        <path
          d={dividerPaths[variant]}
          fill="var(--section-color)"
          className="section-hill"
        ></path>
      </svg>
    </div>
  );
}

export default function Section({
  id,
  children,
  className,
  sectionNumber,
}: {
  id: string,
  children: React.ReactNode;
  className?: string;
  sectionNumber?: number;
}) {
  return (
    <section
      id={id}
      className={`page-section pb-4 ${className}`}
      data-section={sectionNumber}
    >
      {children}
    </section>
  );
}
