import SelectRange from '@/components/Controllers/Input/Select/SelectRange';
import { IFilterCreate } from '@/shared/types/filters.types';
import React from 'react';
import { useController, useFormContext } from 'react-hook-form';
import WrapInputLabel from '../../wrapper/WrapInputLabel';
import WrapperBlock from '../../wrapper/WrapperBlock';
import { PRICE_MOCK } from '@/shared/constants/enums/RangeValues';
import Deviation from './Deviation';
import Grid from '@/shared/ui/layout/Grid';

const PriceInput = () => {
  const { control, setValue } = useFormContext<IFilterCreate>();

  const {
    field: { value: priceValue },
  } = useController({ control, name: 'prices' });

  return (
    <WrapperBlock>
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
      </Grid>
    </WrapperBlock>
  );
};

export default PriceInput;
