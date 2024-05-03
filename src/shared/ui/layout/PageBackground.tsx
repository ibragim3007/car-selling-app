import { TSpaceGrid, calculateSpacing } from '@/shared/helpers/styleHelp/calculateSpacing';
import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import { isTablet, normalizedSize } from '@/shared/utils/size';
import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

export interface PageBackgroundProps extends ViewProps {
  paddingHorizontal?: number;
  paddingVertical?: number;
  color?: 'secondary' | 'primary';
  isPaddingPage?: boolean;
  space?: TSpaceGrid;
  spaceVertical?: TSpaceGrid;
  spaceHorizontal?: TSpaceGrid;
}

const PageBackground = ({
  style,
  paddingHorizontal,
  paddingVertical,
  color = 'secondary',
  isPaddingPage,
  space,
  spaceHorizontal,
  spaceVertical,
  ...props
}: PageBackgroundProps) => {
  const { colors } = useTheme();

  const styles: ViewProps['style'] = StyleSheet.flatten([
    {
      backgroundColor: colors.background[color],
      height: '100%',
    },
    isTablet() && { alignSelf: 'center', maxWidth: '70%' },
    isPaddingPage !== undefined && { padding: normalizedSize(16) },
    paddingHorizontal !== undefined && { paddingHorizontal: normalizedSize(paddingHorizontal) },
    paddingVertical !== undefined && { paddingVertical: normalizedSize(paddingVertical) },
    space !== undefined && { gap: normalizedSize(calculateSpacing(space)) },
    spaceHorizontal !== undefined && { paddingHorizontal: normalizedSize(calculateSpacing(spaceHorizontal)) },
    spaceVertical !== undefined && { paddingVertical: normalizedSize(calculateSpacing(spaceVertical)) },
    style,
  ]);

  return <View {...props} style={styles} />;
};

export default PageBackground;
