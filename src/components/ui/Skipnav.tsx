import Card from "./Card";

export default function Skipnav() {
  return (
    <Card
      size="small"
      variation="heading"
      className=" absolute top-0 left-0 z-50 w-full -translate-y-[200px] p-3 !rounded-t-none text-center font-bold underline focus-within:translate-y-0 motion-safe:transition-transform motion-safe:duration-200"
    >
      <a href="#main">Skip to Main Content</a>
    </Card>
  );
}
