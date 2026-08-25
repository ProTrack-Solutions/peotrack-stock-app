/**
 * The app is light-only for now, so this always resolves to 'light'
 * regardless of the browser's system setting. Swap this out if dark mode
 * support is added later.
 */
export function useColorScheme() {
  return 'light' as const;
}
