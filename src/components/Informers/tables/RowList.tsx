import { GridProps } from '@/shared/ui/layout/Grid';
import React from 'react';

import { IFilterCreate } from '@/shared/types/filters.types';
import LabelCheckbox from '@/shared/ui/inputs/LabelCheckbox';
import { useFormContext, useWatch } from 'react-hook-form';

interface RowListProps<TItem> extends GridProps {
  title?: string | number;
  value?: number;

  onChange?: (item: TItem) => void;
}

const RowList = <TItem,>({ title, value, ...props }: RowListProps<TItem>) => {
  const { setValue, control } = useFormContext<IFilterCreate>();

  const selectedValues = useWatch({
    control,
    name: 'regions',
  });
  const isSelected = selectedValues?.find(v => v === value) !== undefined ? true : false;

  const onChangeCheckBox = () => {
    const newValue = [...selectedValues!];

    if (!isSelected && value !== undefined) {
      newValue?.push(value);
      setValue('regions', newValue);
    } else {
      setValue(
        'regions',
        newValue?.filter(v => v !== value),
      );
    }
  };

  return <LabelCheckbox {...props} checked={isSelected} title={title || '--error'} onChange={onChangeCheckBox} />;
};

export default RowList;
