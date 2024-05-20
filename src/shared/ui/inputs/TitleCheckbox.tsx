import React from 'react';
import Badge from '../badge/Badge';
import Grid, { GridProps } from '../layout/Grid';
import Typography from '../typography/Typography';
import Checkbox, { CheckboxCustom } from './Checkbox';
import { Pressable } from 'react-native';

export interface TitleCheckboxProps extends GridProps {
  onChange?: () => void;
  checked?: boolean;
  title?: string | number;
  type?: CheckboxCustom['type'];
  badgeNumber?: number;
  renderLabel?: React.ReactNode;
  isCheckboxOpen?: boolean;
}

const TitleCheckbox = ({
  checked = false,
  title,
  type = 'check',
  badgeNumber,
  onChange,
  renderLabel,
  ...props
}: TitleCheckboxProps) => {
  return (
    <Pressable onPress={onChange}>
      <Grid row align="center" space="sm" {...props}>
        <Pressable onPress={() => 'Check'}>
          <Checkbox type={type} value={checked} />
        </Pressable>
        {renderLabel ? renderLabel : <Typography variant="subhead">{title ? title : '---(error)'}</Typography>}
        {badgeNumber !== undefined && badgeNumber !== 0 && <Badge value={badgeNumber} />}
      </Grid>
    </Pressable>
  );
};

export default TitleCheckbox;
