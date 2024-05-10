import React from 'react';
import { Pressable } from 'react-native';
import Checkbox from './Checkbox';
import Grid, { GridProps } from '../layout/Grid';
import Typography from '../typography/Typography';
import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';

interface LabelCheckboxProps extends GridProps {
  onChange: () => void;
  checked: boolean;
  title: string | number;
}

const LabelCheckbox = ({ checked, title, onChange, ...props }: LabelCheckboxProps) => {
  const { colors } = useTheme();
  return (
    <Pressable onPress={onChange}>
      <Grid
        paddingHorizontal={18}
        color={checked ? colors.background.active : 'transparent'}
        paddingVertical={14}
        {...props}
        row
        space="sm"
      >
        <Checkbox onValueChange={onChange} value={checked} />
        <Typography variant="subhead">{title ? title : '---(error)'}</Typography>
      </Grid>
    </Pressable>
  );
};

export default LabelCheckbox;
