import { useTheme } from '@/shared/hooks/stable/useTheme';
import { carImages } from '@/shared/mock/car1';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import { normalizedSize } from '@/shared/utils/size';
import React, { useState } from 'react';
import { Dimensions, Image, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const PAGE_WIDTH = Dimensions.get('window').width;

const baseOptions = {
  width: PAGE_WIDTH * 0.885,
} as const;

interface SliderImagesProps {}

const SliderImages = () => {
  const { colors } = useTheme();
  const [currentIndexElement, setCurrentIndexElement] = useState(0);

  const updateCurrentIndex = (index: number) => {
    setCurrentIndexElement(index);
  };
  return (
    <Grid>
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
          {currentIndexElement + 1} / {carImages.length}
        </Typography>
      </View>
      <Grid>
        <Carousel
          {...baseOptions}
          width={PAGE_WIDTH * 0.885}
          style={{ width: '100%' }}
          maxScrollDistancePerSwipe={400}
          loop={false}
          data={carImages}
          onSnapToItem={updateCurrentIndex}
          renderItem={({ index, item }) => (
            <Image
              style={{ borderRadius: colors.styles.borderRadius, marginRight: 8 }}
              // width={baseOptions.width}
              height={normalizedSize(234)}
              source={{
                uri: item,
              }}
            />
          )}
        />
      </Grid>
    </Grid>
  );
};

export default SliderImages;
