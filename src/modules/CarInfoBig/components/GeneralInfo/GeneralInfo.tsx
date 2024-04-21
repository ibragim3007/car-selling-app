import Card from '@/shared/ui/card/Card';
import React from 'react';

import Car from '@/icons/linear/car.svg';
import CardInformer from '@/components/Informers/CardInformer';
import Grid from '@/shared/ui/layout/Grid';

const GeneralInfo = () => {
  return (
    <Card>
      <Grid gap={8}>
        <Grid row gap={8}>
          <CardInformer Icon={Car} title="Владельцев" value="3 человека" />
          <CardInformer Icon={Car} title="Индекс цены" value="16" />
        </Grid>
        <Grid row gap={8}>
          <CardInformer Icon={Car} title="Состояние" value="Целое" />
          <CardInformer Icon={Car} title="Кузов" value="Внедорожник" />
        </Grid>
      </Grid>
    </Card>
  );
};

export default GeneralInfo;
