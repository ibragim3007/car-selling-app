import BottomButton from '@/components/Controllers/buttons/BottomButton';
import FilterForm from '@/modules/FilterForm';
import { createFilterDefault } from '@/shared/constants/defaultValues/createFilterDefault';
import ScrollViewPage from '@/shared/ui/layout/ScrollViewPage';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const NewFIlterPage = () => {
  const { ...formApi } = useForm({
    defaultValues: createFilterDefault,
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  return (
    <FormProvider {...formApi}>
      <ScrollViewPage spaceVertical="sm">
        <FilterForm formApi={formApi} />
      </ScrollViewPage>
      <BottomButton>Создать</BottomButton>
    </FormProvider>
  );
};

export default NewFIlterPage;
