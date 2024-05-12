import ELD from '@/components/Handlers/ELD/ELD';
import List from '@/components/Informers/tables/List';
import RowList from '@/components/Informers/tables/RowList';
import { useModelsQuery } from '@/shared/api/entityies/dictionary/dictionary.api';
import { IModel } from '@/shared/types/dictionary.types';
import Grid from '@/shared/ui/layout/Grid';
import React, { useCallback, useState } from 'react';
import AcceptButton from '../../../buttons/AcceptButton';
import SearchInput from '../../../buttons/SearchInput';
import { useController, useFormContext } from 'react-hook-form';
import { IFilterCreate } from '@/shared/types/filters.types';

interface ModelsListProps {
  markaId: number;
}

const ModelsList = ({ markaId }: ModelsListProps) => {
  const keyExtractor = useCallback((item: IModel, i: number) => `${i}-${item.id}`, []);
  const { data: models, isLoading, error, isError } = useModelsQuery(markaId);

  const { control } = useFormContext<IFilterCreate>();
  const { field } = useController({ control, name: 'models' });

  const [pickedValues, setPickedValues] = useState(field.value);

  const onChangeCurrentPicked = (value: number) => {
    const isSelected = pickedValues?.find(curr => curr === value) !== undefined ? true : false;
    if (pickedValues && !isSelected) {
      setPickedValues([...pickedValues, value]);
    } else if (isSelected) setPickedValues(pickedValues?.filter(a => a !== value));
  };

  return (
    <ELD data={models} isLoading={isLoading} error={error} isError={isError}>
      <Grid flex={1}>
        <Grid paddingHorizontal={12}>
          <SearchInput placeholder={'Введите...'} />
        </Grid>
        <List<IModel>
          data={models}
          renderItem={({ item }) => (
            <RowList onChange={onChangeCurrentPicked} selectedValues={pickedValues} title={item.name} value={item.id} />
          )}
          keyExtractor={keyExtractor}
        />
        <AcceptButton />
      </Grid>
    </ELD>
  );
};

export default ModelsList;
