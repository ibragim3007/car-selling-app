import CarInfoBig from '@/modules/CarInfoBig';
import OpenAd from '@/modules/CarInfoBig/components/OpenAd/OpenAd';
import CarList from '@/modules/CarList';
import Grid from '@/shared/ui/layout/Grid';
import PageBackground from '@/shared/ui/layout/PageBackground';
import ScrollViewPage from '@/shared/ui/layout/ScrollViewPage';
import React from 'react';

const CarPage = () => {
  return (
    <ScrollViewPage>
      <CarInfoBig />
      {/* <Grid flex={0.88}>
        <CarList headerComponent={} />
      </Grid> */}

      <OpenAd />
    </ScrollViewPage>
  );
};

export default CarPage;
