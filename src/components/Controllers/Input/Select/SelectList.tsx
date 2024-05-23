import List from '@/components/Informers/tables/List';
import { IEnum } from '@/shared/constants/enums/Car';
import React from 'react';
import SelectItem from './SelectItem';

interface SelectListProps {
  data: IEnum[];
  currentValue: number;
  onChange: (item: IEnum) => void;
}

const SelectList = ({ data, currentValue, onChange }: SelectListProps) => {
  return (
    <List
      renderItem={({ item }) => <SelectItem onChange={onChange} currentValue={currentValue} item={item} />}
      data={data}
    />
  );
};

export default SelectList;
