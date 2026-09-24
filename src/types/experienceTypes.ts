import type { ReactNode } from "react";
import { TagItem } from "./tagTypes";

export interface ExperienceItem {
  /** Unique identifier for the experience */
  id: string;
  /** Job title */
  role: string;
  /** Employer or organization */
  company: string;
  /** Date range shown on the card */
  dates: string;
  /** Location shown on the card */
  location: string;
  /** Length of the experience shown on the card */
  duration: string;
  /** Renderable descriptions of the work */
  descriptions: ReactNode[];
  /** Skills associated with the experience */
  tags: TagItem[];
  /** Whether the card should be connected to the next timeline item */
  isTimelineItem?: boolean;
}