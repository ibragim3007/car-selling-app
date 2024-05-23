import BottomButton from '@/components/Controllers/buttons/BottomButton';
import FilterForm from '@/modules/FilterForm';
import { useEditFilterMutation, useFilterQuery } from '@/shared/api/entityies/filters/filter.api';
import { createFilterDefault } from '@/shared/constants/defaultValues/createFilterDefault';
import { Inform } from '@/shared/services/logger.service/loger.service';
import { IEditFilter } from '@/shared/types/filters.types';
import Grid from '@/shared/ui/layout/Grid';
import ScrollViewPage from '@/shared/ui/layout/ScrollViewPage';
import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { FieldValues, FormProvider, useForm, useWatch } from 'react-hook-form';

interface EditFilterPageInnerProps {
  filter: IEditFilter;
}

const EditFilterPageInner = ({ filter }: EditFilterPageInnerProps) => {
  const params = useLocalSearchParams<{ id: string }>();
  const [editFilter, { isLoading }] = useEditFilterMutation();
  const { ...formApi } = useForm({
    defaultValues: filter || createFilterDefault,
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const onPressSave = async (data: FieldValues) => {
    try {
      await editFilter({ id: params.id || '0', filter: data }).unwrap();
      Inform.success('Фильтр сохранен!');
    } catch (e) {
      Inform.error(e);
    }
  };

  const { name } = useWatch({ control: formApi.control });

  return (
    <FormProvider {...formApi}>
      <Stack.Screen options={{ headerTitle: name || '' }} />
      <Grid flex={1}>
        <ScrollViewPage style={{ flexGrow: 1 }} spaceVertical="sm">
          <FilterForm formApi={formApi} />
        </ScrollViewPage>
        <BottomButton
          loading={isLoading}
          disabled={!formApi.formState.isDirty}
          onPress={formApi.handleSubmit(onPressSave)}
        >
          Сохранить
        </BottomButton>
      </Grid>
    </FormProvider>
  );
};

export default EditFilterPageInner;
