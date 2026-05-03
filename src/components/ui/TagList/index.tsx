import { TagItem } from "@/types/tagTypes";
import Tag from "../Tag";
import "./styles.css";

export default function TagList({
  tags,
  direction,
}: {
  tags: TagItem[];
  direction: "row" | "col";
}) {
  const dir = direction === "row" ? "flex-row" : "flex-row lg:flex-col";
  return (
    <ul className={`tag-list flex ${dir} flex-wrap gap-2 list-inside`}>
      {tags.map((tag) => {
        return (
          <li key={`tag-${tag.text}`}>
            {" "}
            <Tag tag={tag} />
          </li>
        );
      })}
    </ul>
  );
}
