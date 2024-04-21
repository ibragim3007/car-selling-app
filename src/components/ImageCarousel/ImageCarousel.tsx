// Компонента была взята и доработана из https://github.com/newline-sandbox/react-native-flatlist-image-carousel/tree/main

import { useThrottle } from '@/shared/hooks/stable/useThrottle';
import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import Typography from '@/shared/ui/typography/Typography';
import { normalizedSize } from '@/shared/utils/size';
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, FlatList, Image, StyleSheet, View, ViewToken } from 'react-native';

const { width } = Dimensions.get('window');

const ITEM_LENGTH = width - normalizedSize(46); // Item is a square. Therefore, its height and width are of the same length.

const BORDER_RADIUS = 8;

export interface ImageCarouselItem {
  id: number;
  uri?: string;
  title?: string;
}

interface ImageCarouselProps {
  data: string[];
}

const ImageCarousel: FC<ImageCarouselProps> = ({ data }) => {
  const { colors } = useTheme();
  const scrollX = useRef(new Animated.Value(0)).current;
  const [dataWithPlaceholders, setDataWithPlaceholders] = useState<string[]>(data);

  const [currentItemInView, setCurrentItemInView] = useState(1);
  const flatListRef = useRef<FlatList<any>>(null);

  const [currentIndexElement, setCurrentIndexElement] = useState(0);
  const currentIndex = useThrottle(currentIndexElement);
  const onScrollChange = (offsetProgress: number, absoluteProgress: number) => {
    setCurrentIndexElement(Math.round(absoluteProgress));
  };

  useEffect(() => {
    setDataWithPlaceholders(data);
  }, [data]);

  const handleOnViewableItemsChanged = useCallback((info: { viewableItems: ViewToken[]; changed: ViewToken[] }) => {
    const { viewableItems } = info;

    const itemsInView = viewableItems.filter(({ item }: { item: ImageCarouselItem }) => item.uri && item.title);

    if (viewableItems[0].isViewable) {
      setCurrentItemInView(viewableItems[0].index || 0);
    }

    if (itemsInView.length === 0) {
      return;
    }
  }, []);

  // `data` perameter is not used. Therefore, it is annotated with the `any` type to merely satisfy the linter.
  const getItemLayout = (_data: any, index: number) => ({
    length: ITEM_LENGTH,
    offset: ITEM_LENGTH * (index - 1),
    index,
  });

  return (
    <View style={styles.container}>
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
          {currentIndex} / {dataWithPlaceholders.length}
        </Typography>
      </View>
      <FlatList
        ref={flatListRef}
        data={dataWithPlaceholders}
        renderItem={({ item }) => {
          return (
            <View style={{ width: ITEM_LENGTH }}>
              <Animated.View style={[{}, styles.itemContent]}>
                <Image source={{ uri: item }} style={styles.itemImage} />
              </Animated.View>
            </View>
          );
        }}
        getItemLayout={getItemLayout}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        bounces={false}
        decelerationRate={0}
        renderToHardwareTextureAndroid
        contentContainerStyle={styles.flatListContent}
        snapToInterval={ITEM_LENGTH}
        snapToAlignment="start"
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
        scrollEventThrottle={16}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 100,
        }}
      />
    </View>
  );
};

export default ImageCarousel;

const styles = StyleSheet.create({
  container: { backgroundColor: 'transparent' },
  flatListContent: {
    height: normalizedSize(234),
    // justifyContent: 'center',
    // alignContent: 'center',
  },
  item: {},
  itemContent: {
    marginRight: normalizedSize(8),
    alignItems: 'center',
  },
  itemImage: {
    width: '100%',
    height: normalizedSize(234),
    borderRadius: BORDER_RADIUS,
    resizeMode: 'cover',
  },
});
