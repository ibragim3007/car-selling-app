import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import Grid from '@/shared/ui/layout/Grid';
import { normalizedSize } from '@/shared/utils/size';
import React from 'react';
import { View } from 'react-native';
import Start from '@/icons/linear/star.svg';

const iconSize = normalizedSize(16);

const ActionSide = () => {
  const { colors } = useTheme();
  return (
    <Grid gap={8} justfity="center">
      <Grid
        align="center"
        justfity="center"
        style={{
          backgroundColor: colors.background.secondary,
          width: normalizedSize(32),
          height: normalizedSize(32),
          borderRadius: 8,
        }}
      >
        <Start width={iconSize} height={iconSize} />
      </Grid>
      <View
        style={{
          backgroundColor: colors.background.negative,
          width: normalizedSize(32),
          height: normalizedSize(32),
          borderRadius: 8,
        }}
      />
      <View
        style={{
          backgroundColor: colors.background.success,
          width: normalizedSize(32),
          height: normalizedSize(32),
          borderRadius: 8,
        }}
      />
    </Grid>
  );
};

export default ActionSide;
