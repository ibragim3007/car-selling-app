import { GridProps } from '@/shared/ui/layout/Grid';
import React from 'react';

import { CheckboxCustom } from '@/shared/ui/inputs/Checkbox';
import LabelCheckbox from '@/shared/ui/inputs/LabelCheckbox';

export interface RowListProps<TItem> extends GridProps {
  title?: string | number;
  value: number;
  selectedValues?: number[];
  type?: CheckboxCustom['type'];
  onChange?: (value: number) => void;
  badgeNumber?: number;
  rightSide?: React.ReactNode;
  isSelectedForce?: boolean;
}

const RowList = <TItem,>({
  title,
  value,
  type = 'check',
  onChange,
  selectedValues,
  rightSide,
  badgeNumber,
  isSelectedForce,
}: RowListProps<TItem>) => {
  const isSelected = selectedValues?.find(v => v === value) !== undefined ? true : false;

  const onChangeCheckBox = () => {
    if (onChange) onChange(value);
  };

  return (
    <LabelCheckbox
      badgeNumber={badgeNumber}
      type={type}
      checked={isSelectedForce || isSelected}
      title={title || '--error'}
      onChange={onChangeCheckBox}
      rightSide={rightSide}
    />
  );
};

export default RowList;
