import { TagItem } from "@/types/tagTypes";
import {
  PersonArmsSpreadIcon,
  RobotIcon,
  AtomIcon,
  PaletteIcon,
  FigmaLogoIcon,
  GitMergeIcon,
  GithubLogoIcon,
  FileCodeIcon,
  BrowserIcon,
  CircuitryIcon,
  UsersIcon,
  DatabaseIcon,
  GameControllerIcon,
  BugIcon,
  LegoIcon,
  PottedPlantIcon,
  PersonSimpleHikeIcon,
  CookingPotIcon,
  MusicNoteIcon,
  BookIcon,
  FlaskIcon,
  PersonIcon,
  ScrollIcon,
  WrenchIcon,
  StarIcon,
} from "@phosphor-icons/react/dist/ssr";

const variantIcons = {
  tech: <FlaskIcon weight="duotone" className="inline-block" />,
  human: <PersonIcon weight="duotone" className="inline-block" />,
  topic: <ScrollIcon weight="duotone" className="inline-block" />,
  tool: <WrenchIcon weight="duotone" className="inline-block" />,
  hobby: <StarIcon weight="duotone" className="inline-block" />,
};


const icons = {
  a11y: <PersonArmsSpreadIcon weight="duotone" className="inline-block" />,
  robot: <RobotIcon weight="duotone" className="inline-block" />,
  atom: <AtomIcon weight="duotone" className="inline-block" />,
  palette: <PaletteIcon weight="duotone" className="inline-block" />,
  figma: <FigmaLogoIcon weight="duotone" className="inline-block" />,
  git: <GitMergeIcon weight="duotone" className="inline-block" />,
  github: <GithubLogoIcon weight="duotone" className="inline-block" />,
  "file-code": <FileCodeIcon weight="duotone" className="inline-block" />,
  browser: <BrowserIcon weight="duotone" className="inline-block" />,
  circuit: <CircuitryIcon weight="duotone" className="inline-block" />,
  users: <UsersIcon weight="duotone" className="inline-block" />,
  db: <DatabaseIcon weight="duotone" className="inline-block" />,
  controller: <GameControllerIcon weight="duotone" className="inline-block" />,
  bug: <BugIcon weight="duotone" className="inline-block" />,
  lego: <LegoIcon weight="duotone" className="inline-block" />,
  "potted-plant": <PottedPlantIcon weight="duotone" className="inline-block" />,
  hiking: <PersonSimpleHikeIcon weight="duotone" className="inline-block" />,
  cooking: <CookingPotIcon weight="duotone" className="inline-block" />,
  song: <MusicNoteIcon weight="duotone" className="inline-block" />,
  book: <BookIcon weight="duotone" className="inline-block" />,
};

export default function Tag({
  tag,
}: {
  tag: TagItem;
}) {
  const selectedIcon = () => {
    if (tag.icon && tag.icon in icons) {
      return icons[tag.icon as keyof typeof icons];
    }
    return variantIcons[tag.variant ?? "tool"];
  };

  return (
    <span
      className={
        "tag rounded-full  px-2 py-0.5 inline-flex items-center gap-1"
      }
    >
      {selectedIcon()}
      {tag.text}
    </span>
  );
}
