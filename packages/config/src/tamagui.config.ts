import { createTamagui } from 'tamagui';
import { shorthands } from '@tamagui/shorthands';
import { CUSTOM_TOKENS } from './tokens';
import { DARK_THEME, LIGHT_THEME } from './theme';
import { animations } from './animations';
import { bodyFont, headingFont } from './fonts';
import { defaultConfig } from '@tamagui/config/v4';

export const config = createTamagui({
  ...defaultConfig,
  defaultFont: 'body',
  animations,
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,

  // highly recommended to turn this on if you are using shorthands
  // to avoid having multiple valid style keys that do the same thing
  // we leave it off by default because it can be confusing as you onboard.
  onlyAllowShorthands: false,
  shorthands,

  fonts: {
    body: bodyFont,
    heading: headingFont,
  },
  settings: {
    allowedStyleValues: 'somewhat-strict',
  },
  tokens: CUSTOM_TOKENS,
  themes: {
    light: {
      ...defaultConfig.themes.light,
      ...LIGHT_THEME,
    },
    dark: {
      ...defaultConfig.themes.dark,
      ...DARK_THEME,
    },
  },
  media: {
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },

    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },

    // TODO@media: Set this properly
    aboveMobile: { minWidth: 660 },
    aboveTablet: { minWidth: 800 },
    aboveLaptop: { minWidth: 1020 },

    short: { maxHeight: 820 },
    tall: { minHeight: 820 },

    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  },
});

// for the compiler to find it
export default config;
