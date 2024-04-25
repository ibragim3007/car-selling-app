import Grid from '@/shared/ui/layout/Grid';
import SwitchCustom from '@/shared/ui/switch/Switch';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';

interface TitleSwitchProps {
  title: string;
}

const TitleSwitch = ({ title }: TitleSwitchProps) => {
  return (
    <Grid row justfity="space-between">
      <Typography>{title}</Typography>
      <SwitchCustom />
    </Grid>
  );
};

export default TitleSwitch;
