import { ICar } from '@/shared/types';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';

interface BottomInfoProps {
  car: ICar;
}

const BottomInfo = ({ car }: BottomInfoProps) => {
  const creadate = car.credate;

  return (
    <Grid gap={6} row>
      <Typography color="secondary" variant="caption-1">
        {creadate || ''}
      </Typography>
      <Typography color="secondary" variant="caption-1">
        {/* {creadate.getDate()}.{creadate.getMonth()}.{creadate.getFullYear()} */}
      </Typography>
      <Typography style={{ flex: 1 }} color="secondary" variant="caption-1" numberOfLines={1}>
        {car.city}
      </Typography>
    </Grid>
  );
};

export default BottomInfo;
