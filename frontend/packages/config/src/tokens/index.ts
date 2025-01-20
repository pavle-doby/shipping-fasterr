import { createTokens } from 'tamagui';
import { colors } from './colors';
import { RADIUS_TOKENS } from './radius';
import { SIZE_TOKENS } from './size';
import { Z_INDEX } from './zIndex';

/**
 * Tokens values are based on tailwindcss values.
 *
 * `true` prop is default value for that token group.
 */
export const CUSTOM_TOKENS = createTokens({
  color: {
    // Returning flat object values
    ...Object.values(colors)
      .map((color) => color)
      .reduce((curr, val) => ({ ...curr, ...val }), {}),

    background: colors.base.base,
    color: colors.base.baseContrast,
  },
  radius: {
    ...RADIUS_TOKENS,
    true: RADIUS_TOKENS.lg, // 8px
  },
  size: {
    ...SIZE_TOKENS,
    true: SIZE_TOKENS[10], // 40px
  },
  space: {
    ...SIZE_TOKENS,
    true: SIZE_TOKENS[2], // 8px
  },
  zIndex: {
    ...Z_INDEX,
  },
});
