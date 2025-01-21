import { createTokens } from 'tamagui';
import { COLOR_TOKENS_LIGHT } from './colors';
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
    ...COLOR_TOKENS_LIGHT,

    background: COLOR_TOKENS_LIGHT['base'],
    color: COLOR_TOKENS_LIGHT['base-contrast'],
  },
  radius: {
    ...RADIUS_TOKENS,
    true: RADIUS_TOKENS.lg, // 8px
  },
  size: {
    ...SIZE_TOKENS,
    true: 'auto',
  },
  space: {
    ...SIZE_TOKENS,
    true: SIZE_TOKENS[2], // 8px
  },
  zIndex: {
    ...Z_INDEX,
  },
});
