import carObjects from '@/shared/mock/car1';
import { ICar } from '@/shared/types';
import Grid from '@/shared/ui/layout/Grid';
import { normalizedSize } from '@/shared/utils/size';
import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import CarItem from './CarItem/CarItem';

interface CarListProps {
  headerComponent: React.JSX.Element;
  footerComponent?: React.JSX.Element;
}

function CarList({ headerComponent, footerComponent }: CarListProps) {
  const _renderItem = (data: ListRenderItemInfo<ICar>) => <CarItem key={data.item.id} car={data.item} />;
  const lengthItem = normalizedSize(145);
  return (
    <Grid flex={1}>
      <FlatList
        removeClippedSubviews
        initialNumToRender={5}
        // stickyHeaderIndices={[0]}
        ListHeaderComponent={headerComponent}
        ListFooterComponent={footerComponent}
        renderItem={_renderItem}
        data={carObjects}
        keyExtractor={item => item.id}
        getItemLayout={(data, index) => ({ length: lengthItem, offset: lengthItem * index, index })}
      />
    </Grid>
  );
}

export default CarList;
