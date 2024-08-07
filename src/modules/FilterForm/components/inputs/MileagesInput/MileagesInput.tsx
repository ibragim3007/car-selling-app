import ToggleButton from '@/components/Controllers/buttons/ToggleButton';
import ToggleButtonItem from '@/components/Controllers/buttons/ToggleButtonItem';
import { carMiliages } from '@/shared/constants/enums/Car';
import { IFilterCreate } from '@/shared/types/filters.types';
import Grid from '@/shared/ui/layout/Grid';
import React from 'react';
import { useController, useFormContext } from 'react-hook-form';
import WrapInputLabel from '../../wrapper/WrapInputLabel';
import WrapperBlock from '../../wrapper/WrapperBlock';
import { MILEAGE_MOCK } from '@/shared/constants/enums/RangeValues';
import SelectRange from '@/components/Controllers/Input/Select/SelectRanges/SelectRange';

const MileagesInput = () => {
  const { setValue, control } = useFormContext<IFilterCreate>();

  const { field } = useController({ control, name: 'carState' });
  const {
    field: { value: mileages },
  } = useController({ control, name: 'mileages' });

  return (
    <WrapperBlock>
      <Grid space="lg">
        <WrapInputLabel title="Пробег">
          <ToggleButton
            items={carMiliages}
            Item={(item, index) => (
              <ToggleButtonItem
                onPress={item => setValue('carState', item.id, { shouldDirty: true })}
                key={item.id}
                currentValue={field.value}
                title={item.text}
                value={item.id}
                length={carMiliages.length}
                index={index}
                item={item}
              />
            )}
          />
        </WrapInputLabel>
        {field.value !== 1 && (
          <WrapInputLabel title="Величина пробега">
            <SelectRange
              values={mileages}
              onChangeValues={value => setValue('mileages', value, { shouldDirty: true })}
              title="Пробег"
              control={control}
              name="mileages"
              subtitleInput="км"
              dataMock={MILEAGE_MOCK}
            />
          </WrapInputLabel>
        )}
      </Grid>
    </WrapperBlock>
  );
};

export default MileagesInput;
