import Card from '@/shared/ui/card/Card';
import React from 'react';

import Car from '@/icons/linear/car.svg';
import CardInformer from '@/components/Informers/CardInformer';
import Grid from '@/shared/ui/layout/Grid';
import { ICarBig } from '@/shared/types';

interface GeneralInfoProps {
  car: ICarBig;
}

const GeneralInfo = ({ car }: GeneralInfoProps) => {
  return (
    <Card>
      <Grid gap={8}>
        <Grid row gap={8}>
          <CardInformer Icon={Car} title="Владельцев" value={`${car.ownerCount} человека`} />
          <CardInformer Icon={Car} title="Индекс цены" value={car.index} />
        </Grid>
        <Grid row gap={8}>
          <CardInformer Icon={Car} title="Состояние" value={'---'} />
          <CardInformer Icon={Car} title="Кузов" value={car.body} />
        </Grid>
      </Grid>
    </Card>
  );
};

export default GeneralInfo;
