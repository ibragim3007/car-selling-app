import { GridProps } from '@/shared/ui/layout/Grid';
import React from 'react';

import LabelCheckbox from '@/shared/ui/inputs/LabelCheckbox';

interface RowListProps<TItem> extends GridProps {
  title?: string | number;
  value: number;
  selectedValues?: number[];
  onChange?: (value: number) => void;
}

const RowList = <TItem,>({ title, value, onChange, selectedValues, ...props }: RowListProps<TItem>) => {
  // const { setValue, control } = useFormContext<IFilterCreate>();

  // const selectedValues = useWatch({
  //   control,
  //   name: 'regions',
  // });

  const isSelected = selectedValues?.find(v => v === value) !== undefined ? true : false;

  const onChangeCheckBox = () => {
    if (onChange) onChange(value);
  };

  return <LabelCheckbox {...props} checked={isSelected} title={title || '--error'} onChange={onChangeCheckBox} />;
};

export default RowList;
