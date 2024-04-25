import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import { normalizedSize } from '@/shared/utils/size';
import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

interface PageBackgroundProps extends ViewProps {
  paddingHorizontal?: number;
  paddingVertical?: number;
}

const PageBackground = ({ style, paddingHorizontal, paddingVertical, ...props }: PageBackgroundProps) => {
  const { colors } = useTheme();

  const styles: ViewProps['style'] = StyleSheet.flatten([
    {
      backgroundColor: colors.background.secondary,
      height: '100%',
    },
    paddingHorizontal !== undefined && { paddingHorizontal: normalizedSize(paddingHorizontal) },
    paddingVertical !== undefined && { paddingVertical: normalizedSize(paddingVertical) },
    style,
  ]);

  return <View {...props} style={styles} />;
};

export default PageBackground;
