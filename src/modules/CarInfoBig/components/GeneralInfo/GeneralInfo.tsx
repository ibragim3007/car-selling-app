import Card from '@/shared/ui/card/Card';
import React from 'react';

import CardInformer from '@/components/Informers/CardInformer';
import Car from '@/icons/linear/car.svg';
import { ICarBig } from '@/shared/types';
import { IDictionaryRoot } from '@/shared/types/dictionary.types';
import Grid from '@/shared/ui/layout/Grid';

interface GeneralInfoProps {
  car: ICarBig;
  dict?: IDictionaryRoot;
}

const GeneralInfo = ({ car, dict }: GeneralInfoProps) => {
  return (
    <Card>
      <Grid gap={8}>
        <Grid row gap={8}>
          {car.ownerCount && <CardInformer Icon={Car} title="Владельцев" value={`${car.ownerCount} человека`} />}
          <CardInformer Icon={Car} title="Индекс цены" value={car.index} />
        </Grid>
        <Grid row gap={8}>
          <CardInformer Icon={Car} title="Состояние" value={car.remont} />
          <CardInformer Icon={Car} title="Кузов" value={car.body} />
        </Grid>
      </Grid>
    </Card>
  );
};

export default GeneralInfo;
