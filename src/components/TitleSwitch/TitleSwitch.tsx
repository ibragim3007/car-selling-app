import Grid from '@/shared/ui/layout/Grid';
import SwitchCustom, { SwitchCustomProps } from '@/shared/ui/switch/Switch';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';

interface TitleSwitchProps extends SwitchCustomProps {
  title: string;
}

const TitleSwitch = ({ title, ...props }: TitleSwitchProps) => {
  return (
    <Grid align="center" row justfity="space-between">
      <Typography>{title}</Typography>
      <SwitchCustom {...props} />
    </Grid>
  );
};

export default TitleSwitch;
