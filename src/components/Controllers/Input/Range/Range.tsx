import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import { FlashList, FlashListProps } from '@shopify/flash-list';
import React, { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import RangeItem, { ITEM_SIZE } from './RangeItem';
import { normalizedSize } from '@/shared/utils/size';

interface RangeProps extends Partial<FlashListProps<number>> {
  label?: string;
  currentValue?: number;
  onChange: (newValue: number) => void;
}

const Range = ({ currentValue, onChange, label, ...props }: RangeProps) => {
  const ref = React.useRef<FlashList<number>>(null);
  const [index, setIndex] = useState(props.data?.findIndex(d => d === currentValue) || 0);
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setIndex(0);
  }, [currentValue, props.data]);

  const onUpdate = () => {
    if (props.data) onChange(props.data[index]);
  };

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
          onScroll={ev => {
            const index = Math.round(ev.nativeEvent.contentOffset.y / ITEM_SIZE);
            setIndex(index);
            scrollX.setValue(ev.nativeEvent.contentOffset.y);
          }}
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
