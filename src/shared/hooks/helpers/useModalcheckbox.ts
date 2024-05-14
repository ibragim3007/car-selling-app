import { MainPagePropsGlobal } from '@/components/ModalCheckboxList/components/MainPage';
import { BaseTypeDictionary } from '@/shared/types/dictionary.types';
import { IFilterCreate } from '@/shared/types/filters.types';
import { useBottomSheetModal } from '@gorhom/bottom-sheet';
import { useCallback, useEffect, useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';

export const useModalcheckbox = ({ name, items }: MainPagePropsGlobal) => {
  const { control, setValue } = useFormContext<IFilterCreate>();
  const keyExtractor = useCallback((item: BaseTypeDictionary, i: number) => `${i}-${item.id}`, []);
  const { dismiss } = useBottomSheetModal();
  const { field } = useController({ control, name: name });

  const [selectedValues, setSelectedValues] = useState<number[]>(field.value as number[]);
  const onChange = (value: number, isSelected: boolean) => {
    if (isSelected) setSelectedValues(selectedValues.filter(selectedValue => selectedValue !== value));
    else setSelectedValues([...selectedValues, value]);
  };

  const acceptChanges = () => {
    setValue(name, selectedValues);
    dismiss();
  };

  const [searchText, setSearchText] = useState('');
  const filterItems = () => items.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));

  const isEverythingSelected = selectedValues.length === items.length;
  const onToggleSelection = () => setSelectedValues(isEverythingSelected ? [] : items.map(item => item.id));

  const reset = () => {
    setSelectedValues(field.value as number[]);
  };

  useEffect(() => {
    setSelectedValues(field.value as number[]);
  }, [field.value]);

  return {
    selectedValues,
    items,
    isEverythingSelected,
    searchText,
    keyExtractor,
    onToggleSelection,
    setSearchText,
    filterItems,
    acceptChanges,
    onChange,
    reset,
  };
};
