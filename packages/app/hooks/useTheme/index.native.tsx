import { Appearance } from 'react-native';
import { type ColorScheme, useRootTheme } from '@tamagui/next-theme';
import { UseThemeReturn } from '.';

/**
 * Custom hook to manage theme settings.
 *
 * // Native version
 */
export const useTheme = (): UseThemeReturn => {
  const [theme, setTheme] = useRootTheme({ fallback: Appearance.getColorScheme() || 'dark' });

  return {
    theme,
    set: (theme: ColorScheme) => {
      Appearance.setColorScheme(theme);
      setTheme(theme);
    },
    toggle: () => {
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      Appearance.setColorScheme(newTheme);
      setTheme(newTheme);
    },
  };
};
