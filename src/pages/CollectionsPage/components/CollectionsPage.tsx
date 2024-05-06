import UnSubscripbeSuggestion from '@/components/UnSubscripbeSuggestion/UnSubscripbeSuggestion';
import CarList from '@/modules/CarList';
import MyCollectionSettings from '@/modules/MyCollectionsSetting';
import { useUserQuery } from '@/shared/api/entityies/auth/api.auth';
import { useCarsQuery } from '@/shared/api/entityies/car/api.car';
import Grid from '@/shared/ui/layout/Grid';
import PageBackground from '@/shared/ui/layout/PageBackground';
import React from 'react';

const CollectionsPage = () => {
  const { data } = useUserQuery();
  const { data: cars, isFetching, refetch, isLoading } = useCarsQuery();

  return (
    <PageBackground>
      <CarList
        data={cars}
        topOffset={0}
        onRefresh={refetch}
        loading={isLoading || isFetching}
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
