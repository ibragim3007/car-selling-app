import { GridProps } from '@/shared/ui/layout/Grid';
import React from 'react';

import { CheckboxCustom } from '@/shared/ui/inputs/Checkbox';
import LabelCheck from '@/shared/ui/inputs/LabelCheck';

export interface RowListProps extends GridProps {
  title?: string | number;
  value: number;
  selectedValues?: number[];
  type?: CheckboxCustom['type'];
  onChange?: (value: number, isSelected: boolean) => void;
  badgeNumber?: number;
  rightSide?: React.ReactNode;
  isSelectedForce?: boolean;
}

const RowList = ({
  title,
  value,
  type = 'check',
  onChange,
  selectedValues,
  rightSide,
  badgeNumber,
  isSelectedForce,
}: RowListProps) => {
  const isSelected = selectedValues?.find(v => v === value) !== undefined ? true : false;

  const onChangeCheckBox = () => {
    if (onChange) onChange(value, isSelected);
  };

  return (
    <LabelCheck
      badgeNumber={badgeNumber}
      type={type}
      // title={title || '--error'}
      onPressLabel={onChangeCheckBox}
      rightSide={rightSide}
      value={isSelectedForce || isSelected}
      label={title || '--error'}
    />
  );
};

export default RowList;
