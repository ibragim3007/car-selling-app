import { ICar } from '@/shared/types';
import Button from '@/shared/ui/buttons/Button';
import Grid from '@/shared/ui/layout/Grid';
import { normalizedSize } from '@/shared/utils/size';
import { FlashList, FlashListProps, ListRenderItem } from '@shopify/flash-list';
import React, { useCallback, useState } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent, StyleSheet } from 'react-native';
import Animated, { FadeInDown, FadeOutDown, SlideInDown, SlideOutDown } from 'react-native-reanimated';
import CarItem from './CarItem/CarItem';

interface CarListProps extends Partial<FlashListProps<ICar>> {
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
  ...props
}: CarListProps) {
  const renderItem: ListRenderItem<ICar> = ({ item }) => {
    return <CarItem car={item} />;
  };
  const lengthItem = normalizedSize(145);

  const keyExtractor = useCallback((item: any, i: number) => `${i}-${item.id}`, []);

  let flastListRef: FlashList<ICar> | null;

  const goTopButton = () => {
    flastListRef?.scrollToOffset({ offset: 0, animated: true });
  };

  const [goTopButtonShow, setGoTopButtonShow] = useState(false);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (event.nativeEvent.contentOffset.y > 2000) setGoTopButtonShow(true);
    else setGoTopButtonShow(false);
  };

  return (
    <Grid flex={1} style={{ paddingTop: 0 }}>
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
        onEndReachedThreshold={8}
        {...props}
      />
      {goTopButtonShow && (
        <Animated.View style={styles.goTopButton} entering={FadeInDown} exiting={FadeOutDown}>
          <Button color="black" onPress={goTopButton}>
            Наверх
          </Button>
        </Animated.View>
      )}
    </Grid>
  );
}

const styles = StyleSheet.create({
  goTopButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});

export default CarList;
