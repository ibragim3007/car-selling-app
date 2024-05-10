import { BaseTypeDictionary, orderIdType } from '@/shared/types/dictionary.types';
import { IFilterCreate } from '@/shared/types/filters.types';
import { useCallback, useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { useDictionaryQuery } from '../dictionary/dictionary.api';

export const useRegion = () => {
  const { data: dict, isLoading: isDictLoading } = useDictionaryQuery();

  const keyExtractor = useCallback((item: BaseTypeDictionary & orderIdType, i: number) => `${i}-${item.id}`, []);

  const { control } = useFormContext<IFilterCreate>();
  const { field } = useController({ control, name: 'regions' });

  const isEverythingSelected = field.value?.length === dict?.regions?.length;
  const onToggleSelection = () => {
    field.onChange(isEverythingSelected ? [] : dict?.regions.map(region => region.id));
  };

  const [search, setSearch] = useState('');
  const filterDict = () => {
    const filteredRegionsText = dict?.regions.filter(region =>
      region.name.toLowerCase().includes(search.toLowerCase()),
    );

    return filteredRegionsText;
  };

  return {
    selectedRegions: field.value,
    loading: isDictLoading,
    dict,
    isEverythingSelected,
    filteredRegions: filterDict(),
    search,
    keyExtractor,
    setSearch,
    onToggleSelection,
  };
};
