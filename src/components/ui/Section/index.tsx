import "./styles.css"

export default function Section({
  children,
  className,
  sectionNumber,
}: {
  children: React.ReactNode;
  className?: string;
  sectionNumber?: number;
}) {
  return (
    <section
      className={`page-section pb-4 ${className}`}
      data-section={sectionNumber}
    >
      {children}
    </section>
  );
}
