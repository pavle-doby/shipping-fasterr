import { useEffect, useState } from 'react';
import { Appearance, useColorScheme } from 'react-native';
import {
  DefaultTheme,
  type Theme as NavTheme,
  ThemeProvider as NavigationThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { Provider } from 'app/provider';
import { NativeToast } from '@my/ui/src/NativeToast';
import { DARK_THEME, LIGHT_THEME } from '@my/config/src/theme/index';
import { Theme } from '@my/ui';
import { config } from '@my/ui';

export const unstable_settings = {
  // Ensure that reloading on `/user` keeps a back button present.
  initialRouteName: 'Home',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [interLoaded, interError] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  useEffect(() => {
    if (interLoaded || interError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync();
    }
  }, [interLoaded, interError]);

  if (!interLoaded && !interError) {
    return null;
  }

  return <RootLayout />;
}

function RootLayout() {
  const colorScheme = useColorScheme();

  const [themeName, setThemeName] = useState(colorScheme || 'dark');

  Appearance.addChangeListener(({ colorScheme }) => {
    setThemeName(colorScheme || 'dark');
  });

  const theme = themeName === 'dark' ? DARK_THEME : LIGHT_THEME;

  const navTheme: NavTheme = {
    ...DefaultTheme,
    dark: colorScheme === 'dark',
    colors: {
      primary: theme.primary,
      background: theme.background,
      card: theme.background,
      text: theme.color,
      border: theme.borderColor,
      notification: theme.info,
    },
    fonts: {
      regular: {
        fontFamily: config.fonts.body.family,
        fontWeight: '400',
      },
      medium: {
        fontFamily: config.fonts.body.family,
        fontWeight: '500',
      },
      bold: {
        fontFamily: config.fonts.heading.family,
        fontWeight: '600',
      },
      heavy: {
        fontFamily: config.fonts.heading.family,
        fontWeight: '800',
      },
    },
  };

  return (
    <Provider>
      <Theme name={themeName}>
        <NavigationThemeProvider value={navTheme}>
          <Stack />
          <NativeToast />
        </NavigationThemeProvider>
      </Theme>
    </Provider>
  );
}
