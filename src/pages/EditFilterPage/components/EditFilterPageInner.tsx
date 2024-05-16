import BottomButton from '@/components/Controllers/buttons/BottomButton';
import FilterForm from '@/modules/FilterForm';
import { createFilterDefault } from '@/shared/constants/defaultValues/createFilterDefault';
import { IEditFilter } from '@/shared/types/filters.types';
import Grid from '@/shared/ui/layout/Grid';
import ScrollViewPage from '@/shared/ui/layout/ScrollViewPage';
import { Stack } from 'expo-router';
import React from 'react';
import { FieldValues, FormProvider, useForm, useWatch } from 'react-hook-form';

interface EditFilterPageInnerProps {
  filter: IEditFilter;
}

const EditFilterPageInner = ({ filter }: EditFilterPageInnerProps) => {
  const { ...formApi } = useForm({
    defaultValues: filter || createFilterDefault,
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  console.log(formApi.formState.isDirty);

  const onPressCreate = (data: FieldValues) => {
    console.log(data);
  };

  const { name } = useWatch({ control: formApi.control });

  return (
    <FormProvider {...formApi}>
      <Stack.Screen options={{ headerTitle: name || '' }} />
      <Grid flex={1}>
        <ScrollViewPage style={{ flexGrow: 1 }} spaceVertical="sm">
          <FilterForm formApi={formApi} />
        </ScrollViewPage>
        <BottomButton>Сохранить</BottomButton>
      </Grid>
    </FormProvider>
  );
};

export default EditFilterPageInner;
