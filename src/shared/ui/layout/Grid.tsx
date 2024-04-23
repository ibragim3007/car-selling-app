import { normalizedSize } from '@/shared/utils/size';
import React from 'react';
import { DimensionValue, StyleProp, ViewStyle } from 'react-native';
import { FlexAlignType, StyleSheet, View, ViewProps } from 'react-native';

type TSpaceGrid = 'sm' | 'md' | 'lg';
interface GridProps extends ViewProps {
  flex?: number;
  color?: string;
  wrap?: boolean;
  align?: FlexAlignType;
  justfity?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  row?: boolean;
  gap?: number;
  space?: TSpaceGrid;
  height?: DimensionValue;
  padding?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
}

const Grid = ({
  flex,
  color,
  align,
  justfity,
  row,
  gap,
  wrap,
  height,
  padding,
  space,
  paddingHorizontal,
  paddingVertical,
  ...props
}: GridProps) => {
  const gridStyles: StyleProp<ViewStyle> = StyleSheet.flatten([
    flex !== undefined && { flex },
    justfity !== undefined && { justifyContent: justfity },
    align !== undefined && { alignItems: align },
    color !== undefined && { backgroundColor: color },
    row !== undefined && { flexDirection: 'row' },
    gap !== undefined && { gap: normalizedSize(gap) },
    wrap !== undefined && { flexWrap: 'wrap' },
    height !== undefined && { height },
    padding !== undefined && { padding: normalizedSize(padding) },
    paddingVertical !== undefined && { paddingVertical: normalizedSize(paddingVertical) },
    paddingHorizontal !== undefined && { paddingHorizontal: normalizedSize(paddingHorizontal) },
    space !== undefined && { gap: normalizedSize(calculateSize(space)) },
    props.style,
  ]);

  return <View {...props} style={gridStyles} />;
};

export default Grid;

function calculateSize(space: TSpaceGrid) {
  if (space === 'sm') return 8;
  else if (space === 'md') return 16;
  else if (space === 'lg') return 32;

  return 0;
}
