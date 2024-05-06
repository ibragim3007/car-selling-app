import { ICar } from '@/shared/types';
import Grid from '@/shared/ui/layout/Grid';
import { normalizedSize } from '@/shared/utils/size';
import { FlashList, ListRenderItem } from '@shopify/flash-list';
import React from 'react';
import CarItem from './CarItem/CarItem';

interface CarListProps {
  headerComponent?: React.JSX.Element;
  footerComponent?: React.JSX.Element;
  stickyHeaderIndices?: number[];
  topOffset?: number;
  data?: ICar[];
  loading?: boolean;
  onRefresh?: () => void;
}

function CarList({
  data,
  headerComponent,
  footerComponent,
  loading,
  stickyHeaderIndices,
  topOffset,
  onRefresh,
}: CarListProps) {
  // const _renderItem = (info: ListRenderItemInfo<ICar>) => <CarItem key={info.item.id} car={info.item} />;

  const renderItem: ListRenderItem<ICar> = ({ item }) => {
    return <CarItem car={item} />;
  };
  const lengthItem = normalizedSize(145);
  return (
    <Grid flex={1} style={{ paddingTop: 0 }}>
      <FlashList
        data={data}
        onRefresh={onRefresh}
        refreshing={loading}
        renderItem={renderItem}
        contentContainerStyle={{ paddingTop: topOffset }}
        estimatedItemSize={lengthItem}
        stickyHeaderIndices={stickyHeaderIndices}
        removeClippedSubviews
        ListHeaderComponent={headerComponent}
        ListFooterComponent={footerComponent}
        keyExtractor={item => String(item.id)}
      />
    </Grid>
  );
}

export default CarList;
