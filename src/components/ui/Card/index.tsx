import "./styles.css";

export default function Card({
  size = "medium",
  variation = "default",
  children,
  className,
  ...rest
}: {
  size?: "small" | "medium" | "large";
  variation?: "default" | "heading" | "interface";
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`glass-card ${size} ${variation} ${className} `} {...rest}>
      {children}
    </div>
  );
}
