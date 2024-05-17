import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import React from 'react';
import { Pressable } from 'react-native';
import Grid from '../layout/Grid';
import TitleCheckbox, { TitleCheckboxProps } from './TitleCheckbox';

export interface LabelCheckboxProps extends TitleCheckboxProps {
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
        pointerEvents="none"
        justfity="space-between"
        row
        align="center"
        color={isBackgroundHighlight ? colors.background.active : 'transparent'}
      >
        <TitleCheckbox
          checked={checked}
          title={title}
          type={type}
          badgeNumber={badgeNumber}
          flex={0.9}
          paddingVertical={14}
          paddingHorizontal={18}
        />
        {/* <Grid {...props}>
          <Checkbox type={type} onValueChange={onChange} value={checked} />
          <Typography variant="subhead">{title ? title : '---(error)'}</Typography>
          {badgeNumber !== undefined && badgeNumber !== 0 && <Badge value={badgeNumber} />}
        </Grid> */}
        <Grid flex={0.1}>{rightSide && rightSide}</Grid>
      </Grid>
    </Pressable>
  );
};

export default LabelCheckbox;
