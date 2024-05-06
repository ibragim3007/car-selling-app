import Grid from '@/shared/ui/layout/Grid';
import React from 'react';
import Advantages from './Advantages/Advantages';
import Characteristics from './Characteristics/Characteristics';
import GeneralInfo from './GeneralInfo/GeneralInfo';
import HeaderInfo from './HeaderInfo/HeaderInfo';
import SellerComment from './SellerComment/SellerComment';
import SimilarCars from './SimilarCars/SimilarCars';
import { useLocalSearchParams } from 'expo-router';
import { useCarQuery } from '@/shared/api/entityies/car/api.car';
import LoadingData from '@/shared/ui/loading/LoadingData';
import Typography from '@/shared/ui/typography/Typography';

const CarInfoBig = () => {
  const params = useLocalSearchParams<{ id: string }>();

  const { data: car, isLoading } = useCarQuery(Number(params.id));

  if (isLoading) return <LoadingData />;

  if (!car) return <Typography>Нет данных!</Typography>;

  return (
    <Grid>
      <Grid gap={8}>
        <HeaderInfo car={car} />
        <Grid gap={16} style={{ paddingHorizontal: 8, marginBottom: 8 }}>
          <GeneralInfo car={car} />
          <Characteristics car={car} />
          <SellerComment car={car} />
          {/* <Advantages /> */}
          <SimilarCars />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CarInfoBig;
