import Input from '@/components/Controllers/Input/Input';
import Grid from '@/shared/ui/layout/Grid';
import React from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';
import CarInput from './inputs/CarInput/CarInput';
import CharacteristicInput from './inputs/CharacteristicInput/CharacteristicInput';
import { GeoInputs } from './inputs/GeoInput/GeoInputs';
import MileagesInput from './inputs/MileagesInput/MileagesInput';
import PriceInput from './inputs/PriceInput/PriceInput';
import StateInput from './inputs/StateInput/StateInput';
import WrapperBlock from './wrapper/WrapperBlock';
import SourceInput from './inputs/SourceInput/SourceInput';
import TelegramNotificationInput from './inputs/TelegramNotificationInput/TelegramNotificationInput';

interface FilterFormProps<T extends FieldValues> {
  formApi: UseFormReturn<T, any, undefined>;
}

const FilterForm = <T extends FieldValues>({ formApi }: FilterFormProps<T>) => {
  const { control } = formApi;

  return (
    <Grid space="sm" paddingBottom={40}>
      <WrapperBlock title="Название подборки">
        <Input control={control} name="name" showError rules={{ required: 'Поле должно быть заполнено!' }} />
      </WrapperBlock>
      <GeoInputs />
      <CarInput />
      <StateInput />
      <MileagesInput />
      <PriceInput />
      <CharacteristicInput />
      <SourceInput />
      <TelegramNotificationInput />
    </Grid>
  );
};

export default FilterForm;
