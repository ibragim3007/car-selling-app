import UnSubscripbeSuggestion from '@/components/UnSubscripbeSuggestion/UnSubscripbeSuggestion';
import CarList from '@/modules/CarList';
import MyCollectionSettings from '@/modules/MyCollectionsSetting';
import { useUserQuery } from '@/shared/api/entityies/auth/api.auth';
import { useCarsList } from '@/shared/hooks/entityies/cars/useCarsList';
import Grid from '@/shared/ui/layout/Grid';
import PageBackground from '@/shared/ui/layout/PageBackground';
import LoadingData from '@/shared/ui/loading/LoadingData';
import React from 'react';

const CollectionsPage = () => {
  const { data } = useUserQuery();
  const { carsForDisplay, nextPage, isLoading, isFetching, refetch } = useCarsList();

  return (
    <PageBackground>
      <CarList
        data={carsForDisplay}
        topOffset={0}
        onRefresh={refetch}
        loading={isLoading || isFetching}
        onEndReached={nextPage}
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
