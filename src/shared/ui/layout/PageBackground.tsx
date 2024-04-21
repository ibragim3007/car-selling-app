import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

interface PageBackgroundProps extends ViewProps {}

const PageBackground = ({ style, ...props }: PageBackgroundProps) => {
  const { colors } = useTheme();

  const styles: ViewProps['style'] = StyleSheet.flatten([
    {
      backgroundColor: colors.background.secondary,
      height: '100%',
    },
    style,
  ]);

  return <View {...props} style={styles} />;
};

export default PageBackground;
