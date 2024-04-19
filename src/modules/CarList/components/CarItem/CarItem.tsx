import { priceFormat } from '@/shared/helpers/priceFormat';
import { ICar } from '@/shared/types';
import Card from '@/shared/ui/card/Card';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';
import { Pressable } from 'react-native';
import ActionSide from './ActionSide/ActionSide';
import CarImage from './InsideCard/CarImage';
import HeaderTitle from './InsideCard/HeaderTitle';
import BottomInfo from './InsideCard/InfoList/BottomInfo';
import InfoList from './InsideCard/InfoList/InfoList';
import { router } from 'expo-router';

interface CarItemProps {
  car: ICar;
}

const CarItem: React.FC<CarItemProps> = ({ car }) => {
  const onPressCar = () => {
    router.push(`/cars/${car.id}`);
  };

  return (
    <Pressable onPress={onPressCar}>
      <Card p={8} borderRadius={0} mt={8} style={{ width: '100%' }}>
        <Grid gap={12} justfity="space-between" row>
          <CarImage image={car.image} />
          <Grid justfity="space-between" flex={1}>
            <Grid gap={5}>
              <HeaderTitle title={car.title} />
              <InfoList infoList={car.infoList} />
              <Typography weight="bold">{priceFormat(car.cost)}</Typography>
            </Grid>

            <BottomInfo car={car} />
          </Grid>
          <ActionSide />
        </Grid>
      </Card>
    </Pressable>
  );
};

export default CarItem;
