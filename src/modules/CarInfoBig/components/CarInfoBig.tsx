import Grid from '@/shared/ui/layout/Grid';
import React from 'react';
import Advantages from './Advantages/Advantages';
import Characteristics from './Characteristics/Characteristics';
import GeneralInfo from './GeneralInfo/GeneralInfo';
import HeaderInfo from './HeaderInfo/HeaderInfo';
import SellerComment from './SellerComment/SellerComment';
import SimilarCars from './SimilarCars/SimilarCars';

const CarInfoBig = () => {
  return (
    <Grid>
      <Grid gap={8}>
        <HeaderInfo />
        <Grid gap={16} style={{ paddingHorizontal: 8, marginBottom: 8 }}>
          <GeneralInfo />
          <Characteristics />
          <SellerComment />
          <Advantages />
          <SimilarCars />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CarInfoBig;
