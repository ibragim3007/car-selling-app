import UnSubscripbeSuggestion from '@/components/UnSubscripbeSuggestion/UnSubscripbeSuggestion';
import CarList from '@/modules/CarList';
import MyCollectionSettings from '@/modules/MyCollectionsSetting';
import Grid from '@/shared/ui/layout/Grid';
import PageBackground from '@/shared/ui/layout/PageBackground';
import React from 'react';

const CollectionsPage = () => {
  return (
    <PageBackground>
      {/* headerComponent={<MyCollectionSettings />} */}
      <CarList topOffset={8} headerComponent={<UnSubscripbeSuggestion />} />
    </PageBackground>
  );
};

export default CollectionsPage;
