import carObjects from '@/shared/mock/car1';
import { ICar } from '@/shared/types';
import Grid from '@/shared/ui/layout/Grid';
import { normalizedSize } from '@/shared/utils/size';
import { FlashList, ListRenderItem } from '@shopify/flash-list';
import React from 'react';
import CarItem from './CarItem/CarItem';

interface CarListProps {
  headerComponent: React.JSX.Element;
  footerComponent?: React.JSX.Element;
}

function CarList({ headerComponent, footerComponent }: CarListProps) {
  // const _renderItem = (info: ListRenderItemInfo<ICar>) => <CarItem key={info.item.id} car={info.item} />;

  const renderItem: ListRenderItem<ICar> = ({ item }) => {
    return <CarItem key={item.id} car={item} />;
  };
  const lengthItem = normalizedSize(145);
  return (
    <Grid flex={1}>
      <FlashList
        data={carObjects}
        renderItem={renderItem}
        estimatedItemSize={lengthItem}
        removeClippedSubviews
        // initialNumToRender={5}
        // stickyHeaderIndices={[0]}
        ListHeaderComponent={headerComponent}
        ListFooterComponent={footerComponent}
        keyExtractor={item => item.id}
        // getItemLayout={(data, index) => ({ length: lengthItem, offset: lengthItem * index, index })}
      />
    </Grid>
  );
}

export default CarList;
