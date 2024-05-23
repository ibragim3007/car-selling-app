import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import Grid from '@/shared/ui/layout/Grid';
import { normalizedSize } from '@/shared/utils/size';
import React from 'react';

const LineDivider = () => {
  const { colors } = useTheme();
  return (
    <Grid
      style={{
        width: normalizedSize(1),
        height: normalizedSize(4),
        backgroundColor: colors.text.secondary,
      }}
    />
  );
};

export default LineDivider;
