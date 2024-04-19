import CarList from '@/modules/CarList';
import { useTheme } from '@/shared/hooks/stable/useTheme';
import Grid from '@/shared/ui/layout/Grid';
import React from 'react';

const CollectionsPage = () => {
  const { colors } = useTheme();
  return (
    <Grid style={{ backgroundColor: colors.background.secondary, height: '100%' }}>
      <CarList />
    </Grid>
  );
};

export default CollectionsPage;
