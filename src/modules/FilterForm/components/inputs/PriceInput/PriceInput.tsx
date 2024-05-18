import { PRICE_MOCK } from '@/shared/constants/enums/RangeValues';
import { IFilterCreate } from '@/shared/types/filters.types';
import Grid from '@/shared/ui/layout/Grid';
import React from 'react';
import { useController, useFormContext } from 'react-hook-form';
import WrapInputLabel from '../../wrapper/WrapInputLabel';
import WrapperBlock from '../../wrapper/WrapperBlock';
import Deviation from './Deviation';
import Market from './Market';
import SelectRange from '@/components/Controllers/Input/Select/SelectRanges/SelectRange';

const PriceInput = () => {
  const { control, setValue } = useFormContext<IFilterCreate>();

  const {
    field: { value: priceValue },
  } = useController({ control, name: 'prices' });

  return (
    <WrapperBlock paddingBottom={35}>
      <Grid space="lg">
        <WrapInputLabel title="Цена">
          <SelectRange
            values={priceValue}
            onChangeValues={value => setValue('prices', value, { shouldDirty: true })}
            title="Цена"
            control={control}
            name="prices"
            dataMock={PRICE_MOCK}
            subtitleInput="₽"
          />
        </WrapInputLabel>
        <Deviation />

        <Market />
      </Grid>
    </WrapperBlock>
  );
};

export default PriceInput;
