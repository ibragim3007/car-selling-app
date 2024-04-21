import { useThrottle } from '@/shared/hooks/stable/useThrottle';
import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
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
  sliderHeight: normalizedSize(234),
} as const;

interface SliderImagesProps {
  items: string[];
}

const SliderImages = ({ items }: SliderImagesProps) => {
  const { colors } = useTheme();
  const [currentIndexElement, setCurrentIndexElement] = useState(0);
  const currentIndex = useThrottle(currentIndexElement, 200);
  const onScrollChange = (offsetProgress: number, absoluteProgress: number) => {
    setCurrentIndexElement(Math.round(absoluteProgress));
  };

  return (
    <Grid style={{ height: baseOptions.sliderHeight }}>
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
          {currentIndex + 1} / {carImages.length}
        </Typography>
      </View>
      <Grid>
        <Carousel
          {...baseOptions}
          style={{ width: '100%' }}
          loop={false}
          data={items}
          onProgressChange={onScrollChange}
          renderItem={({ item }) => (
            <Image
              style={{ borderRadius: colors.styles.borderRadius, marginRight: 8 }}
              // width={baseOptions.width}
              height={baseOptions.sliderHeight}
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
