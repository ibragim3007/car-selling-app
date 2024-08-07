import ErrorCard from '@/components/Informers/ErrorCard';
import { useCarQuery } from '@/shared/api/entityies/car/api.car';
import { useDictionaryQuery } from '@/shared/api/entityies/dictionary/dictionary.api';
import Grid from '@/shared/ui/layout/Grid';
import LoadingData from '@/shared/ui/loading/LoadingData';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import Advantages from './Advantages/Advantages';
import Characteristics from './Characteristics/Characteristics';
import GeneralInfo from './GeneralInfo/GeneralInfo';
import HeaderInfo from './HeaderInfo/HeaderInfo';
import SellerComment from './SellerComment/SellerComment';
import SimilarCars from './SimilarCars/SimilarCars';

const CarInfoBig = () => {
  const params = useLocalSearchParams<{ id: string }>();

  const { data: car, isLoading } = useCarQuery(Number(params.id));
  const { data: dict } = useDictionaryQuery();

  if (isLoading) return <LoadingData />;

  if (!car) return <ErrorCard />;

  return (
    <Grid gap={8}>
      <HeaderInfo dict={dict} car={car} />
      <Grid gap={16} style={{ paddingHorizontal: 8, marginBottom: 8 }}>
        <GeneralInfo dict={dict} car={car} />
        <Characteristics dict={dict} car={car} />
        <SellerComment car={car} />
        <Advantages />
        <SimilarCars />
      </Grid>
    </Grid>
  );
};

export default CarInfoBig;
