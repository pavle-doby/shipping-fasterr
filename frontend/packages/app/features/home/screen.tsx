import {
  Anchor,
  Button,
  H1,
  Paragraph,
  Separator,
  Sheet,
  useToastController,
  SwitchThemeButton,
  XStack,
  YStack,
} from '@my/ui';
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons';
import { themeSettingNative } from 'app/utils/themeSettingNative.native';
import { useState } from 'react';
import { Platform } from 'react-native';
import { useLink } from 'solito/navigation';

export function HomeScreen() {
  const linkProps = useLink({
    href: `/user/nate`,
  });

  return (
    <YStack f={1} jc="center" ai="center" gap="$2" p="$4" bg="$background">
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
        {Platform.OS !== 'web' && (
          <Button
            bg={'$primary'}
            color={'$primary-contrast'}
            onPress={() => themeSettingNative.toggle()}
          >
            Toggle Theme
          </Button>
        )}
      </XStack>

      <YStack gap="$4">
        <H1 ta="center">Welcome to Tamagui.</H1>
        <Paragraph ta="center">
          Here's a basic starter to show navigating from one screen to another.
        </Paragraph>
        <Separator />
        <Paragraph ta="center">
          This screen uses the same code on Next.js and React Native.
        </Paragraph>
        <Separator />
      </YStack>

      <Button
        backgroundColor="$info"
        color="$info-contrast"
        paddingHorizontal="$8"
        paddingVertical="$4"
        hoverStyle={{ bg: '$info-700', borderColor: '$info-700' }}
        pressStyle={{ bg: '$info-500' }}
      >
        Prodji sa mnom kroz
      </Button>

      <Button
        backgroundColor="$error"
        color="$error-contrast"
        hoverStyle={{ bg: '$error-700', borderColor: '$error-700' }}
        pressStyle={{ bg: '$error-500' }}
      >
        Crveno
      </Button>

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
        size="$6"
        icon={open ? ChevronDown : ChevronUp}
        circular
        onPress={() => setOpen((x) => !x)}
      />
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
            <Anchor col="$info" href="https://twitter.com/natebirdman" target="_blank">
              @natebirdman,
            </Anchor>
            <Anchor
              color="$accent"
              href="https://github.com/tamagui/tamagui"
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
