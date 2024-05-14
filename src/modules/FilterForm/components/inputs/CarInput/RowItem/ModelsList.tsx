import ELD from '@/components/Handlers/ELD/ELD';
import List from '@/components/Informers/tables/List';
import RowList from '@/components/Informers/tables/RowList';
import { useModelsQuery } from '@/shared/api/entityies/dictionary/dictionary.api';
import { IModel } from '@/shared/types/dictionary.types';
import Grid from '@/shared/ui/layout/Grid';
import React, { useCallback, useState } from 'react';
import AcceptButton from '../../../../../../components/ModalCheckboxList/components/AcceptButton';
import SearchInput from '../../../../../../components/ModalCheckboxList/components/SearchInput';
import { useController, useFormContext } from 'react-hook-form';
import { IFilterCreate } from '@/shared/types/filters.types';
import { useBottomSheetModal } from '@gorhom/bottom-sheet';

interface ModelsListProps {
  markaId: number;
}
// нужно рефакторить эту парашу

const ModelsList = ({ markaId }: ModelsListProps) => {
  const keyExtractor = useCallback((item: IModel, i: number) => `${i}-${item.id}`, []);
  const { data: models, isLoading, error, isError } = useModelsQuery(markaId);
  const [search, setSearch] = useState('');
  const { dismiss } = useBottomSheetModal();
  const { control, setValue } = useFormContext<IFilterCreate>();
  const { field } = useController({ control, name: 'models' });

  const {
    field: { value: marksValue },
  } = useController({ control, name: 'marks' });

  const [pickedValues, setPickedValues] = useState(field.value || []);
  const [currentListPicked, setCurrentListPicked] = useState<number[]>([]);

  const onChangeCurrentPicked = (value: number) => {
    const isSelected = pickedValues?.find(curr => curr === value) !== undefined ? true : false;
    if (pickedValues && !isSelected) {
      setPickedValues([...pickedValues, value]);
      setCurrentListPicked([...currentListPicked, value]);
    } else if (isSelected) {
      setPickedValues(pickedValues?.filter(a => a !== value));
      setCurrentListPicked(currentListPicked?.filter(a => a !== value));
    }
  };

  const searchByText = () => {
    const filteredModels = models?.filter(model => model.name.toLowerCase().includes(search.toLowerCase()));

    return { filteredModels };
  };

  console.log(pickedValues, currentListPicked);

  const onPressAcceptButton = () => {
    console.log(markaId, marksValue);
    if (marksValue?.includes(markaId) && currentListPicked.length === 0) {
      setValue(
        'marks',
        marksValue.filter(a => a !== markaId),
      );
    } else if (marksValue && currentListPicked.length > 0) {
      setValue('marks', [...marksValue, markaId]);
    }

    setValue('models', pickedValues);
    dismiss();
  };

  const { filteredModels } = searchByText();

  return (
    <ELD data={models} isLoading={isLoading} error={error} isError={isError}>
      <Grid flex={1}>
        <Grid paddingHorizontal={12}>
          <SearchInput placeholder={'Введите...'} value={search} onChangeText={text => setSearch(text)} />
        </Grid>
        <List<IModel>
          data={filteredModels}
          renderItem={({ item }) => (
            <RowList onChange={onChangeCurrentPicked} selectedValues={pickedValues} title={item.name} value={item.id} />
          )}
          keyExtractor={keyExtractor}
        />
        <AcceptButton onPress={onPressAcceptButton} />
      </Grid>
    </ELD>
  );
};

export default ModelsList;
