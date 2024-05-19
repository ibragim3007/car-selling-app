import SliderCustom from '@/components/Controllers/Input/Slider/SliderCustom';
import TagPrice from '@/components/Informers/TagPrice';
import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import { normalizedSize } from '@/shared/utils/size';
import { SliderOnChangeCallback } from '@miblanchard/react-native-slider/lib/types';
import React, { useEffect, useState } from 'react';
import LineDivider from './components/LineDivider';

const STEP = 50_000;
const MIN = -500_000;
const MAX = 1;
const Marked = [MIN];
const MarkedNumber = [0];
for (let i = MIN; i <= MAX; i += 2 * STEP) {
  Marked.push(i);
}
for (let i = MIN; i <= MAX; i += STEP * 4) {
  MarkedNumber.push(i);
}
interface MarketSliderProps {
  onSlidingComplete?: SliderOnChangeCallback;
  value?: number;
}

const MarketSlider = ({ value, onSlidingComplete }: MarketSliderProps) => {
  const [currentValue, setCurrentValue] = useState(value || 0);

  const { colors } = useTheme();
  const changeValue = (newValue: number[]) => {
    const [updatedValue] = newValue;

    if (updatedValue > 0) {
      setCurrentValue(0);
    } else setCurrentValue(updatedValue);
  };

  const [currentColor, setCurrentColor] = useState(colors.accent.primary);

  useEffect(() => {
    if (currentValue > 0) {
      setCurrentColor(colors.accent.red);
    } else {
      setCurrentColor(colors.accent.primary);
    }
  }, [colors.accent.primary, colors.accent.red, currentValue]);

  return (
    <Grid>
      <Grid justfity="space-between" row>
        <Typography
          color="success"
          style={{ width: normalizedSize(120) }}
          variant="caption-2"
          weight="bold"
          textAlign="left"
        >
          Ниже средней цены
        </Typography>
        <TagPrice amount={currentValue} isRised={currentValue > 0} />
        {/* <Tag>{priceFormat(currentValue)}</Tag> */}
        <Grid>
          <Typography
            color="red"
            style={{ width: normalizedSize(120) }}
            variant="caption-2"
            weight="bold"
            textAlign="right"
          >
            Выше средней цены
          </Typography>
        </Grid>
      </Grid>
      <Grid row align="center" style={{ flexDirection: 'row-reverse' }}>
        <Grid style={{ width: '15%', height: 4, backgroundColor: colors.background.negative }}>
          <Grid style={{ position: 'absolute', top: 19, left: '80%', alignContent: 'center' }}>
            <LineDivider />
            <Grid style={{ right: '45%', top: 1 }}>
              <Typography color="secondary" variant="caption-2">
                {convertNumberToSliderView(100)}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid flex={1}>
          <SliderCustom
            startFromZero
            onSlidingComplete={onSlidingComplete}
            onValueChange={changeValue}
            animationType={'spring'}
            value={currentValue < 0 ? currentValue : 0}
            step={10000}
            maximumValue={MAX}
            minimumValue={MIN}
            trackMarks={Marked}
            minimumTrackTintColor={currentColor}
            renderMaximumTrackComponent={() => (
              <Grid style={{ backgroundColor: colors.accent.primary, opacity: 0.05, height: 4, width: '81%' }} />
            )}
            renderTrackMarkComponent={index => (
              <Grid gap={1} style={{ position: 'absolute', top: 17, left: 13 }}>
                <LineDivider />
                {MarkedNumber.includes(Marked[index]) && (
                  <Grid style={{ right: '45%' }}>
                    <Typography color="secondary" variant="caption-2">
                      {convertNumberToSliderView(Marked[index])}
                    </Typography>
                  </Grid>
                )}
              </Grid>
            )}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

function convertNumberToSliderView(value: number): string {
  if (value < 0) return value.toString().slice(0, 4);
  if (value > 0) return `+${value.toString().slice(0, 3)}`;

  return value.toString();
}

export default MarketSlider;
