import "./styles.css"

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
