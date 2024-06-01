import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import Grid from '@/shared/ui/layout/Grid';
import React from 'react';

const Separator = () => {
  const { colors } = useTheme();
  return <Grid color={colors.background.secondary} height={8} />;
};

export default Separator;
