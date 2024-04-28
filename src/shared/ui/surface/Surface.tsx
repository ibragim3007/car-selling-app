import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import React from 'react';
import { StyleSheet } from 'react-native';
import Grid, { GridProps } from '../layout/Grid';

export interface SurfaceProps extends GridProps {
  color?: 'primary' | 'secondary';
}

const Surface = ({ color = 'primary', ...props }: SurfaceProps) => {
  const { colors } = useTheme();

  const styles = StyleSheet.flatten([
    {
      backgroundColor: color === 'primary' ? colors.background.primary : colors.background.secondary,
    },
    props.style,
  ]);

  return <Grid {...props} style={styles} />;
};

export default Surface;
