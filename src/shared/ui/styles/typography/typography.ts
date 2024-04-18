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

type TypographyWeight = 'regular' | 'bold' | 'medium';

type TColor = 'primary' | 'secondary' | 'disabled' | 'white';

export interface TypographyProps extends TextProps {
  variant?: TypographyVariants;
  weight?: TypographyWeight;
  color?: TColor;
}

export const TypographyStyles: Record<TypographyVariants, TextProps['style']> = {
  largeTitle: { fontSize: 34 },
  'title-1': { fontSize: 28 },
  'title-2': { fontSize: 22 },
  'title-3': { fontSize: 20 },
  headline: { fontSize: 17 },
  body: { fontSize: 17 },
  callout: { fontSize: 16 },
  subhead: { fontSize: 15 },
  footnote: { fontSize: 13 },
  'caption-1': { fontSize: 12 },
  'caption-2': { fontSize: 11 },
};

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
