import { useTheme } from '@/shared/hooks/stable/useTheme';
import { TypographyProps, TypographyStyles, fontsWeights } from '@/shared/ui/styles/typography/typography';
import React from 'react';
import { Text, TextProps } from 'react-native';

const Typography = (props: TypographyProps) => {
  const { colors } = useTheme();

  const fontStyles = fontsWeights[props.weight || 'regular'];
  const typographyStyle = TypographyStyles[props.variant || 'body'];
  const colorStyle: TextProps['style'] = {
    color: colors.text[props.color || 'primary'],
  };

  const preMerge = Object.assign({}, typographyStyle, fontStyles, colorStyle);
  const mergedStyles = Object.assign({}, props.style, preMerge);

  return (
    <Text {...props} style={mergedStyles}>
      {props.children}
    </Text>
  );
};

export default Typography;
