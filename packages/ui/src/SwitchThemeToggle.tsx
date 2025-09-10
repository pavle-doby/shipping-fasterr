import { Button } from 'tamagui';
import { useTheme } from 'app/hooks/useTheme';

export const SwitchThemeToggle = () => {
  const { theme, toggle } = useTheme();

  return (
    <Button
      borderColor={'$primary'}
      bg="$primary"
      color="$primary-contrast"
      hoverStyle={{
        borderColor: '$primary',
        bg: '$primary-500',
      }}
      pressStyle={{
        borderColor: '$primary',
        bg: '$primary-700',
      }}
      onPress={toggle}
    >
      Toggle theme [{theme}]
    </Button>
  );
};
