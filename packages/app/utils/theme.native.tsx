import { Appearance } from 'react-native';

/**
 * Theme settings for native platforms.
 *
 * ! This only works on native platforms.
 * !! If you remove Appearance event listener from root `_layout.tsx`, this will not work.
 */
export const themeNative = (() => {
  return {
    /**
     * Toggles the theme between `light` and `dark`.
     */
    toggle() {
      const colorScheme = Appearance.getColorScheme();
      const newColorScheme = colorScheme === 'dark' ? 'light' : 'dark';
      Appearance.setColorScheme(newColorScheme);
    },
    set: Appearance.setColorScheme,
  };
})();
