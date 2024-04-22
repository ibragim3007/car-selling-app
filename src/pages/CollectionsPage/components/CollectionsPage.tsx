import CarList from '@/modules/CarList';
import MyCollectionSettings from '@/modules/MyCollectionsSetting';
import PageBackground from '@/shared/ui/layout/PageBackground';
import React from 'react';

const CollectionsPage = () => {
  return (
    <PageBackground>
      <MyCollectionSettings />

      <CarList topOffset={50} />
    </PageBackground>
  );
};

export default CollectionsPage;
