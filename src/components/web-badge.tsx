import { version } from 'expo/package.json';

import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

import { Image } from '@/components/ui/image';

export function WebBadge() {
  return (
    <ThemedView className="items-center gap-two p-five">
      <ThemedText type="code" themeColor="textSecondary" className="text-center">
        v{version}
      </ThemedText>
      <Image
        source={require('@/assets/images/expo-badge.png')}
        className="w-[123px] aspect-[123/24]"
      />
    </ThemedView>
  );
}
