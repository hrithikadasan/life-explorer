/**
 * Parse "Option A vs Option B" into two capitalized options.
 * Returns a tuple or throws a descriptive error.
 */
export function parseInput(input: string): [string, string] {
  const trimmed = input.trim();

  if (!trimmed) {
    throw new Error("Input cannot be empty.");
  }

  const lower = trimmed.toLowerCase();

  if (!lower.includes("vs")) {
    throw new Error('Use format: Option A vs Option B');
  }

  const parts = lower.split("vs").map((s) => s.trim());

  if (parts.length !== 2 || !parts[0] || !parts[1]) {
    throw new Error('Use format: Option A vs Option B');
  }

  return [capitalize(parts[0]), capitalize(parts[1])];
}

function capitalize(str: string): string {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
