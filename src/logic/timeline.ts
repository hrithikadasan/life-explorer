import type { ExtendedLifeTemplate, LifeTemplate, TimelineEvent } from "../types";
import { getRandomItem } from "./utils";

const AGE_MILESTONES = [18, 22, 25, 30, 40] as const;

/**
 * Type-guard: check if template has extended fields.
 */
function isExtended(t: LifeTemplate): t is ExtendedLifeTemplate {
  return "education" in t && "career" in t && "locations" in t;
}

/**
 * Convert a life template into a sequence of timeline events.
 * If the template has extended fields the descriptions are richer;
 * otherwise the original simple logic is used (backward compat).
 */
export function generateTimeline(
  template: LifeTemplate,
  field: string
): TimelineEvent[] {
  if (isExtended(template)) {
    return generateRichTimeline(template, field);
  }
  return generateSimpleTimeline(template, field);
}

/** Original simple logic — unchanged output format. */
function generateSimpleTimeline(
  template: LifeTemplate,
  field: string
): TimelineEvent[] {
  const city = getRandomItem(template.cities);
  const mood = getRandomItem(template.moods);

  return [
    {
      age: AGE_MILESTONES[0],
      title: `Discover ${field}`,
      description: `A new world of ${field.toLowerCase()} awaits — the journey begins here`,
    },
    {
      age: AGE_MILESTONES[1],
      title: template.degree[0],
      description: "An undergraduate chapter about to unfold",
    },
    {
      age: AGE_MILESTONES[2],
      title: template.careers[0],
      description: `Step into the first professional role in ${field.toLowerCase()}`,
    },
    {
      age: AGE_MILESTONES[3],
      title: `${template.careers[1]} in ${city}`,
      description: `A new chapter opens in ${city} — growth on the horizon`,
    },
    {
      age: AGE_MILESTONES[4],
      title: template.careers[2],
      description: `The path leads to senior leadership · Outlook: ${mood.toLowerCase()}`,
    },
  ];
}

/** Richer descriptions using extended template data. */
function generateRichTimeline(
  t: ExtendedLifeTemplate,
  field: string
): TimelineEvent[] {
  const college = getRandomItem(t.education.colleges);
  const degree = getRandomItem(t.education.degree);
  const spec = getRandomItem(t.specialization);
  const entryRole = getRandomItem(t.career.entry);
  const midRole = getRandomItem(t.career.mid);
  const seniorRole = getRandomItem(t.career.senior);
  const studyCity = getRandomItem(t.locations.study);
  const workCity = getRandomItem(t.locations.work);
  const globalCity = getRandomItem(t.locations.global);
  const balance = getRandomItem(t.lifestyle.workLifeBalance);
  const stress = getRandomItem(t.lifestyle.stress);

  return [
    {
      age: AGE_MILESTONES[0],
      title: `Explore ${field}`,
      description: `Imagine heading to ${studyCity} to discover the world of ${field.toLowerCase()}`,
    },
    {
      age: AGE_MILESTONES[1],
      title: degree,
      description: `Picture earning this from ${college} · Specializing in ${spec}`,
    },
    {
      age: AGE_MILESTONES[2],
      title: entryRole,
      description: `Your first opportunity as ${entryRole.toLowerCase()} — diving into ${spec.toLowerCase()}`,
    },
    {
      age: AGE_MILESTONES[3],
      title: `${midRole} in ${workCity}`,
      description: `A potential leap to ${midRole.toLowerCase()} · Life in ${workCity} awaits`,
    },
    {
      age: AGE_MILESTONES[4],
      title: seniorRole,
      description: `Could become ${seniorRole.toLowerCase()} · Envision life in ${globalCity} · Balance: ${balance.toLowerCase()} · Intensity: ${stress.toLowerCase()}`,
    },
  ];
}

// -------------------------------------------------------
// Variant generation (safe / risky)
// -------------------------------------------------------

/**
 * Generate safe and risky timeline variants from an extended template.
 * Falls back to duplicating the standard timeline when extended data
 * is unavailable, so callers always get a valid result.
 */
export function generateVariants(
  template: LifeTemplate,
  field: string
): { safe: TimelineEvent[]; risky: TimelineEvent[] } {
  if (!isExtended(template)) {
    const fallback = generateSimpleTimeline(template, field);
    return { safe: fallback, risky: fallback };
  }

  return {
    safe: generateSafeTimeline(template, field),
    risky: generateRiskyTimeline(template, field),
  };
}

/** Stable, conventional career progression. */
function generateSafeTimeline(
  t: ExtendedLifeTemplate,
  field: string
): TimelineEvent[] {
  const college = t.education.colleges[0]; // top-ranked
  const degree = t.education.degree[0];
  const spec = t.specialization[0];
  const workCity = t.locations.work[0];
  const globalCity = t.locations.global[0];
  const balance = t.lifestyle.workLifeBalance[0];

  return [
    {
      age: AGE_MILESTONES[0],
      title: `Explore ${field}`,
      description: `Picture enrolling at ${college} to study ${field.toLowerCase()} · A steady foundation ahead`,
    },
    {
      age: AGE_MILESTONES[1],
      title: degree,
      description: `Imagine graduating near the top at ${college} · Focusing on ${spec}`,
    },
    {
      age: AGE_MILESTONES[2],
      title: t.career.entry[0],
      description: `A door opens at a top firm as ${t.career.entry[0].toLowerCase()} in ${workCity}`,
    },
    {
      age: AGE_MILESTONES[3],
      title: `${t.career.mid[0]} in ${workCity}`,
      description: `A steady rise toward ${t.career.mid[0].toLowerCase()} · Stability and growth await`,
    },
    {
      age: AGE_MILESTONES[4],
      title: t.career.senior[0],
      description: `The path could lead to ${t.career.senior[0].toLowerCase()} in ${globalCity} · Balance: ${balance.toLowerCase()} · Secure and fulfilling`,
    },
  ];
}

/** Unconventional, risk-taking career path. */
function generateRiskyTimeline(
  t: ExtendedLifeTemplate,
  field: string
): TimelineEvent[] {
  const spec = getRandomItem(t.specialization);
  const globalCity = getRandomItem(t.locations.global);
  const stress = getRandomItem(t.lifestyle.stress);

  return [
    {
      age: AGE_MILESTONES[0],
      title: `Leap into ${field}`,
      description: `What if you skip the mainstream and chase ${field.toLowerCase()} on your own terms?`,
    },
    {
      age: AGE_MILESTONES[1],
      title: `Self-taught ${field}`,
      description: `Imagine mastering it through online courses & open-source — no traditional degree needed`,
    },
    {
      age: AGE_MILESTONES[2],
      title: `Freelance ${field} Specialist`,
      description: `Picture freelancing in ${spec.toLowerCase()} — unpredictable yet thrilling`,
    },
    {
      age: AGE_MILESTONES[3],
      title: `Startup Founder`,
      description: `Envision co-founding a ${field.toLowerCase()} startup — high risk, boundless potential`,
    },
    {
      age: AGE_MILESTONES[4],
      title: `Industry Disruptor`,
      description: `You could reshape the field from ${globalCity} · Intensity: ${stress.toLowerCase()} · An unconventional triumph`,
    },
  ];
}
