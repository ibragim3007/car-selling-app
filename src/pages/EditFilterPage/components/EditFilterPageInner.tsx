import FilterForm from '@/modules/FilterForm';
import { createFilterDefault } from '@/shared/constants/defaultValues/createFilterDefault';
import { IEditFilter } from '@/shared/types/filters.types';
import { Stack } from 'expo-router';
import React from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';

interface EditFilterPageInnerProps {
  filter: IEditFilter;
}

const EditFilterPageInner = ({ filter }: EditFilterPageInnerProps) => {
  const { ...formApi } = useForm({
    defaultValues: filter || createFilterDefault,
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const { name } = useWatch({ control: formApi.control });

  return (
    <FormProvider {...formApi}>
      <Stack.Screen options={{ headerTitle: name || '' }} />
      <FilterForm formApi={formApi} />
    </FormProvider>
  );
};

export default EditFilterPageInner;
