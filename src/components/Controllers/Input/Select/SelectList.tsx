import List from '@/components/Informers/tables/List';
import { IEnum } from '@/shared/constants/enums/Car';
import { IFilterCreate } from '@/shared/types/filters.types';
import React from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import SelectItem from './SelectItem';
import { useBottomSheetModal } from '@gorhom/bottom-sheet';

interface SelectListProps {
  data: IEnum[];
  name: keyof IFilterCreate;
}

const SelectList = ({ data, name }: SelectListProps) => {
  const { control, setValue } = useFormContext<IFilterCreate>();
  const value = useWatch({ control, name }) as number;
  const { dismiss } = useBottomSheetModal();
  const onChange = (item: IEnum) => {
    setValue(name, item.id as number);
    dismiss();
  };

  return (
    <List renderItem={({ item }) => <SelectItem onChange={onChange} currentValue={value} item={item} />} data={data} />
  );
};

export default SelectList;
