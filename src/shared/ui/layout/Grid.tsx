import { normalizedSize } from '@/shared/utils/size';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { FlexAlignType, StyleSheet, View, ViewProps } from 'react-native';

interface GridProps extends ViewProps {
  flex?: number;
  color?: string;
  align?: FlexAlignType;
  justfity?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  row?: boolean;
  gap?: number;
}

const Grid = ({ flex, color, align, justfity, row, gap, ...props }: GridProps) => {
  const gridStyles: StyleProp<ViewStyle> = StyleSheet.flatten([
    flex !== undefined && { flex },
    justfity !== undefined && { justifyContent: justfity },
    align !== undefined && { alignItems: align },
    color !== undefined && { backgroundColor: color },
    row !== undefined && { flexDirection: 'row' },
    gap !== undefined && { gap: normalizedSize(gap) },
    props.style,
  ]);

  return <View {...props} style={gridStyles} />;
};

export default Grid;
