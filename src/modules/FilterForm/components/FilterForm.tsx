import Input from '@/components/Controllers/Input/Input';
import { IFilterCreate } from '@/shared/types/filters.types';
import Grid from '@/shared/ui/layout/Grid';
import React from 'react';
import { useForm } from 'react-hook-form';
import WrapperBlock from './wrapper/WrapperBlock';
import { createFilterDefault } from '@/shared/constants/defaultValues/createFilterDefault';
import ToggleButton from '@/components/Controllers/buttons/ToggleButton';

const FilterForm = () => {
  const { control } = useForm<IFilterCreate>({
    defaultValues: createFilterDefault,
  });

  return (
    <Grid space="sm">
      <WrapperBlock title="Название подборки">
        <Input control={control} name="name" />
      </WrapperBlock>
      <WrapperBlock title="География">
        <ToggleButton
          onChange={item => console.log(item)}
          value={{ title: 'По городам', value: 'city' }}
          items={[
            { title: 'По городам', value: 'city' },
            { title: 'По регионам', value: 'regions' },
          ]}
        />
      </WrapperBlock>
    </Grid>
  );
};

export default FilterForm;
