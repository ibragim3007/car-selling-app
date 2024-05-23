import { BaseTypeDictionary, orderIdType } from '@/shared/types/dictionary.types';
import { IFilterCreate } from '@/shared/types/filters.types';
import { useCallback, useEffect, useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { useDictionaryQuery } from '../../../api/entityies/dictionary/dictionary.api';
import { useBottomSheetModal } from '@gorhom/bottom-sheet';

export const useRegion = () => {
  const [search, setSearch] = useState('');
  const { dismiss } = useBottomSheetModal();
  const keyExtractor = useCallback((item: BaseTypeDictionary & orderIdType, i: number) => `${i}-${item.id}`, []);

  const { data: dict, isLoading: isDictLoading } = useDictionaryQuery();

  const { control, setValue } = useFormContext<IFilterCreate>();
  const { field } = useController({ control, name: 'regions' });

  const [currentPickedRegions, setCurrentPickedRegions] = useState(field.value);

  const onChangeCurrentPicked = (value: number) => {
    const isSelected = currentPickedRegions?.find(curr => curr === value) !== undefined ? true : false;
    if (currentPickedRegions && !isSelected) setCurrentPickedRegions([...currentPickedRegions, value]);
    else if (isSelected) setCurrentPickedRegions(currentPickedRegions?.filter(a => a !== value));
  };

  const onAcceptChanges = () => {
    setValue('regions', currentPickedRegions, {
      shouldDirty: true,
    });
    dismiss();
  };

  const isEverythingSelected = currentPickedRegions?.length === dict?.regions?.length;
  const onToggleSelection = () => {
    setCurrentPickedRegions(isEverythingSelected ? [] : dict?.regions.map(region => region.id));
  };

  const filterDict = () => {
    const filteredRegionsText = dict?.regions.filter(region =>
      region.name.toLowerCase().includes(search.toLowerCase()),
    );

    return filteredRegionsText;
  };

  const resetButton = () => {
    setCurrentPickedRegions(field.value);
  };

  const dismissSheet = () => {
    setCurrentPickedRegions(field.value);
  };

  useEffect(() => {
    setCurrentPickedRegions(field.value);
  }, [field.value]);

  return {
    currentPickedRegions,
    selectedRegions: field.value,
    loading: isDictLoading,
    dict,
    isEverythingSelected,
    filteredRegions: filterDict(),
    search,
    dismissSheet,
    resetButton,
    keyExtractor,
    setSearch,
    onToggleSelection,
    onAcceptChanges,
    onChangeCurrentPicked,
  };
};
