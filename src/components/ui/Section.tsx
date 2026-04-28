export default function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`bg-(--hill-near) py-8 ${className}`}>
      {children}
    </section>
  );
}
