import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import React from 'react';
import { Pressable } from 'react-native';
import Grid, { GridProps } from '../layout/Grid';
import Typography from '../typography/Typography';
import Checkbox, { CheckboxCustom } from './Checkbox';
import Badge from '../badge/Badge';

export interface LabelCheckboxProps extends GridProps {
  onChange?: () => void;
  checked?: boolean;
  title: string | number;
  type?: CheckboxCustom['type'];
  badgeNumber?: number;
  rightSide?: React.ReactNode;
}

const LabelCheckbox = ({
  checked = false,
  title,
  type = 'check',
  badgeNumber,
  onChange,
  rightSide,
  ...props
}: LabelCheckboxProps) => {
  const { colors } = useTheme();

  const isBackgroundHighlight = checked && type === 'check';

  return (
    <Pressable onPress={onChange}>
      <Grid
        justfity="space-between"
        row
        align="center"
        color={isBackgroundHighlight ? colors.background.active : 'transparent'}
      >
        <Grid flex={0.9} paddingVertical={14} paddingHorizontal={18} row space="sm" {...props}>
          <Checkbox type={type} onValueChange={onChange} value={checked} />
          <Typography variant="subhead">{title ? title : '---(error)'}</Typography>
          {badgeNumber !== undefined && badgeNumber !== 0 && <Badge value={badgeNumber} />}
        </Grid>
        <Grid flex={0.1}>{rightSide && rightSide}</Grid>
      </Grid>
    </Pressable>
  );
};

export default LabelCheckbox;
