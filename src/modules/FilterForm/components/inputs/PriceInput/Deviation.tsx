import { IFilterCreate } from '@/shared/types/filters.types';
import TitleCheckbox from '@/shared/ui/inputs/TitleCheckbox';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';

import React from 'react';
import { useController, useFormContext, useWatch } from 'react-hook-form';
import DeviationSlider from './DeviationSlider';
import { isArraysEqual } from '@/shared/utils/isArraysEqual';

interface DeviationProps {}

const Ничего_не_выбрано = [0];
const Показывать_объявления_в_которых_изменили_цену = [0, 1, 2];
const Показывать_объявления_в_которых_изменили_цену_и_выбрано_Цена_понизилась = [0, 2];
const Показывать_объявления_в_которых_изменили_цену_и_выбрано_Цена_повысилась = [0, 1];

const Deviation = ({ ...props }: DeviationProps) => {
  const { control, setValue } = useFormContext<IFilterCreate>();
  const {
    field: { value: minPricechange },
  } = useController({ control, name: 'minPricechange' });

  const pricechanges = useWatch({ control, name: 'pricechanges' });

  // const isCheckedDefault = minPricechange !== undefined ? (minPricechange > 0 ? true : false) : false;
  const isChecked =
    isArraysEqual(pricechanges, Показывать_объявления_в_которых_изменили_цену) ||
    pricechanges === Показывать_объявления_в_которых_изменили_цену_и_выбрано_Цена_понизилась ||
    pricechanges === Показывать_объявления_в_которых_изменили_цену_и_выбрано_Цена_повысилась;

  const updateCheck = () => {
    // console.log(isChecked, pricechanges);
    if (!isChecked) {
      setValue('pricechanges', Показывать_объявления_в_которых_изменили_цену);
    } else setValue('pricechanges', Ничего_не_выбрано);
  };

  const onChangeComplete = (value: number[]) => {
    setValue('minPricechange', Math.ceil(value[0]), { shouldDirty: true });
  };

  return (
    <Grid space="md" paddingBottom={15}>
      <TitleCheckbox
        renderLabel={<Typography variant="footnote">Показывать объявления, в которых изменили цену</Typography>}
        checked={isChecked}
        onChange={updateCheck}
      />
      {isChecked && <DeviationSlider value={minPricechange} onSlidingComplete={onChangeComplete} />}
    </Grid>
  );
};

export default Deviation;
