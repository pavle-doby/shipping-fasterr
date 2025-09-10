import { useIsomorphicLayoutEffect } from '@my/ui';
import { ColorScheme, useRootTheme, useThemeSetting } from '@tamagui/next-theme';
import { useState } from 'react';

export interface UseThemeReturn {
  theme: string | undefined;
  set: (theme: ColorScheme) => void;
  toggle: () => void;
}

/**
 * Custom hook to manage theme settings.
 *
 * // Web version
 * // ! This one should be imported, and on native platform it will be replaced with `useTheme.native.tsx`
 */
export const useTheme = (): UseThemeReturn => {
  const [theme, setTheme] = useRootTheme();
  const settings = useThemeSetting();

  const [clientTheme, setClientTheme] = useState<string | undefined>('dark');

  useIsomorphicLayoutEffect(() => {
    setClientTheme(settings.forcedTheme || settings.current || theme);
  }, [settings.current, settings.resolvedTheme]);

  return {
    theme: clientTheme,
    set: (theme: ColorScheme) => {
      settings.set(theme);
      setTheme(theme);
    },
    toggle: () => {
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      settings.set(newTheme);
      setTheme(newTheme);
    },
  };
};
