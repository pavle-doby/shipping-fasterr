import { COLOR_TOKENS_DARK, COLOR_TOKENS_LIGHT, ColorTokens } from '../tokens/colors';

// #region Helpers

function getThemeValues(colorTokens: ColorTokens, theme: Record<string, keyof ColorTokens>) {
  const themeValues = {};

  Object.entries(theme).forEach(([key, value]) => {
    themeValues[key] = colorTokens[value];
  });

  return themeValues;
}

// #endregion

/**
 * Dictionary of base theme values.
 *
 * @key - theme key witch value is used in tamagui components by default.
 * @value - color token key.
 */
const BASE_THEME: Record<string, keyof ColorTokens> = {
  background: 'base',
  backgroundHover: 'base-700',
  backgroundPress: 'base-500',
  backgroundFocus: 'base',

  color: 'base-contrast',
  colorHover: 'base-1100',
  colorPress: 'base-contrast',
  colorFocus: 'base-1100',
  placeholderColor: 'neutral',

  borderColor: 'base-contrast',
  borderColorHover: 'base-contrast',
  borderColorFocus: 'base-contrast',
  borderColorPress: 'base-contrast',

  outlineColor: 'base-contrast',

  shadowColor: 'neutral',
  shadowColorHover: 'neutral',
  shadowColorPress: 'neutral-700',
  shadowColorFocus: 'neutral-700',
};

export const LIGHT_THEME = {
  colorTransparent: 'rgba(255,255,255,0)',
  ...getThemeValues(COLOR_TOKENS_LIGHT, BASE_THEME),
  ...COLOR_TOKENS_LIGHT,
};

export const DARK_THEME = {
  colorTransparent: 'rgba(0,0,0,0)',
  ...getThemeValues(COLOR_TOKENS_DARK, BASE_THEME),
  ...COLOR_TOKENS_DARK,
};
