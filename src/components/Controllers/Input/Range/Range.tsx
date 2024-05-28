import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import { FlashList, FlashListProps } from '@shopify/flash-list';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

import { normalizedSize } from '@/shared/utils/size';
import { ScrollView } from 'react-native-gesture-handler';
import RangeItem, { ITEM_SIZE } from './RangeItem';

interface RangeProps extends Partial<FlashListProps<number>> {
  label?: string;
  currentValue?: number;
  onChange: (newValue: number) => void;
}

const Range = ({ currentValue, onChange, label, ...props }: RangeProps) => {
  const ref = React.useRef<FlashList<number>>(null);
  const findIndex = props.data?.findIndex(d => d === currentValue) || 0;
  const [index, setIndex] = useState(findIndex === -1 ? 0 : findIndex);
  const scrollX = useRef(new Animated.Value(0)).current;

  const onUpdate = () => {
    if (props.data) onChange(props.data[index]);
  };

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const posY = event.nativeEvent.contentOffset.y;
    scrollX.setValue(posY);
    setIndex(Math.round(posY / ITEM_SIZE));

    // if (props.data) onChange(props.data[index]);
  };

  useEffect(() => {
    onUpdate();
  }, [props.data]);

  return (
    <Grid row flex={1} space="lg" justfity="center" align="center">
      {label && (
        <Grid>
          <Typography color="secondary" variant="subhead">
            {label}
          </Typography>
        </Grid>
      )}
      <Grid flex={1} height={normalizedSize(170)}>
        <FlashList
          {...props}
          data={props.data}
          ref={ref}
          initialScrollIndex={index}
          showsVerticalScrollIndicator={false}
          snapToInterval={ITEM_SIZE}
          estimatedItemSize={ITEM_SIZE}
          decelerationRate="fast"
          renderScrollComponent={ScrollView}
          onMomentumScrollEnd={onUpdate}
          onScroll={onScroll}
          contentContainerStyle={{
            paddingVertical: ITEM_SIZE + normalizedSize(32.5),
          }}
          renderItem={({ item, index }) => <RangeItem title={item} index={index} scrollX={scrollX} />}
        />
      </Grid>
    </Grid>
  );
};

export default Range;
