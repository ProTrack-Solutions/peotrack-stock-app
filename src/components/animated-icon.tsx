import * as SplashScreen from 'expo-splash-screen';
import { useState } from 'react';
import { Dimensions, View } from 'react-native';
import { Easing, Keyframe } from 'react-native-reanimated';
import { scheduleOnRN } from 'react-native-worklets';

import { Animated } from '@/components/ui/animated';
import { Image } from '@/components/ui/image';

const INITIAL_SCALE_FACTOR = Dimensions.get('screen').height / 90;
const DURATION = 600;

export function AnimatedSplashOverlay() {
  const [animate, setAnimate] = useState(false);
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const splashKeyframe = new Keyframe({
    0: {
      transform: [{ scale: 1 }],
      opacity: 1,
    },
    20: {
      opacity: 1,
    },
    70: {
      opacity: 0,
      easing: Easing.elastic(0.7),
    },
    100: {
      opacity: 0,
      transform: [{ scale: 1 }],
      easing: Easing.elastic(0.7),
    },
  });

  const image = <Image className="h-[71px] w-[76px]" source={require('@/assets/images/expo-logo.png')} />;

  return animate ? (
    <Animated.View
      entering={splashKeyframe.duration(DURATION).withCallback((finished) => {
        'worklet';
        if (finished) {
          scheduleOnRN(setVisible, false);
        }
      })}
      className="absolute inset-0 z-[1000] items-center justify-center bg-splash">
      {image}
    </Animated.View>
  ) : (
    <View
      onLayout={() => {
        SplashScreen.hideAsync().finally(() => {
          setAnimate(true);
        });
      }}
      className="absolute inset-0 z-[1000] items-center justify-center bg-splash">
      {image}
    </View>
  );
}

const keyframe = new Keyframe({
  0: {
    transform: [{ scale: INITIAL_SCALE_FACTOR }],
  },
  100: {
    transform: [{ scale: 1 }],
    easing: Easing.elastic(0.7),
  },
});

const logoKeyframe = new Keyframe({
  0: {
    transform: [{ scale: 1.3 }],
    opacity: 0,
  },
  40: {
    transform: [{ scale: 1.3 }],
    opacity: 0,
    easing: Easing.elastic(0.7),
  },
  100: {
    opacity: 1,
    transform: [{ scale: 1 }],
    easing: Easing.elastic(0.7),
  },
});

const glowKeyframe = new Keyframe({
  0: {
    transform: [{ rotateZ: '0deg' }],
  },
  100: {
    transform: [{ rotateZ: '7200deg' }],
  },
});

export function AnimatedIcon() {
  return (
    <View className="z-[100] h-32 w-32 items-center justify-center">
      <Animated.View
        entering={glowKeyframe.duration(60 * 1000 * 4)}
        className="absolute h-[201px] w-[201px]">
        <Image className="h-[201px] w-[201px]" source={require('@/assets/images/logo-glow.png')} />
      </Animated.View>

      <Animated.View
        entering={keyframe.duration(DURATION)}
        className="absolute h-32 w-32 rounded-[40px]"
        // `experimental_backgroundImage` renders a real CSS/native linear
        // gradient. There's no Tailwind/NativeWind utility for it yet, so it
        // stays as an inline style rather than a className.
        style={{ experimental_backgroundImage: `linear-gradient(180deg, #3C9FFE, #0274DF)` }}
      />
      <Animated.View
        className="items-center justify-center"
        entering={logoKeyframe.duration(DURATION)}>
        <Image className="h-[71px] w-[76px]" source={require('@/assets/images/expo-logo.png')} />
      </Animated.View>
    </View>
  );
}
