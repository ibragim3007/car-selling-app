import Grid from '@/shared/ui/layout/Grid';
import SwitchCustom from '@/shared/ui/switch/Switch';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';

const TitleSwitch = () => {
  return (
    <Grid row justfity="space-between">
      <Typography>Включить подборку</Typography>
      <SwitchCustom />
    </Grid>
  );
};

export default TitleSwitch;
