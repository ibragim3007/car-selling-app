import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient';
import React from 'react';

export interface GradientProps extends Partial<LinearGradientProps> {}

const Gradient = ({ ...props }: GradientProps) => {
  const { colors } = useTheme();
  const defaultGradient = [colors.accent.primary, '#165F38'];
  return <LinearGradient {...props} colors={props.colors || defaultGradient} />;
};

export default Gradient;
