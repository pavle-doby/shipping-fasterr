import { config } from '@my/config';

export type Conf = typeof config;

declare module '@my/ui' {
  type TamaguiCustomConfig = Conf;
}
