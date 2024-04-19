import { ICar } from '@/shared/types';
import Card from '@/shared/ui/card/Card';
import Grid from '@/shared/ui/layout/Grid';
import React from 'react';
import ActionSide from './ActionSide/ActionSide';
import CarImage from './InsideCard/CarImage';
import HeaderTitle from './InsideCard/HeaderTitle';
import BottomInfo from './InsideCard/InfoList/BottomInfo';
import InfoList from './InsideCard/InfoList/InfoList';
import Typography from '@/shared/ui/typography/Typography';
import { priceFormat } from '@/shared/helpers/priceFormat';

interface CarItemProps {
  car: ICar;
}

const CarItem: React.FC<CarItemProps> = ({ car }) => {
  return (
    <Card p={8} borderRadius={0} mt={8}>
      <Grid gap={12} justfity="space-between" row>
        <CarImage image={car.image} />
        <Grid justfity="space-between" flex={2}>
          <Grid gap={4}>
            <HeaderTitle title={car.title} />
            <InfoList infoList={car.infoList} />
          </Grid>
          <Grid>
            <Typography>{priceFormat(car.cost)}</Typography>
          </Grid>
          <BottomInfo car={car} />
        </Grid>
        <ActionSide />
      </Grid>
    </Card>
  );
};

export default CarItem;
