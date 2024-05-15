import Input from '@/components/Controllers/Input/Input';
import Grid from '@/shared/ui/layout/Grid';
import React from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';
import CarInput from './inputs/CarInput/CarInput';
import WrapperBlock from './wrapper/WrapperBlock';
import Button from '@/shared/ui/buttons/Button';
import { GeoInputs } from './inputs/GeoInput/GeoInputs';
import StateInput from './inputs/StateInput/StateInput';

interface FilterFormProps<T extends FieldValues> {
  formApi: UseFormReturn<T, any, undefined>;
}

const FilterForm = <T extends FieldValues>({ formApi }: FilterFormProps<T>) => {
  const { control, handleSubmit, formState } = formApi;

  const onPressCreate = (data: FieldValues) => {
    console.log(data.regions);
  };

  return (
    <Grid space="sm">
      <WrapperBlock title="Название подборки">
        <Input control={control} name="name" />
      </WrapperBlock>
      <GeoInputs />
      <CarInput />
      <StateInput />
      <Button onPress={handleSubmit(onPressCreate)}>Создать</Button>
    </Grid>
  );
};

export default FilterForm;
