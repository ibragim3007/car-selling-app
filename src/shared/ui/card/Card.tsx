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
  flex?: number;
  color?: 'primary' | 'secondary';
  marginVertical?: number;
  paddingVertical?: number;
  paddingBottom?: number;
  paddingTop?: number;
  paddingHorizontal?: number;
  fullWidth?: boolean;
}

const Card = ({
  borderRadius,
  marginVertical,
  paddingVertical,
  paddingBottom,
  paddingTop,
  fullWidth,
  paddingHorizontal,
  color = 'primary',
  p,
  mt,
  flex,
  ...props
}: CardProps) => {
  const { colors } = useTheme();
  const stylesView: ViewProps['style'] = {
    backgroundColor: color === 'primary' ? colors.background.primary : colors.divider,
    borderRadius: borderRadius !== undefined ? borderRadius : colors.styles.borderRadius,
    padding: p !== undefined ? normalizedSize(p) : normalizedSize(16),
    marginTop: mt !== undefined ? normalizedSize(mt) : 0,
  };
  const isFocused = useIsFocused();

  const mergedStyles: ViewProps['style'] = StyleSheet.flatten([
    stylesView,
    flex !== undefined && { flex },
    marginVertical !== undefined && { marginVertical: normalizedSize(marginVertical) },
    paddingVertical !== undefined && { paddingVertical: normalizedSize(paddingVertical) },
    paddingHorizontal !== undefined && { paddingHorizontal: normalizedSize(paddingHorizontal) },
    paddingTop !== undefined && { paddingTop: normalizedSize(paddingTop) },
    paddingBottom !== undefined && { paddingBottom: normalizedSize(paddingBottom) },
    fullWidth !== undefined && { width: '100%' },
    props.style,
  ]);

  return (
    <Animated.View key={String(isFocused)} layout={LinearTransition.duration(120)} {...props} style={mergedStyles} />
  );
};

export default Card;
