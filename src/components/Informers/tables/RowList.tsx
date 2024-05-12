import Grid, { GridProps } from '@/shared/ui/layout/Grid';
import React from 'react';

import { CheckboxCustom } from '@/shared/ui/inputs/Checkbox';
import LabelCheckbox from '@/shared/ui/inputs/LabelCheckbox';

export interface RowListProps<TItem> extends GridProps {
  title?: string | number;
  value: number;
  selectedValues?: number[];
  type?: CheckboxCustom['type'];
  onChange?: (value: number) => void;
  rightSide?: React.ReactNode;
}

const RowList = <TItem,>({
  title,
  value,
  type = 'check',
  onChange,
  selectedValues,
  rightSide,
}: RowListProps<TItem>) => {
  const isSelected = selectedValues?.find(v => v === value) !== undefined ? true : false;

  const onChangeCheckBox = () => {
    if (onChange) onChange(value);
  };

  return (
    <Grid row justfity="space-between" align="center">
      <Grid flex={0.9}>
        <LabelCheckbox type={type} checked={isSelected} title={title || '--error'} onChange={onChangeCheckBox} />
      </Grid>
      <Grid flex={0.1}>{rightSide && rightSide}</Grid>
    </Grid>
  );
};

export default RowList;
