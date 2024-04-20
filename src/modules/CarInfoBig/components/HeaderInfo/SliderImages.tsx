import { useTheme } from '@/shared/hooks/stable/useTheme';
import { carImages } from '@/shared/mock/car1';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import { normalizedSize } from '@/shared/utils/size';
import React, { useState } from 'react';
import { Image, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

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
          right: normalizedSize(12),
          top: normalizedSize(8),
          backgroundColor: '#292930db',
          paddingHorizontal: normalizedSize(8),
          paddingVertical: normalizedSize(4),
          borderRadius: colors.styles.borderRadius / 2,
        }}
      >
        <Typography>
          {currentIndexElement + 1} / {carImages.length}
        </Typography>
      </View>
      <Carousel
        loop={false}
        width={normalizedSize(363)}
        height={normalizedSize(234)}
        scrollAnimationDuration={500}
        data={carImages}
        onSnapToItem={updateCurrentIndex}
        renderItem={({ index, item }) => (
          <Image
            style={{ borderRadius: colors.styles.borderRadius, marginHorizontal: 0 }}
            width={normalizedSize(343)}
            height={normalizedSize(234)}
            source={{
              uri: item,
            }}
          />
        )}
      />
    </Grid>
  );
};

export default SliderImages;
