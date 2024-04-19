import Grid from '@/shared/ui/layout/Grid';
import React from 'react';
import CarItem from './CarItem/CarItem';
import { FlatList } from 'react-native';
import carObjects from '@/shared/mock/car1';

const CarList = () => (
  <Grid gap={8}>
    <FlatList renderItem={data => <CarItem car={data.item} />} data={carObjects} />
  </Grid>
);

export default CarList;
