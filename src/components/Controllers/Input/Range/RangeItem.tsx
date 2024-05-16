import { formatNumber } from '@/shared/helpers/formatMileage';
import Typography from '@/shared/ui/typography/Typography';
import { normalizedSize } from '@/shared/utils/size';
import React from 'react';
import { Animated } from 'react-native';

interface RangeItemProps {
  title: string | number;
  index: number;
  scrollX: Animated.Value;
}

export const ITEM_SIZE = normalizedSize(35);
const RangeItem = ({ title, index, scrollX }: RangeItemProps) => {
  const inputRange = [
    (index - 2) * ITEM_SIZE,
    (index - 1) * ITEM_SIZE,
    index * ITEM_SIZE,
    (index + 1) * ITEM_SIZE,
    (index + 2) * ITEM_SIZE,
  ];

  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [0.6, 0.7, 1, 0.7, 0.6],
  });
  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0.8, 0.95, 1, 0.95, 0.8],
  });

  return (
    <Animated.View
      style={[
        {
          // backgroundColor: 'coral',
          height: ITEM_SIZE,
          // paddingVertical: normalizedSize(8),
          alignContent: 'center',
          justifyContent: 'center',
        },
        // { opacity, transform: [{ scale }] },
      ]}
    >
      <Animated.View
        style={[
          { flexWrap: 'wrap', alignSelf: 'flex-start' },
          { opacity, transform: [{ scale }] },
        ]}
      >
        <Typography textAlign="left" variant="subhead">
          {formatNumber(Number(title))}
        </Typography>
      </Animated.View>
    </Animated.View>
  );
};

export default RangeItem;
