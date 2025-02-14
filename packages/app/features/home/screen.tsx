import {
  Anchor,
  Button,
  Paragraph,
  Separator,
  Sheet,
  useToastController,
  SwitchThemeButton,
  SwitchThemeButtonNative,
  XStack,
  YStack,
  SizableText,
} from '@my/ui';
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons';
import { useState } from 'react';
import { Platform } from 'react-native';
import { useLink } from 'solito/navigation';

export function HomeScreen() {
  const linkProps = useLink({
    href: `/user/pavle`,
  });

  return (
    <YStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      gap="$2"
      p="$4"
      bg="$background"
    >
      <XStack
        pos="absolute"
        w="100%"
        t="$6"
        gap="$6"
        jc="center"
        fw="wrap"
        $sm={{ pos: 'relative', t: 0 }}
      >
        {Platform.OS === 'web' && <SwitchThemeButton />}
        {Platform.OS !== 'web' && <SwitchThemeButtonNative />}
      </XStack>

      <YStack gap="$4">
        <Paragraph fontWeight={'600'} ta="center">
          Welcome to
        </Paragraph>
        <YStack>
          <SizableText
            ta="center"
            fontWeight={'700'}
            fontSize={'$10'}
            lineHeight={'$10'}
            color={'$primary'}
          >
            Shipping
          </SizableText>
          <SizableText
            ta="center"
            fontWeight={'700'}
            fontSize={'$10'}
            lineHeight={'$10'}
            color={'$accent'}
          >
            Fasterr
          </SizableText>
        </YStack>

        <Paragraph ta="center">Here's you can explore navigation and themes</Paragraph>

        <Separator />
        <Paragraph ta="center">
          This screen uses the same code on Next.js and React Native.
        </Paragraph>
        <Separator />
      </YStack>

      <Button {...linkProps}>Link to user</Button>

      <SheetDemo />
    </YStack>
  );
}

function SheetDemo() {
  const toast = useToastController();

  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState(0);

  return (
    <>
      <Button
        bg={'$secondary'}
        color={'$secondary-contrast'}
        icon={open ? ChevronDown : ChevronUp}
        onPress={() => setOpen((x) => !x)}
      >
        Sheet
      </Button>
      <Sheet
        modal
        animation="medium"
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay
          animation="lazy"
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <Sheet.Handle bg="$gray8" />
        <Sheet.Frame ai="center" jc="center" gap="$2">
          <XStack gap="$2">
            <Paragraph ta="center">Made by</Paragraph>
            <Anchor col="$info" href="https://x.com/pavle_doby" target="_blank">
              @pavle_doby,
            </Anchor>
            <Anchor
              color="$accent"
              href="https://github.com/pavle-doby/shipping-fasterr"
              target="_blank"
              rel="noreferrer"
            >
              give it a ⭐️
            </Anchor>
          </XStack>

          <Button
            size="$6"
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false);
              toast.show('Sheet closed!', {
                message: 'Just showing how toast works...',
              });
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  );
}
