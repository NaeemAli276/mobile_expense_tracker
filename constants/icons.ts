import * as LucideIcons from 'lucide-react-native';
import type { LucideIcon } from 'lucide-react-native';

// Type guard to check if a value is a Lucide icon component
function isLucideIcon(value: unknown): value is LucideIcon {
  return typeof value === 'function';
}

/**
 * Get a Lucide icon component by its name.
 * @param name - Icon name in PascalCase, e.g. "Home", "Settings", "ArrowRight"
 * @returns The icon component, or undefined if not found
 */
export function getLucideIcon(name: string): LucideIcon | undefined {
  const icon = (LucideIcons as Record<string, unknown>)[name];

  if (!isLucideIcon(icon)) {
    console.warn(`Lucide icon "${name}" not found.`);
    return undefined;
  }

  return icon;
}