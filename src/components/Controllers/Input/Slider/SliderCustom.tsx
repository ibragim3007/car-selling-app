import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import { normalizedSize } from '@/shared/utils/size';
import { Slider, SliderProps } from '@miblanchard/react-native-slider';
import React from 'react';

interface SliderCustomProps extends SliderProps {}

const SliderCustom = ({ ...props }: SliderCustomProps) => {
  const { colors } = useTheme();
  return (
    <Slider
      trackClickable={false}
      minimumTrackTintColor={colors.accent.primary}
      maximumTrackTintColor={colors.accent.primary_pale}
      trackStyle={{ height: 4 }}
      thumbStyle={{
        borderWidth: 1,
        width: normalizedSize(24),
        borderRadius: 50,
        height: normalizedSize(24),
        borderColor: '#00000030',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowRadius: 4,
        shadowOpacity: 0.1,
        shadowOffset: {
          height: 4,
          width: 0,
        },
      }}
      {...props}
    />
  );
};

export default SliderCustom;
