import React from 'react';
import { Pressable } from 'react-native';
import Checkbox, { CheckboxCustom } from './Checkbox';
import Grid, { GridProps } from '../layout/Grid';
import Typography from '../typography/Typography';
import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';

export interface LabelCheckboxProps extends GridProps {
  onChange?: () => void;
  checked?: boolean;
  title: string | number;
  type?: CheckboxCustom['type'];
}

const LabelCheckbox = ({ checked = false, title, type = 'check', onChange, ...props }: LabelCheckboxProps) => {
  const { colors } = useTheme();

  const isBackgroundHighlight = checked && type === 'check';

  return (
    <Pressable onPress={onChange}>
      <Grid
        paddingHorizontal={18}
        color={isBackgroundHighlight ? colors.background.active : 'transparent'}
        paddingVertical={14}
        {...props}
        row
        space="sm"
      >
        <Checkbox type={type} onValueChange={onChange} value={checked} />
        <Typography variant="subhead">{title ? title : '---(error)'}</Typography>
      </Grid>
    </Pressable>
  );
};

export default LabelCheckbox;
