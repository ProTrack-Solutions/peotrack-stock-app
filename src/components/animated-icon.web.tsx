import { View } from 'react-native';
import { Easing, Keyframe } from 'react-native-reanimated';

import { Animated } from '@/components/ui/animated';
import { Image } from '@/components/ui/image';

const DURATION = 300;

export function AnimatedSplashOverlay() {
  return null;
}

const keyframe = new Keyframe({
  0: {
    transform: [{ scale: 0 }],
  },
  60: {
    transform: [{ scale: 1.2 }],
    easing: Easing.elastic(1.2),
  },
  100: {
    transform: [{ scale: 1 }],
    easing: Easing.elastic(1.2),
  },
});

const logoKeyframe = new Keyframe({
  0: {
    opacity: 0,
  },
  60: {
    transform: [{ scale: 1.2 }],
    opacity: 0,
    easing: Easing.elastic(1.2),
  },
  100: {
    transform: [{ scale: 1 }],
    opacity: 1,
    easing: Easing.elastic(1.2),
  },
});

const glowKeyframe = new Keyframe({
  0: {
    transform: [{ rotateZ: '-180deg' }, { scale: 0.8 }],
    opacity: 0,
  },
  [DURATION / 1000]: {
    transform: [{ rotateZ: '0deg' }, { scale: 1 }],
    opacity: 1,
    easing: Easing.elastic(0.7),
  },
  100: {
    transform: [{ rotateZ: '7200deg' }],
  },
});

export function AnimatedIcon() {
  return (
    <View className="h-32 w-32 items-center justify-center">
      <Animated.View
        entering={glowKeyframe.duration(60 * 1000 * 4)}
        className="absolute h-[201px] w-[201px]">
        <Image className="h-[201px] w-[201px]" source={require('@/assets/images/logo-glow.png')} />
      </Animated.View>

      <Animated.View className="absolute h-32 w-32" entering={keyframe.duration(DURATION)}>
        <div className="h-32 w-32 rounded-[40px] bg-[linear-gradient(180deg,#3C9FFE,#0274DF)]" />
      </Animated.View>

      <Animated.View
        className="items-center justify-center"
        entering={logoKeyframe.duration(DURATION)}>
        <Image className="h-[71px] w-[76px] absolute" source={require('@/assets/images/expo-logo.png')} />
      </Animated.View>
    </View>
  );
}
