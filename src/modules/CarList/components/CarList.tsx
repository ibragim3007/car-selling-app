import { ICar } from '@/shared/types';
import { normalizedSize } from '@/shared/utils/size';
import { FlashList, FlashListProps, ListRenderItem } from '@shopify/flash-list';
import React, { useCallback, useState } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import GoTopButton from './Buttons/GoTopButton';
import UpdateDataButton from './Buttons/UpdateDataButton';
import CarItem from './CarItem/CarItem';
interface CarListProps extends Partial<FlashListProps<ICar>> {
  headerComponent?: React.JSX.Element;
  footerComponent?: React.JSX.Element;
  stickyHeaderIndices?: number[];
  topOffset?: number;
  data?: ICar[];
  scrollToDefult?: number;
  loading?: boolean;
  toScrollOffsetY?: number;
  onRefresh?: () => void;
  updatePoolingInfo: (value: boolean) => void;
  scrollHandler: (yPos: number) => void;
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
  scrollHandler,
  ...props
}: CarListProps) {
  const lengthItem = normalizedSize(145);
  const [goTopButtonShow, setGoTopButtonShow] = useState(false);

  const renderItem: ListRenderItem<ICar> = ({ item }) => <CarItem car={item} />;
  const keyExtractor = useCallback((item: ICar, i: number) => `${i}-${item.id}`, []);

  let flashListRef: FlashList<ICar> | null;

  const goTopButton = () => flashListRef?.scrollToOffset({ offset: 0, animated: true });
  const goUpdateButton = () => {
    if (onRefresh) onRefresh();
    flashListRef?.scrollToOffset({ offset: 0, animated: true });
  };

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const yPos = event.nativeEvent.contentOffset.y;
    scrollHandler(yPos);
    if (yPos <= 100) updatePoolingInfo(true);
    else updatePoolingInfo(false);

    if (yPos > 2000) setGoTopButtonShow(true);
    else setGoTopButtonShow(false);
  };

  return (
    <>
      {goTopButtonShow && <UpdateDataButton onPress={goUpdateButton} />}
      {/* {goTopButtonShow && <GoTopButton goTopButton={goTopButton} />} */}
      <FlashList
        ref={ref => {
          flashListRef = ref;
        }}
        data={data}
        onRefresh={onRefresh}
        refreshing={loading}
        renderItem={renderItem}
        contentContainerStyle={{ paddingTop: normalizedSize(topOffset || 0) }}
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
    </>
  );
}

export default CarList;
