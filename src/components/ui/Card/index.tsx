import "./styles.css";

export default function Card({
  size = "medium",
  variation = "default",
  tag = "div",
  children,
  className,
  ...rest
}: {
  size?: "small" | "medium" | "large";
  variation?: "default" | "heading" | "interface";
  tag?: React.ElementType;
  children: React.ReactNode;
  className?: string;
}) {
  const Tag = tag || "div";
  return (
    <Tag className={`glass-card ${size} ${variation} ${className} `} {...rest}>
      {children}
    </Tag>
  );
}
