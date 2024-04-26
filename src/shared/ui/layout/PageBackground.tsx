import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import { normalizedSize } from '@/shared/utils/size';
import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

interface PageBackgroundProps extends ViewProps {
  paddingHorizontal?: number;
  paddingVertical?: number;
  color?: 'secondary' | 'primary';
  isPaddingPage?: boolean;
}

const PageBackground = ({
  style,
  paddingHorizontal,
  paddingVertical,
  color = 'secondary',
  isPaddingPage,
  ...props
}: PageBackgroundProps) => {
  const { colors } = useTheme();

  const styles: ViewProps['style'] = StyleSheet.flatten([
    {
      backgroundColor: colors.background[color],
      height: '100%',
    },
    isPaddingPage !== undefined && { padding: normalizedSize(16) },
    paddingHorizontal !== undefined && { paddingHorizontal: normalizedSize(paddingHorizontal) },
    paddingVertical !== undefined && { paddingVertical: normalizedSize(paddingVertical) },
    style,
  ]);

  return <View {...props} style={styles} />;
};

export default PageBackground;
