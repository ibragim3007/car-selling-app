import { ICar } from '@/shared/types';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';

interface BottomInfoProps {
  car: ICar;
}

const BottomInfo = ({ car }: BottomInfoProps) => {
  return (
    <Grid gap={6} row>
      <Typography color="secondary" variant="caption-1">
        {car.date.getHours()}:{car.date.getMinutes()}
      </Typography>
      <Typography color="secondary" variant="caption-1">
        {car.date.getDate()}.{car.date.getMonth()}.{car.date.getFullYear()}
      </Typography>
      <Typography color="secondary" variant="caption-1">
        {car.city}
      </Typography>
    </Grid>
  );
};

export default BottomInfo;
