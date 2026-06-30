type ClassValue = string | number | boolean | null | undefined | ClassValue[];
type ClassInput = ClassValue | Record<string, boolean | null | undefined>;

export function cn(...inputs: ClassInput[]): string {
  const classes: string[] = [];

  for (const input of inputs) {
    if (!input) continue;

    if (typeof input === 'string' || typeof input === 'number') {
      classes.push(String(input));
      continue;
    }

    if (Array.isArray(input)) {
      classes.push(cn(...input));
      continue;
    }

    if (typeof input === 'object') {
      for (const [key, value] of Object.entries(input)) {
        if (value) classes.push(key);
      }
    }
  }

  return classes.join(' ').trim();
}
