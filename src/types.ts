/** A single event on a life timeline */
export interface TimelineEvent {
  age: number;
  title: string;
  description: string;
}

/** Template defining a life path */
export interface LifeTemplate {
  degree: string[];
  careers: string[];
  cities: string[];
  moods: string[];
}

/** Extended template with richer data */
export interface ExtendedLifeTemplate extends LifeTemplate {
  education: {
    degree: string[];
    colleges: string[];
  };
  specialization: string[];
  career: {
    entry: string[];
    mid: string[];
    senior: string[];
  };
  locations: {
    study: string[];
    work: string[];
    global: string[];
  };
  lifestyle: {
    workLifeBalance: string[];
    stress: string[];
  };
}

/** Map of option names to templates */
export type TemplateMap = Record<string, LifeTemplate>;

/** App view mode */
export type ViewMode = "input" | "split";

/** Variant type for safe/risky paths */
export type Variant = "safe" | "risky";

/** Full app state */
export interface AppState {
  inputValue: string;
  options: [string, string] | null;
  timelines: {
    left: TimelineEvent[];
    right: TimelineEvent[];
  } | null;
  variants: {
    left: { safe: TimelineEvent[]; risky: TimelineEvent[] };
    right: { safe: TimelineEvent[]; risky: TimelineEvent[] };
  } | null;
  variant: Variant;
  viewMode: ViewMode;
  error: string | null;
}
