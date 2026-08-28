import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';

import { ThemedText } from '@/components/themed-text';

type FeatureItemProps = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
};

export function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <View className="flex-row items-center gap-three rounded-three bg-white/[0.14] p-three">
      <View className="h-9 w-9 items-center justify-center rounded-two bg-white/[0.18]">
        <Ionicons name={icon} size={18} color="#ffffff" />
      </View>
      <View className="flex-1 gap-half">
        <ThemedText type="smallBold" className="text-white">
          {title}
        </ThemedText>
        <ThemedText type="small" className="text-white/80">
          {description}
        </ThemedText>
      </View>
    </View>
  );
}
