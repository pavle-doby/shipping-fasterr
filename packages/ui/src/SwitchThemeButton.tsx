import { useState } from 'react';
import { Button, useIsomorphicLayoutEffect } from 'tamagui';
import { useThemeSetting, useRootTheme } from '@tamagui/next-theme';

export const SwitchThemeButton = () => {
  const themeSetting = useThemeSetting();
  const [theme] = useRootTheme();

  const [clientTheme, setClientTheme] = useState<string | undefined>('dark');

  useIsomorphicLayoutEffect(() => {
    setClientTheme(themeSetting.forcedTheme || themeSetting.current || theme);
  }, [themeSetting.current, themeSetting.resolvedTheme]);

  return (
    <Button
      bg="$primary"
      color="$primary-contrast"
      hoverStyle={{
        bg: '$primary-500',
      }}
      pressStyle={{
        bg: '$primary-700',
      }}
      onPress={themeSetting.toggle}
    >
      Toggle Theme {`[${clientTheme}]`}
    </Button>
  );
};
