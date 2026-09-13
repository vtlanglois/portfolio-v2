export type TagVariant = "tech" | "human" | "topic" | "tool" | "hobby";

/** Used to pair similar tags together */
export type TagGroup =
  | "languages"
  | "frameworks"
  | "css"
  | "backend"
  | "version control"
  | "hardware"
  | "misc"
  | "tool"
  | "ai"
  | "soft"
  | "interpersonal"
  | "topic"
  | "hobby";

export interface TagItem {
  /** The tag text */
  text: string;
  /** Optional variant for the tag */
  variant?: TagVariant;
  /** Group name for the tag */
  group: TagGroup;
}
