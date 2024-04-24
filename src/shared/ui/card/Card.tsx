import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import { normalizedSize } from '@/shared/utils/size';
import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, { LinearTransition } from 'react-native-reanimated';
import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils';
import { useIsFocused } from '@react-navigation/native';

export interface CardProps extends ViewProps {
  borderRadius?: number;
  p?: number;
  mt?: number;
  color?: 'primary' | 'secondary';
}

const Card = ({ borderRadius, color = 'primary', p, mt, ...props }: CardProps) => {
  const { colors } = useTheme();
  const stylesView: ViewProps['style'] = {
    backgroundColor: color === 'primary' ? colors.background.primary : colors.divider,
    borderRadius: borderRadius !== undefined ? borderRadius : colors.styles.borderRadius,
    padding: p !== undefined ? normalizedSize(p) : normalizedSize(16),
    marginTop: mt !== undefined ? normalizedSize(mt) : 0,
  };
  const isFocused = useIsFocused();

  const mergedStyles = StyleSheet.flatten([stylesView, props.style]);

  return (
    <Animated.View key={String(isFocused)} layout={LinearTransition.duration(120)} {...props} style={mergedStyles} />
  );
};

export default Card;
