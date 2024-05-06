import UnSubscripbeSuggestion from '@/components/UnSubscripbeSuggestion/UnSubscripbeSuggestion';
import CarList from '@/modules/CarList';
import MyCollectionSettings from '@/modules/MyCollectionsSetting';
import { useUserQuery } from '@/shared/api/entityies/auth/api.auth';
import Grid from '@/shared/ui/layout/Grid';
import PageBackground from '@/shared/ui/layout/PageBackground';
import React from 'react';

const CollectionsPage = () => {
  const { data } = useUserQuery();
  return (
    <PageBackground>
      <CarList
        topOffset={0}
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
