import { IRegion } from '@/shared/types/dictionary.types';
import { IFilterCreate } from '@/shared/types/filters.types';
import { useCallback, useState } from 'react';
import { useFormContext, useController } from 'react-hook-form';
import { useRegionsQuery, useDictionaryQuery } from '../dictionary/dictionary.api';

export const useRegion = () => {
  const { data: regions, isLoading: isRegionsLoading } = useRegionsQuery();
  const { data: dict, isLoading: isDictLoading } = useDictionaryQuery();
  const keyExtractor = useCallback((item: IRegion, i: number) => `${i}-${item.regionid}`, []);

  const { control } = useFormContext<IFilterCreate>();
  const { field } = useController({ control, name: 'regions' });

  const isEverythingSelected = field.value?.length === regions?.regions?.length;
  const onToggleSelection = () => {
    field.onChange(isEverythingSelected ? [] : regions?.regions.map(region => region.regionid));
  };

  const [search, setSearch] = useState('');
  const filterDict = () => {
    const filteredRegionsText = dict?.regions.filter(region =>
      region.name.toLowerCase().includes(search.toLowerCase()),
    );

    const filteredList = regions?.regions.filter(region => {
      return filteredRegionsText?.some(some => some.id === region.regionid);
    });

    return { filteredList, filteredRegionsText };
  };

  const { filteredList, filteredRegionsText } = filterDict();

  return {
    loading: isDictLoading || isRegionsLoading,
    dict,
    regions,
    isEverythingSelected,
    filteredRegionsText,
    filteredList,
    search,
    keyExtractor,
    setSearch,
    onToggleSelection,
  };
};
