import { useState } from 'react';
import { Button, useIsomorphicLayoutEffect } from 'tamagui';
import { useThemeSetting, useRootTheme } from '@tamagui/next-theme';

export const SwitchThemeButton = () => {
  const themeSetting = useThemeSetting();
  const [theme] = useRootTheme();

  const [clientTheme, setClientTheme] = useState<string | undefined>('light');

  useIsomorphicLayoutEffect(() => {
    setClientTheme(themeSetting.forcedTheme || themeSetting.current || theme);
  }, [themeSetting.current, themeSetting.resolvedTheme]);

  return (
    <Button
      bg="transparent"
      color="$primary"
      borderColor={'$primary'}
      hoverStyle={{
        borderColor: '$primary',
      }}
      pressStyle={{
        borderColor: '$primary',
      }}
      onPress={themeSetting.toggle}
    >
      Change theme: {clientTheme}
    </Button>
  );
};
