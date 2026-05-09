import { TagItem } from "@/types/tagTypes";
// import { Icon } from "@phosphor-icons/react";
// import {
//   PersonArmsSpreadIcon,
//   RobotIcon,
//   AtomIcon,
//   PaletteIcon,
//   FigmaLogoIcon,
//   GitMergeIcon,
//   GithubLogoIcon,
//   BrowserIcon,
//   CircuitryIcon,
//   UsersIcon,
//   DatabaseIcon,
//   GameControllerIcon,
//   BugIcon,
//   LegoIcon,
//   PottedPlantIcon,
//   PersonSimpleHikeIcon,
//   CookingPotIcon,
//   MusicNoteIcon,
//   BookIcon,
//   FlaskIcon,
//   PersonIcon,
//   ScrollIcon,
//   WrenchIcon,
//   StarIcon,
// } from "@phosphor-icons/react/dist/ssr";

// const variantIcons = {
//   tech: FlaskIcon,
//   human: PersonIcon,
//   topic: ScrollIcon,
//   tool: WrenchIcon,
//   hobby: StarIcon,
// };


// const icons = {
//   a11y: PersonArmsSpreadIcon,
//   robot: RobotIcon,
//   atom: AtomIcon,
//   palette: PaletteIcon,
//   figma: FigmaLogoIcon,
//   git: GitMergeIcon,
//   github: GithubLogoIcon,
//   "file-code": BrowserIcon,
//   circuit: CircuitryIcon,
//   users: UsersIcon,
//   db: DatabaseIcon,
//   controller: GameControllerIcon,
//   bug: BugIcon,
//   lego: LegoIcon,
//   "potted-plant": PottedPlantIcon,
//   hiking: PersonSimpleHikeIcon,
//   cooking: CookingPotIcon,
//   song: MusicNoteIcon,
//   book: BookIcon,
// };

export default function Tag({
  tag,
}: {
  tag: TagItem;
}) {
  // const selectedIcon = () => {
  //   let IconComponent: Icon;
  //   if (tag.icon && tag.icon in icons) {
  //     IconComponent = icons[tag.icon as keyof typeof icons];
  //     return <IconComponent weight="duotone" className="inline-block" />
  //   }
  //     IconComponent = variantIcons[tag.variant ?? "tool"];
  //  return <IconComponent weight="duotone" className="inline-block" />
  // };

  return (
    <span
      className={
        "tag rounded-full  px-2 py-0.5 inline-flex items-center gap-1 text-sm"
      }
    >
      {/* {selectedIcon()} */}
      {tag.text}
    </span>
  );
}
