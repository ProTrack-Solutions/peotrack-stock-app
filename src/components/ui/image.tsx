import { Image as ExpoImage } from 'expo-image';
import { cssInterop } from 'nativewind';

/**
 * `expo-image` isn't a core React Native primitive, so NativeWind doesn't
 * know how to map `className` to it out of the box. `cssInterop` teaches it
 * to treat `className` as `style`, same as View/Text.
 */
cssInterop(ExpoImage, { className: 'style' });

export const Image = ExpoImage;
