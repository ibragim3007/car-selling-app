import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import { TypographyProps, TypographyStyles, fontsWeights } from '@/shared/ui/styles/typography/typography';
import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

const Typography = (props: TypographyProps) => {
  const { colors } = useTheme();

  const fontStyles = fontsWeights[props.weight || 'regular'];
  const typographyStyle = TypographyStyles[props.variant || 'body'];
  const colorStyle: TextProps['style'] = {
    color: colors.text[props.color || 'primary'],
  };

  const stylesText = StyleSheet.flatten([typographyStyle, fontStyles, colorStyle, props.style]);

  return (
    <Text {...props} style={stylesText}>
      {props.children}
    </Text>
  );
};

export default Typography;
