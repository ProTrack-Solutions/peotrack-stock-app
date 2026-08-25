import { View, type ViewProps } from 'react-native';

import { ThemeColor } from '@/constants/theme';

export type ThemedViewProps = ViewProps & {
  type?: ThemeColor;
};

const themeBgClasses: Record<ThemeColor, string> = {
  text: 'bg-ink',
  background: 'bg-paper',
  backgroundElement: 'bg-surface',
  backgroundSelected: 'bg-surface-selected',
  textSecondary: 'bg-muted',
};

export function ThemedView({ className, type, ...otherProps }: ThemedViewProps) {
  return (
    <View
      className={[themeBgClasses[type ?? 'background'], className].filter(Boolean).join(' ')}
      {...otherProps}
    />
  );
}
