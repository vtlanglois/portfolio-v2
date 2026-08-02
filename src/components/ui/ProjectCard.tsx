import { TagItem } from "@/types/tagTypes";
import Card from "./Card";
import TagList from "./TagList";
import GitHubLink from "./GitHubLink";

export default function ProjectCard({
  title,
  summary,
  tags,
  link,
  altText,
  className,
}: {
  title: string;
  summary: string;
  tags: TagItem[];
  link: string;
  altText: string;
  className: string;
}) {
  return (
    <Card className={className}>
      <h3 className="text-xl font-semibold ">{title}</h3>
      <p>{summary}</p>
      <TagList labelledBy="skills-tag-label" tags={tags} />
      <div className="text-end">
        <GitHubLink href={link} alt={altText} />
      </div>
    </Card>
  );
}
