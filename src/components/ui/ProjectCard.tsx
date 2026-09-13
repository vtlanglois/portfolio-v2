import { TagItem } from "@/types/tagTypes";
import Card from "./Card";
import TagList from "./TagList";
import GitHubLink from "./GitHubLink";
import CodePenLink from "./CodePenLink";
import ItchLink from "./ItchLink";

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
      <h3 className="text-xl font-semibold text-balance">{title}</h3>
      <p className="text-pretty">{summary}</p>
      <div className="flex items-start justify-between text-end">
        <TagList labelledBy="skills-tag-label" tags={tags} />
        {link.includes("itch.io") ? (
          <ItchLink href={link} alt={altText} />
        ) : link.includes("github") ? (
          <GitHubLink href={link} alt={altText} />
        ) : (
          <CodePenLink href={link} alt={altText} />
        )}
      </div>
    </Card>
  );
}
