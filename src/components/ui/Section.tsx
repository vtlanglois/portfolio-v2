export default function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`bg-[#3ea032] py-8 ${className}`}>{children}</section>
  );
}
