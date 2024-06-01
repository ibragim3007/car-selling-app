import { ITheme } from '@/shared/constants/theme/theme';
import { normalizedSize } from '@/shared/utils/size';
import { TextProps } from 'react-native';

type TypographyVariants =
  | 'largeTitle'
  | 'title-1'
  | 'title-2'
  | 'title-3'
  | 'headline'
  | 'body'
  | 'callout'
  | 'subhead'
  | 'footnote'
  | 'caption-1'
  | 'caption-2';

export type TypographyWeight = 'regular' | 'bold' | 'medium';

export type TColor = 'primary' | 'secondary' | 'disabled' | 'white' | 'red' | 'success';
export type TTextAlign = 'auto' | 'left' | 'right' | 'center' | 'justify';
export interface TypographyProps extends TextProps {
  variant?: TypographyVariants;
  weight?: TypographyWeight;
  color?: TColor;
  textAlign?: TTextAlign;
  isLayoutAnimation?: boolean;
}

export const TypographyStyles: Record<TypographyVariants, TextProps['style']> = {
  largeTitle: { fontSize: normalizedSize(34) },
  'title-1': { fontSize: normalizedSize(28) },
  'title-2': { fontSize: normalizedSize(22) },
  'title-3': { fontSize: normalizedSize(20) },
  headline: { fontSize: normalizedSize(17) },
  body: { fontSize: normalizedSize(17) },
  callout: { fontSize: normalizedSize(16) },
  subhead: { fontSize: normalizedSize(15) },
  footnote: { fontSize: normalizedSize(13) },
  'caption-1': { fontSize: normalizedSize(12) },
  'caption-2': { fontSize: normalizedSize(11) },
};

export const getColorsStyles = (colors: ITheme): Record<TColor, TextProps['style']> => ({
  primary: {
    color: colors.text.primary,
  },
  secondary: {
    color: colors.text.secondary,
  },
  disabled: {
    color: colors.text.disabled,
  },
  white: {
    color: colors.text.white,
  },
  red: {
    color: colors.accent.red,
  },
  success: {
    color: colors.accent.primary,
  },
});

export const fontWeight = {
  regular: 'Montserrat_400Regular',
  medium: 'Montserrat_500Medium',
  bold: 'Montserrat_700Bold',
};

export const fontsWeights: Record<TypographyWeight, TextProps['style']> = {
  regular: {
    fontFamily: fontWeight.regular,
  },
  bold: {
    fontFamily: fontWeight.bold,
  },
  medium: {
    fontFamily: fontWeight.medium,
  },
};
