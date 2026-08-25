import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';
import { cssInterop } from 'nativewind';

/**
 * `expo-linear-gradient` isn't a core React Native primitive, so NativeWind
 * doesn't know how to map `className` to it out of the box. `cssInterop`
 * teaches it to treat `className` as `style`, same as View/Text.
 */
cssInterop(ExpoLinearGradient, { className: 'style' });

export const LinearGradient = ExpoLinearGradient;
