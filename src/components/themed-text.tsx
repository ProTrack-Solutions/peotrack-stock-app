import { Platform, Text, type TextProps } from 'react-native';

import { ThemeColor } from '@/constants/theme';

export type ThemedTextProps = TextProps & {
  type?: 'default' | 'title' | 'small' | 'smallBold' | 'subtitle' | 'link' | 'linkPrimary' | 'code';
  themeColor?: ThemeColor;
};

const themeColorClasses: Record<ThemeColor, string> = {
  text: 'text-ink',
  background: 'text-paper',
  backgroundElement: 'text-surface',
  backgroundSelected: 'text-surface-selected',
  textSecondary: 'text-muted',
};

const typeClasses: Record<NonNullable<ThemedTextProps['type']>, string> = {
  default: 'text-base leading-6 font-medium',
  title: 'text-[48px] leading-[52px] font-semibold',
  small: 'text-sm leading-5 font-medium',
  smallBold: 'text-sm leading-5 font-bold',
  subtitle: 'text-[32px] leading-[44px] font-semibold',
  link: 'text-sm leading-[30px]',
  linkPrimary: 'text-sm leading-[30px] text-brand',
  code: `font-mono text-xs ${Platform.select({ android: 'font-bold' }) ?? 'font-medium'}`,
};

export function ThemedText({ className, type = 'default', themeColor, ...rest }: ThemedTextProps) {
  return (
    <Text
      className={[themeColorClasses[themeColor ?? 'text'], typeClasses[type], className]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    />
  );
}
