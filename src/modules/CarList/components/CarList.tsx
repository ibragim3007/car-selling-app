import MyCollectionSettings from '@/modules/MyCollectionsSetting';
import carObjects from '@/shared/mock/car1';
import { ICar } from '@/shared/types';
import Grid from '@/shared/ui/layout/Grid';
import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import CarItem from './CarItem/CarItem';
import { normalizedSize } from '@/shared/utils/size';

function CarList() {
  const _renderItem = (data: ListRenderItemInfo<ICar>) => <CarItem key={data.item.id} car={data.item} />;
  const lengthItem = normalizedSize(145);
  return (
    <Grid flex={1}>
      <FlatList
        removeClippedSubviews
        initialNumToRender={5}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={<MyCollectionSettings />}
        renderItem={_renderItem}
        data={carObjects}
        keyExtractor={item => item.id}
        getItemLayout={(data, index) => ({ length: lengthItem, offset: lengthItem * index, index })}
      />
    </Grid>
  );
}

export default CarList;
