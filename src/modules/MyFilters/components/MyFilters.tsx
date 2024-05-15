import { useFiltersQuery } from '@/shared/api/entityies/filters/filter.api';
import Grid from '@/shared/ui/layout/Grid';
import LoadingData from '@/shared/ui/loading/LoadingData';
import React from 'react';
import FilterComponent from './FilterComponent/FilterComponent';
import Typography from '@/shared/ui/typography/Typography';

const MyFilters = () => {
  const { data, isLoading, isError, error } = useFiltersQuery();

  // if (isError) return <Typography color="red">{error}</Typography>;
  if (isLoading) return <LoadingData />;
  if (!data) return <Typography>Нет данных</Typography>;

  return (
    <Grid gap={16}>
      {data.map(filter => (
        <FilterComponent key={filter.id} filter={filter} />
      ))}
    </Grid>
  );
};

export default MyFilters;
