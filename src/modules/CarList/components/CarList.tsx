import carObjects from '@/shared/mock/car1';
import { ICar } from '@/shared/types';
import Grid from '@/shared/ui/layout/Grid';
import { normalizedSize } from '@/shared/utils/size';
import { FlashList, ListRenderItem } from '@shopify/flash-list';
import React from 'react';
import CarItem from './CarItem/CarItem';
import MyCollectionSettings from '@/modules/MyCollectionsSetting';

interface CarListProps {
  headerComponent?: React.JSX.Element;
  footerComponent?: React.JSX.Element;
  stickyHeaderIndices?: number[];
  topOffset?: number;
}

function CarList({ headerComponent, footerComponent, stickyHeaderIndices, topOffset }: CarListProps) {
  // const _renderItem = (info: ListRenderItemInfo<ICar>) => <CarItem key={info.item.id} car={info.item} />;

  const renderItem: ListRenderItem<ICar> = ({ item }) => {
    return <CarItem car={item} />;
  };
  const lengthItem = normalizedSize(145);
  return (
    <Grid flex={1} style={{ paddingTop: topOffset }}>
      <FlashList
        data={carObjects}
        renderItem={renderItem}
        estimatedItemSize={lengthItem}
        stickyHeaderIndices={stickyHeaderIndices}
        removeClippedSubviews
        ListHeaderComponent={headerComponent}
        ListFooterComponent={footerComponent}
        keyExtractor={item => item.id}
      />
    </Grid>
  );
}

export default CarList;
