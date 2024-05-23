import BottomButton from '@/components/Controllers/buttons/BottomButton';
import CarInfoBig from '@/modules/CarInfoBig';
import Grid from '@/shared/ui/layout/Grid';
import ScrollViewPage from '@/shared/ui/layout/ScrollViewPage';
import React from 'react';

const CarPage = () => {
  return (
    <Grid flex={1}>
      <ScrollViewPage style={{ flexGrow: 1 }}>
        <CarInfoBig />
        {/* <Grid flex={0.88}>
        <CarList headerComponent={} />
      </Grid> */}
      </ScrollViewPage>
      <BottomButton>Открыть объявление</BottomButton>
    </Grid>
  );
};

export default CarPage;
