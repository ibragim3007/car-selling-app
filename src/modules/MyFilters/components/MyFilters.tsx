import Grid from '@/shared/ui/layout/Grid';
import React from 'react';
import FilterComponent from './FilterComponent/FilterComponent';

const MyFilters = () => {
  return (
    <Grid gap={16}>
      <FilterComponent />
      <FilterComponent />
      <FilterComponent />
      <FilterComponent />
    </Grid>
  );
};

export default MyFilters;
