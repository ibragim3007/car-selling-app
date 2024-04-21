import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import { normalizedSize, normalizedSizeVertical } from '@/shared/utils/size';
import React from 'react';
import { Image } from 'react-native';

interface CarImageProps {
  image: string;
}

const CarImage: React.FC<CarImageProps> = ({ image }) => {
  const { colors } = useTheme();
  return (
    <Image
      style={{ borderRadius: colors.styles.borderRadius }}
      width={normalizedSize(104)}
      height={normalizedSizeVertical(122)}
      source={{
        uri: image,
      }}
    />
  );
};

export default CarImage;
