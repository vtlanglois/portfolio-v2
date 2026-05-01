import "./styles.css";

export default function Card({
  size = "medium",
  children,
  className,
}: {
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`glass-card ${size} ${className} `}>{children}</div>;
}
