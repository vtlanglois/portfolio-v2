export default function Stack({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`grid auto-rows-auto gap-4 ${className}`}>{children}</div>
  );
}
