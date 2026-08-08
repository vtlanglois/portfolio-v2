import { ThemeIcon } from "../ThemeIcon";
import "./styles.css";
import Card from "@/components/ui/Card";

export default function ThemeCard({
  theme,
  children,
}: {
  theme: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="row-span-3 grid grid-rows-subgrid">
      <ThemePalette theme={theme} />
      <h3 className="inline-flex w-full items-center justify-between text-xl font-bold capitalize text-balance">
        {theme}
        <ThemeIcon theme={theme} size={24} />
      </h3>
      <div className="text-pretty">{children}</div>
    </Card>
  );
}

function ThemePalette({ theme }: { theme: string }) {
  return (
    <div
      className="theme-palette flex flex-row gap-0 items-center"
      data-theme={theme}
    >
      <div className="block-sky-top" />
      <div className="block-sky-bottom" />
      <div className="block-hill-far" />
      <div className="block-hill-mid" />
      <div className="block-hill-near" />
      <div className="block-section-2"></div>
      <div className="block-section-3"></div>
      <div className="block-section-4"></div>
      <div className="block-section-5"></div>
      <div className="block-footer"></div>
    </div>
  );
}
