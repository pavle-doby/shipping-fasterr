import { YStack, styled } from 'tamagui';

/**
 * Example Component
 */
export const MyComponent = styled(YStack, {
  name: 'MyComponent',
  backgroundColor: 'red',

  variants: {
    blue: {
      true: {
        backgroundColor: 'blue',
      },
    },
  } as const,
});
