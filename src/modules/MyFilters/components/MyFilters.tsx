import ELD from '@/components/Handlers/ELD/ELD';
import { useFiltersQuery } from '@/shared/api/entityies/filters/filter.api';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import { FlashList } from '@shopify/flash-list';
import React from 'react';
import FilterComponent from './FilterComponent/FilterComponent';
import { Stack } from 'expo-router';
import LayoutAnimation from '@/shared/ui/animations/LayoutAnimation';

const MyFilters = () => {
  const { data, isLoading, isError, error, isFetching, refetch } = useFiltersQuery(undefined, {
    selectFromResult: ({ data, ...other }) => ({
      ...other,
      data: data ? [...data].reverse() : data,
    }),
  });

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: () => (
            <Grid align="center">
              <LayoutAnimation>
                <Typography isLayoutAnimation weight="medium">
                  Подборки
                </Typography>
              </LayoutAnimation>
              {isFetching && <Typography variant="caption-2">Обновление...</Typography>}
            </Grid>
          ),
        }}
      />
      <ELD data={data} isLoading={isLoading} isError={isError} error={error}>
        <Grid flex={1}>
          <FlashList
            data={data}
            estimatedItemSize={500}
            renderItem={({ item }) => <FilterComponent key={item.id} filter={item} />}
            refreshing={isLoading}
            onRefresh={refetch}
            ItemSeparatorComponent={() => <Grid marginVertical={16} />}
            ListHeaderComponent={() => (
              <Grid flex={1} paddingHorizontal={16} paddingVertical={16}>
                <Typography variant="footnote">Выберите подборки, которые будут отображаться в вашей ленте</Typography>
              </Grid>
            )}
          />
        </Grid>
      </ELD>
    </>
  );
};

export default MyFilters;
