import { PRICE_MOCK } from '@/shared/constants/enums/RangeValues';
import { IFilterCreate } from '@/shared/types/filters.types';
import Grid from '@/shared/ui/layout/Grid';
import React from 'react';
import { useController, useFormContext, useWatch } from 'react-hook-form';
import WrapInputLabel from '../../wrapper/WrapInputLabel';
import WrapperBlock from '../../wrapper/WrapperBlock';
import Deviation from './Deviation';
import Market from './Market';
import SelectRange from '@/components/Controllers/Input/Select/SelectRanges/SelectRange';
import Typography from '@/shared/ui/typography/Typography';

const PriceInput = () => {
  const { control, setValue } = useFormContext<IFilterCreate>();

  const priceValue = useWatch({ control, name: 'prices' });

  const {
    field: { value: pricechanges },
  } = useController({ control, name: 'pricechanges' });

  const {
    field: { value: minPricechange },
  } = useController({ control, name: 'minPricechange' });

  const {
    field: { value: avgPriceDelta },
  } = useController({ control, name: 'avgPriceDelta' });

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
        <Grid>
          <Typography>prices: {JSON.stringify(priceValue)}</Typography>
          <Typography>pricechanges: {JSON.stringify(pricechanges)}</Typography>
          <Typography>minPricechange: {JSON.stringify(minPricechange)}</Typography>
          <Typography>avgPriceDelta: {JSON.stringify(avgPriceDelta)}</Typography>
        </Grid>
        <Deviation />
        <Market />
      </Grid>
    </WrapperBlock>
  );
};

export default PriceInput;
