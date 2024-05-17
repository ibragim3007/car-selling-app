import { IFilterCreate } from '@/shared/types/filters.types';
import TitleCheckbox from '@/shared/ui/inputs/TitleCheckbox';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';

import React, { useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import DeviationSlider from './DeviationSlider';

interface DeviationProps {}

const Deviation = ({ ...props }: DeviationProps) => {
  const { control, setValue } = useFormContext<IFilterCreate>();
  const {
    field: { value: avgCostDeviation },
  } = useController({ control, name: 'avgCostDeviation' });

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
        renderLabel={<Typography variant="footnote">Отклонение от средней цены по региону</Typography>}
        checked={isChecked}
        onChange={updateCheck}
      />
      {isChecked && <DeviationSlider value={avgCostDeviation} onSlidingComplete={onChangeComplete} />}
    </Grid>
  );
};

export default Deviation;
