import UnSubscripbeSuggestion from '@/components/UnSubscripbeSuggestion/UnSubscripbeSuggestion';
import CarList from '@/modules/CarList';
import MyCollectionSettings from '@/modules/MyCollectionsSetting';
import { useUserQuery } from '@/shared/api/entityies/auth/api.auth';
import { useCarsList } from '@/shared/hooks/entityies/cars/useCarsList';
import Grid from '@/shared/ui/layout/Grid';
import PageBackground from '@/shared/ui/layout/PageBackground';
import LoadingData from '@/shared/ui/loading/LoadingData';
import Typography from '@/shared/ui/typography/Typography';
import { Stack } from 'expo-router';
import React, { useEffect, useState } from 'react';

const CollectionsPage = () => {
  const { data } = useUserQuery();
  const [isPooling, setIsPooling] = useState(false);
  const { carsForDisplay, nextPage, isLoading, isFetching, refetch, startPolling, stopPolling } = useCarsList();

  const updatePoolingInfo = (value: boolean) => {
    if (value) startPolling();
    else stopPolling();

    setIsPooling(value);
  };

  useEffect(() => {
    return stopPolling();
  }, [stopPolling]);

  return (
    <PageBackground>
      <Stack.Screen
        options={{
          headerLeft: () => {
            if (isPooling)
              return (
                <Grid row paddingHorizontal={10} align="center">
                  <Typography color="secondary" variant="caption-2">
                    Новое...
                  </Typography>
                  <LoadingData />
                </Grid>
              );
          },
        }}
      />
      <CarList
        data={carsForDisplay}
        topOffset={0}
        onRefresh={refetch}
        loading={isLoading || (isFetching && !isPooling)}
        onEndReached={nextPage}
        updatePoolingInfo={updatePoolingInfo}
        ListFooterComponent={() => (isLoading || isFetching) && <LoadingData />}
        headerComponent={
          <Grid gap={8}>
            {!data && <UnSubscripbeSuggestion />}
            <MyCollectionSettings />
          </Grid>
        }
      />
    </PageBackground>
  );
};

export default CollectionsPage;
