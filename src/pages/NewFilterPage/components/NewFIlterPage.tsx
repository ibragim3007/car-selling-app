import FilterForm from '@/modules/FilterForm';
import { createFilterDefault } from '@/shared/constants/defaultValues/createFilterDefault';
import ScrollViewPage from '@/shared/ui/layout/ScrollViewPage';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const NewFIlterPage = () => {
  const formApi = useForm({
    defaultValues: createFilterDefault,
  });
  return (
    <ScrollViewPage spaceVertical="sm">
      <FormProvider {...formApi}>
        <FilterForm formApi={formApi} />
      </FormProvider>
    </ScrollViewPage>
  );
};

export default NewFIlterPage;
