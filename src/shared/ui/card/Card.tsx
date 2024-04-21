import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import { normalizedSize } from '@/shared/utils/size';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils';

export interface CardProps extends ViewProps {
  borderRadius?: number;
  p?: number;
  mt?: number;
}

const Card = ({ borderRadius, p, mt, ...props }: CardProps) => {
  const { colors } = useTheme();
  const stylesView: ViewProps['style'] = {
    backgroundColor: colors.background.primary,
    borderRadius: borderRadius !== undefined ? borderRadius : colors.styles.borderRadius,
    padding: p !== undefined ? normalizedSize(p) : normalizedSize(16),
    marginTop: mt !== undefined ? normalizedSize(mt) : 0,
  };

  const mergedStyles = StyleSheet.flatten([stylesView, props.style]);

  return <View {...props} style={mergedStyles} />;
};

export default Card;
