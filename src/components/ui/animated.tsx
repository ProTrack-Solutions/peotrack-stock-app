import { cssInterop } from 'nativewind';
import ReanimatedAnimated from 'react-native-reanimated';

/**
 * `react-native-reanimated`'s `Animated.View`/`Animated.Text` aren't core
 * React Native primitives, so NativeWind doesn't know how to map `className`
 * to them out of the box. `cssInterop` teaches it to treat `className` as
 * `style`, same as View/Text — it composes fine with reanimated's own
 * animated `style` values.
 */
cssInterop(ReanimatedAnimated.View, { className: 'style' });
cssInterop(ReanimatedAnimated.Text, { className: 'style' });

export const Animated = ReanimatedAnimated;
