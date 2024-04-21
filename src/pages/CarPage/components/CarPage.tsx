import CarInfoBig from '@/modules/CarInfoBig';
import OpenAd from '@/modules/CarInfoBig/components/OpenAd/OpenAd';
import CarList from '@/modules/CarList';
import Grid from '@/shared/ui/layout/Grid';
import PageBackground from '@/shared/ui/layout/PageBackground';
import React from 'react';

const CarPage = () => {
  return (
    <PageBackground>
      <Grid flex={0.9}>
        <CarList headerComponent={<CarInfoBig />} />
      </Grid>
      <Grid flex={0.15}>
        <OpenAd />
      </Grid>
    </PageBackground>
  );
};

export default CarPage;
