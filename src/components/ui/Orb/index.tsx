import "./styles.css";

interface OrbProps extends React.HTMLAttributes<HTMLElement> {
  tag: React.ElementType;
  children: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}

export default function Orb({
  tag,
  children,
  className,
  ...rest
}: OrbProps) {
  const Tag = tag || "div";
  return (
    <Tag
      className={`orb rounded-full opacity-80 hover:scale-125 p-2 transition duration-300 motion-reduce:transition-none motion-reduce:transform-none ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
