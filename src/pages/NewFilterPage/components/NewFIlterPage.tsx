import BottomButton from '@/components/Controllers/buttons/BottomButton';
import FilterForm from '@/modules/FilterForm';
import { useCreateFilterMutation } from '@/shared/api/entityies/filters/filter.api';
import { createFilterDefault } from '@/shared/constants/defaultValues/createFilterDefault';
import { Inform } from '@/shared/services/logger.service/loger.service';
import ScrollViewPage from '@/shared/ui/layout/ScrollViewPage';
import React from 'react';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';

const NewFIlterPage = () => {
  const { ...formApi } = useForm({
    defaultValues: createFilterDefault,
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const [create, { isLoading }] = useCreateFilterMutation();
  const createNewFilter = async (data: FieldValues) => {
    try {
      await create(data).unwrap();
      Inform.success('Фильтр создан');
    } catch (e) {
      Inform.error(e);
    }
  };

  return (
    <FormProvider {...formApi}>
      <ScrollViewPage spaceVertical="sm">
        <FilterForm formApi={formApi} />
      </ScrollViewPage>
      <BottomButton loading={isLoading} onPress={formApi.handleSubmit(createNewFilter)}>
        Создать
      </BottomButton>
    </FormProvider>
  );
};

export default NewFIlterPage;
