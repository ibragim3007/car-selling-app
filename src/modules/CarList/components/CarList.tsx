import { ICar } from '@/shared/types';
import Grid from '@/shared/ui/layout/Grid';
import { normalizedSize } from '@/shared/utils/size';
import { FlashList, FlashListProps, ListRenderItem } from '@shopify/flash-list';
import React, { useCallback, useState } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import GoTopButton from './Buttons/GoTopButton';
import UpdateDataButton from './Buttons/UpdateDataButton';
import CarItem from './CarItem/CarItem';
import Animated, { LinearTransition } from 'react-native-reanimated';

interface CarListProps extends Partial<FlashListProps<ICar>> {
  headerComponent?: React.JSX.Element;
  footerComponent?: React.JSX.Element;
  stickyHeaderIndices?: number[];
  topOffset?: number;
  data?: ICar[];
  loading?: boolean;
  onRefresh?: () => void;
  updatePoolingInfo: (value: boolean) => void;
}

function CarList({
  data,
  headerComponent,
  footerComponent,
  loading,
  stickyHeaderIndices,
  topOffset,
  onRefresh,
  updatePoolingInfo,
  ...props
}: CarListProps) {
  const renderItem: ListRenderItem<ICar> = ({ item }) => {
    return <CarItem car={item} />;
  };
  const lengthItem = normalizedSize(145);

  const keyExtractor = useCallback((item: ICar, i: number) => `${i}-${item.id}`, []);

  let flastListRef: FlashList<ICar> | null;

  const goTopButton = () => {
    flastListRef?.scrollToOffset({ offset: 0, animated: true });
  };

  const goUpdateButton = () => {
    if (onRefresh) onRefresh();
    flastListRef?.scrollToOffset({ offset: 0, animated: true });
  };

  const [goTopButtonShow, setGoTopButtonShow] = useState(false);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (event.nativeEvent.contentOffset.y <= 100) updatePoolingInfo(true);
    else updatePoolingInfo(false);

    if (event.nativeEvent.contentOffset.y > 2000) setGoTopButtonShow(true);
    else setGoTopButtonShow(false);
  };

  return (
    <Animated.View style={{ flex: 1 }} layout={LinearTransition}>
      <Grid flex={1} style={{ paddingTop: 0 }}>
        {goTopButtonShow && <UpdateDataButton goUpdateButton={goUpdateButton} />}
        {goTopButtonShow && <GoTopButton goTopButton={goTopButton} />}
        <FlashList
          ref={ref => {
            flastListRef = ref;
          }}
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
          keyExtractor={keyExtractor}
          onScroll={onScroll}
          onEndReachedThreshold={4}
          {...props}
        />
      </Grid>
    </Animated.View>
  );
}

export default CarList;
