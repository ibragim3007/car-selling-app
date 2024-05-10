import Grid, { GridProps } from '@/shared/ui/layout/Grid';
import React from 'react';

import { IFilterCreate } from '@/shared/types/filters.types';
import Checkbox from '@/shared/ui/inputs/Checkbox';
import Typography from '@/shared/ui/typography/Typography';
import { useFormContext, useWatch } from 'react-hook-form';
import { Pressable } from 'react-native';

interface RowListProps<TItem> extends GridProps {
  title?: string | number;
  value?: number;

  onChange?: (item: TItem) => void;
}

const RowList = <TItem,>({ title, value, onChange, ...props }: RowListProps<TItem>) => {
  const { setValue, control } = useFormContext<IFilterCreate>();

  const selectedValues = useWatch({
    control,
    name: 'regions',
  });
  const isSelected = selectedValues?.find(v => v === value) ? true : false;
  const onChangeCheckBox = () => {
    const newValue = [...selectedValues!];

    if (!isSelected) {
      newValue?.push(value || 0);
      setValue('regions', newValue);
    } else {
      setValue(
        'regions',
        newValue?.filter(v => v !== value),
      );
    }
  };

  return (
    <Pressable onPress={onChangeCheckBox}>
      <Grid paddingVertical={14} {...props} row space="sm">
        <Checkbox onValueChange={onChangeCheckBox} value={isSelected} />
        <Typography variant="subhead">{title ? title : '---(error)'}</Typography>
      </Grid>
    </Pressable>
  );
};

export default RowList;
