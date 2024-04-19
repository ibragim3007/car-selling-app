import MyCollectionSettings from '@/modules/MyCollectionsSetting';
import carObjects from '@/shared/mock/car1';
import Grid from '@/shared/ui/layout/Grid';
import React from 'react';
import { FlatList } from 'react-native';
import CarItem from './CarItem/CarItem';

const CarList = () => {
  return (
    <Grid flex={1}>
      <FlatList
        stickyHeaderIndices={[0]}
        ListHeaderComponent={<MyCollectionSettings />}
        renderItem={data => <CarItem key={data.item.id} car={data.item} />}
        data={carObjects}
      />
    </Grid>
  );
};

export default CarList;
