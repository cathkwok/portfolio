import type { TimelineEntry } from "../types";
import { education } from "./education";
import { jobs } from "./jobs";
import { projects } from "./projects";

export const timeline: TimelineEntry[] = [...projects, ...jobs, ...education];
