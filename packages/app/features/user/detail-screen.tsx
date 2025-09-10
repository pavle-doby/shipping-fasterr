import { Button, Paragraph, YStack } from '@my/ui';
import { ChevronLeft } from '@tamagui/lucide-icons';
import { useRouter } from 'solito/navigation';

export function UserDetailScreen({ id }: { id: string }) {
  const router = useRouter();
  if (!id) {
    return null;
  }
  return (
    <YStack
      flex={1}
      jc="center"
      ai="center"
      gap="$4"
      bg="$background"
    >
      <Paragraph
        ta="center"
        fow="700"
        color="$info"
      >{`User ID: ${id}`}</Paragraph>
      <Button
        icon={ChevronLeft}
        onPress={() => router.back()}
      >
        Go Home
      </Button>
    </YStack>
  );
}
