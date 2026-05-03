export default function Tag({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={"tag rounded-full border-2 px-2 py-0.5"}>
      {children}
    </span>
  )
}