import { useFiltersQuery } from '@/shared/api/entityies/filters/filter.api';
import Grid from '@/shared/ui/layout/Grid';
import LoadingData from '@/shared/ui/loading/LoadingData';
import Typography from '@/shared/ui/typography/Typography';
import { FlashList } from '@shopify/flash-list';
import React from 'react';
import FilterComponent from './FilterComponent/FilterComponent';

const MyFilters = () => {
  const { data, isLoading, isError, error, isFetching, refetch } = useFiltersQuery();

  if (isLoading) return <LoadingData />;
  if (!data) return <Typography>Нет данных</Typography>;

  return (
    <Grid flex={1}>
      <FlashList
        refreshing={isLoading || isFetching}
        onRefresh={refetch}
        ItemSeparatorComponent={() => <Grid marginVertical={16} />}
        ListHeaderComponent={() => (
          <Grid flex={1} paddingHorizontal={16} paddingVertical={16}>
            <Typography variant="footnote">Выберите подборки, которые будут отображаться в вашей ленте</Typography>
          </Grid>
        )}
        data={data}
        estimatedItemSize={500}
        renderItem={({ item }) => <FilterComponent key={item.id} filter={item} />}
      />
    </Grid>
  );
};

export default MyFilters;
