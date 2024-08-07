import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import {
  TypographyProps,
  TypographyStyles,
  fontsWeights,
  getColorsStyles,
} from '@/shared/ui/styles/typography/typography';
import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import LayoutAnimation from '../animations/LayoutAnimation';

const Typography = (props: TypographyProps) => {
  const { colors } = useTheme();

  const fontStyles = fontsWeights[props.weight || 'regular'];
  const typographyStyle = TypographyStyles[props.variant || 'body'];
  const colorStyle: TextProps['style'] = getColorsStyles(colors)[props.color || 'primary'];

  const stylesText = StyleSheet.flatten([
    props.textAlign && { textAlign: props.textAlign },
    typographyStyle,
    fontStyles,
    colorStyle,
    props.style,
  ]);

  if (props.isLayoutAnimation) {
    return (
      <LayoutAnimation>
        <Text {...props} style={stylesText}>
          {props.children}
        </Text>
      </LayoutAnimation>
    );
  }

  return (
    <Text {...props} style={stylesText}>
      {props.children}
    </Text>
  );
};

export default Typography;
