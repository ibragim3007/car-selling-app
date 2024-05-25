import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import { normalizedSize } from '@/shared/utils/size';
import { FlashList } from '@shopify/flash-list';
import React, { useState } from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';
import ImageLazy from '../Informers/images/ImageLazy';

export interface ImageCarouselItem {
  id: number;
  uri?: string;
  title?: string;
}

interface ImageCarouselProps {
  data: string[];
}

const { width } = Dimensions.get('window');
const ITEM_LENGTH = width - normalizedSize(46);
const BORDER_RADIUS = 8;

const Carousel = ({ data }: ImageCarouselProps) => {
  const { colors } = useTheme();
  const [index, setIndex] = useState(0);
  return (
    <Grid style={{ borderRadius: 4, overflow: 'hidden' }}>
      <View
        style={{
          position: 'absolute',
          zIndex: 10,
          right: normalizedSize(30),
          top: normalizedSize(8),
          backgroundColor: '#292930db',
          paddingHorizontal: normalizedSize(4),
          paddingVertical: normalizedSize(2),
          borderRadius: colors.styles.borderRadius / 2,
        }}
      >
        <Typography color="white">
          {index + 1} / {data.length}
        </Typography>
      </View>
      <FlashList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        estimatedItemSize={ITEM_LENGTH}
        snapToInterval={ITEM_LENGTH + 6}
        onScroll={ev => {
          const index = Math.round(ev.nativeEvent.contentOffset.x / ITEM_LENGTH);
          setIndex(index);
        }}
        renderItem={({ item }) => {
          return (
            <Animated.View style={{ marginRight: 6, width: ITEM_LENGTH, height: normalizedSize(234) }}>
              <ImageLazy source={{ uri: item }} uri={item} style={styles.itemImage} />
            </Animated.View>
          );
        }}
      />
    </Grid>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: 'transparent' },
  flatListContent: {
    height: normalizedSize(234),
    // justifyContent: 'center',
    // alignContent: 'center',
  },
  item: {},
  itemContent: {
    height: normalizedSize(234),
    marginRight: normalizedSize(8),
    alignItems: 'center',
  },
  itemImage: {
    width: ITEM_LENGTH,
    height: normalizedSize(234),
    borderRadius: BORDER_RADIUS,
    resizeMode: 'cover',
  },
});

export default Carousel;
