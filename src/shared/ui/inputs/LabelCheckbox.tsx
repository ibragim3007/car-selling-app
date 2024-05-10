import React from 'react';
import { Pressable } from 'react-native';
import Checkbox from './Checkbox';
import Grid, { GridProps } from '../layout/Grid';
import Typography from '../typography/Typography';

interface LabelCheckboxProps extends GridProps {
  onChange: () => void;
  checked: boolean;
  title: string | number;
}

const LabelCheckbox = ({ checked, title, onChange, ...props }: LabelCheckboxProps) => {
  return (
    <Pressable onPress={onChange}>
      <Grid paddingVertical={14} {...props} row space="sm">
        <Checkbox onValueChange={onChange} value={checked} />
        <Typography variant="subhead">{title ? title : '---(error)'}</Typography>
      </Grid>
    </Pressable>
  );
};

export default LabelCheckbox;
