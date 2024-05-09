import Input from '@/components/Controllers/Input/Input';
import Grid from '@/shared/ui/layout/Grid';
import React from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';
import AddButton from './buttons/AddButton';
import GeoInputs from './inputs/GeoInput/GeoInputs';
import WrapperBlock from './wrapper/WrapperBlock';

interface FilterFormProps<T extends FieldValues> {
  formApi: UseFormReturn<T, any, undefined>;
}

const FilterForm = <T extends FieldValues>({ formApi }: FilterFormProps<T>) => {
  const { control, handleSubmit, formState } = formApi;

  return (
    <Grid space="sm">
      <WrapperBlock title="Название подборки">
        <Input control={control} name="name" />
      </WrapperBlock>
      <GeoInputs />
      <WrapperBlock title="Тип авто">
        <Input control={control} name="name" />
        <AddButton>Добавить авто</AddButton>
      </WrapperBlock>
    </Grid>
  );
};

export default FilterForm;
