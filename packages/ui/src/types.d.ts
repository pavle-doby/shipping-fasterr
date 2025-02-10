import { config } from '@my/config';

export type Conf = typeof config;

declare module 'tamagui' {
  type TamaguiCustomConfig = Conf;
}
