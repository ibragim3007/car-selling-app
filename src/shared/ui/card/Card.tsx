import { useTheme } from '@/shared/hooks/stable/useTheme';
import { normalizedSize } from '@/shared/utils/size';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils';

interface CardProps extends ViewProps {
  borderRadius?: number;
  p?: number;
}

const Card = ({ borderRadius, p, ...props }: CardProps) => {
  const { colors } = useTheme();
  const stylesView: ViewProps['style'] = {
    backgroundColor: colors.background.primary,
    borderRadius: borderRadius !== undefined ? borderRadius : colors.styles.borderRadius,
    padding: normalizedSize(p || 0) || normalizedSize(16),
  };

  const mergedStyles = StyleSheet.flatten([stylesView, props.style]);

  return <View {...props} style={mergedStyles} />;
};

export default Card;
