import Grid from '@/shared/ui/layout/Grid';
import { normalizedSize } from '@/shared/utils/size';
import React from 'react';
import { View } from 'react-native';

const ActionSide = () => {
  return (
    <Grid gap={8} color="green" justfity="center">
      <View
        style={{ backgroundColor: 'red', width: normalizedSize(32), height: normalizedSize(32), borderRadius: 8 }}
      />
      <View
        style={{ backgroundColor: 'red', width: normalizedSize(32), height: normalizedSize(32), borderRadius: 8 }}
      />
      <View
        style={{ backgroundColor: 'red', width: normalizedSize(32), height: normalizedSize(32), borderRadius: 8 }}
      />
    </Grid>
  );
};

export default ActionSide;
