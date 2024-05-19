import SliderCustom from '@/components/Controllers/Input/Slider/SliderCustom';
import TagPrice from '@/components/Informers/TagPrice';
import { convertNumberToSliderView } from '@/shared/helpers/convertNumberToSliderView';
import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import { normalizedSize } from '@/shared/utils/size';
import { SliderOnChangeCallback } from '@miblanchard/react-native-slider/lib/types';
import React, { useState } from 'react';

const STEP = 50_000;
const MIN = -500_000;
const MAX = 0;
const Marked = [MIN];
const MarkedNumber = [MIN];
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
      <TagPrice amount={currentValue} isRised={currentValue > 0} />
      <Grid row align="center" style={{ flexDirection: 'row-reverse' }}>
        <Grid style={{ width: '15%', height: 4, backgroundColor: colors.background.negative }} />
        <Grid flex={1}>
          <SliderCustom
            onSlidingComplete={onSlidingComplete}
            value={currentValue}
            onValueChange={changeValue}
            maximumValue={MAX}
            minimumValue={MIN}
            step={1000}
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
                      {/* {Marked[index].toString().slice(0, 3)} */}
                      {convertNumberToSliderView(Marked[index])}
                    </Typography>
                  </Grid>
                )}
              </Grid>
            )}
            animationType={'spring'}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DeviationSlider;
