import CarList from '@/modules/CarList';
import MyCollectionSettings from '@/modules/MyCollectionsSetting';
import { useTheme } from '@/shared/hooks/stable/useTheme';
import Grid from '@/shared/ui/layout/Grid';
import { normalizedSizeVertical } from '@/shared/utils/size';
import React from 'react';

const CollectionsPage = () => {
  const { colors } = useTheme();
  return (
    <Grid gap={normalizedSizeVertical(8)} style={{ backgroundColor: colors.background.secondary, height: '100%' }}>
      <MyCollectionSettings />
      <CarList />
    </Grid>
  );
};

export default CollectionsPage;
