import { priceFormat } from '@/shared/helpers/priceFormat';
import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import Grid from '@/shared/ui/layout/Grid';
import Tag from '@/shared/ui/tags/Tag';
import Typography from '@/shared/ui/typography/Typography';
import { normalizedSize } from '@/shared/utils/size';
import { Slider } from '@miblanchard/react-native-slider';
import { SliderOnChangeCallback } from '@miblanchard/react-native-slider/lib/types';
import React, { useState } from 'react';

const STEP = 50000;
const MIN = 0;
const MAX = 500000;
const Marked = [0];
const MarkedNumber = [0];
for (let i = MIN; i <= MAX; i += STEP) {
  Marked.push(i);
}
for (let i = MIN; i <= MAX; i += STEP * 2) {
  MarkedNumber.push(i);
}

interface DeviationSliderProps {
  onSlidingComplete?: SliderOnChangeCallback;
  value?: number;
}

const DeviationSlider = ({ value, onSlidingComplete }: DeviationSliderProps) => {
  const [currentValue, setCurrentValue] = useState(value || 0);
  const changeValue = (newValue: number[]) => {
    setCurrentValue(newValue[0]);
  };

  const { colors } = useTheme();
  return (
    <Grid flex={1}>
      <Tag>{priceFormat(currentValue)}</Tag>
      <Slider
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
        onSlidingComplete={onSlidingComplete}
        minimumTrackTintColor={colors.accent.primary}
        maximumTrackTintColor={colors.accent.primary_pale}
        trackStyle={{ height: 4 }}
        value={currentValue}
        onValueChange={changeValue}
        maximumValue={MAX}
        minimumValue={MIN}
        // step={STEP}
        trackClickable={false}
        trackMarks={Marked}
        renderTrackMarkComponent={index => (
          <Grid gap={1} style={{ position: 'absolute', top: 17, left: 13 }}>
            <Grid>
              <Grid
                style={{
                  width: normalizedSize(1),
                  height: normalizedSize(4),
                  backgroundColor: colors.text.secondary,
                }}
              />
            </Grid>

            {MarkedNumber.includes(Marked[index]) && (
              <Grid style={{ right: '45%' }}>
                <Typography color="secondary" variant="caption-2">
                  {Marked[index].toString().slice(0, 3)}
                </Typography>
              </Grid>
            )}
          </Grid>
        )}
        renderMinimumTrackComponent={() => <Typography>{2}</Typography>}
      />
    </Grid>
  );
};

export default DeviationSlider;
