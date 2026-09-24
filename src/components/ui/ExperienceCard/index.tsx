import {
  MapPinSimpleAreaIcon,
  TimerIcon,
  CalendarDotsIcon,
} from "@phosphor-icons/react/dist/ssr";
import { ExperienceItem } from "@/types/experienceTypes";
import Card from "../Card";
import TagList from "../TagList";

export default function ExperienceCard({
  experience,
}: {
  experience: ExperienceItem;
}) {
  const skillsLabelId = `${experience.id}-skills-label`;
  return (
    <Card className={`flex flex-col gap-2 ${experience.isTimelineItem ? "timeline" : ""}`}>
      <div className="flex flex-row items-center justify-between gap-1 flex-wrap">
        <h3 className="text-xl font-semibold text-balance">
          {experience.role} at <i>{experience.company}</i>
        </h3>
        <span className="inline-flex items-center gap-1 justify-around">
        <CalendarDotsIcon className="colored-icon" weight="duotone" aria-hidden />
        <p>{experience.dates}</p>
        </span>
      </div>
      <p className="text-sm inline-flex items-center gap-1">
        <MapPinSimpleAreaIcon className="colored-icon" weight="duotone" aria-hidden />
        {experience.location} •
        <TimerIcon className="colored-icon" weight="duotone" aria-hidden />
        {experience.duration}
      </p>
      <div className="flex flex-col gap-2">
        {experience.descriptions.map((description, index) => (
          <div key={`${experience.id}-description-${index}`}>{description}</div>
        ))}
      </div>
      <span id={skillsLabelId} className="sr-only">
        Skills for {experience.role} at {experience.company}
      </span>
      <TagList labelledBy={skillsLabelId} tags={experience.tags} />
    </Card>
  );
}