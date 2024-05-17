import TitleCheckbox from '@/shared/ui/inputs/TitleCheckbox';
import Grid from '@/shared/ui/layout/Grid';
import React, { useState } from 'react';
import MarketSlider from './MarketSlider';
import Typography from '@/shared/ui/typography/Typography';
import { useController, useFormContext } from 'react-hook-form';
import { IFilterCreate } from '@/shared/types/filters.types';

const Market = () => {
  const { control, setValue } = useFormContext<IFilterCreate>();
  const {
    field: { value: avgCostDeviation },
  } = useController({ control, name: 'minPricechange' });

  const isCheckedDefault = avgCostDeviation !== undefined ? (avgCostDeviation > 0 ? true : false) : false;
  const [isChecked, setIsChecked] = useState(isCheckedDefault);
  const updateCheck = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      setValue('avgCostDeviation', 0);
    }
  };

  const onChangeComplete = (value: number[]) => {
    setValue('avgCostDeviation', Math.ceil(value[0]));
  };
  return (
    <Grid space="md">
      <TitleCheckbox
        renderLabel={<Typography variant="footnote">Показывать объявления, в которых изменили цену</Typography>}
        checked={isChecked}
        onChange={updateCheck}
      />
      {isChecked && <MarketSlider onSlidingComplete={onChangeComplete} />}
    </Grid>
  );
};

export default Market;
