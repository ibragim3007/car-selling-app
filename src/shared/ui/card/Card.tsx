import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import { normalizedSize } from '@/shared/utils/size';
import { useIsFocused } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils';
import { CustomAnimations } from '../animations/AnimationConstants';

export interface CardProps extends ViewProps {
  borderRadius?: number;
  p?: number;
  mt?: number;
  flex?: number;
  color?: 'primary' | 'secondary' | 'transparent';
  marginVertical?: number;
  marginHorizontal?: number;
  paddingVertical?: number;
  paddingBottom?: number;
  paddingTop?: number;
  paddingHorizontal?: number;
  fullWidth?: boolean;
}

const Card = ({
  borderRadius,
  marginVertical,
  marginHorizontal,
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
    backgroundColor: color === 'transparent' ? color : color === 'primary' ? colors.background.primary : colors.divider,
    borderRadius: borderRadius !== undefined ? borderRadius : colors.styles.borderRadius,
    padding: p !== undefined ? normalizedSize(p) : normalizedSize(16),
    marginTop: mt !== undefined ? normalizedSize(mt) : 0,
  };
  const isFocused = useIsFocused();

  const mergedStyles: ViewProps['style'] = StyleSheet.flatten([
    stylesView,
    flex !== undefined && { flex },
    marginVertical !== undefined && { marginVertical: normalizedSize(marginVertical) },
    marginHorizontal !== undefined && { marginHorizontal: normalizedSize(marginHorizontal) },
    paddingVertical !== undefined && { paddingVertical: normalizedSize(paddingVertical) },
    paddingHorizontal !== undefined && { paddingHorizontal: normalizedSize(paddingHorizontal) },
    paddingTop !== undefined && { paddingTop: normalizedSize(paddingTop) },
    paddingBottom !== undefined && { paddingBottom: normalizedSize(paddingBottom) },
    fullWidth !== undefined && { width: '100%' },
    props.style,
  ]);

  return (
    <Animated.View key={String(isFocused)} layout={CustomAnimations.layoutDefault} {...props} style={mergedStyles} />
  );
};

export default Card;
