import { Button, useThemeName } from 'tamagui';
import { themeNative } from 'app/utils/theme.native';

export function SwitchThemeButtonNative(): JSX.Element {
  const theme = useThemeName();

  return (
    <Button
      bg={'$primary'}
      color={'$primary-contrast'}
      onPress={() => themeNative.toggle()}
    >
      {`Toggle Theme [${theme}]`}
    </Button>
  );
}
