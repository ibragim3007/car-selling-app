import { useDictionaryQuery } from '@/shared/api/entityies/dictionary/dictionary.api';
import { offlineDict } from '@/shared/constants/enums/offilneDict';
import { compare } from '@/shared/helpers/compare';
import { formatToMillage } from '@/shared/helpers/formatMileage';
import { priceFormat } from '@/shared/helpers/priceFormat';
import { ICar } from '@/shared/types';
import Card from '@/shared/ui/card/Card';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import { router } from 'expo-router';
import React, { memo } from 'react';
import { Pressable } from 'react-native';
import Animated, { LinearTransition } from 'react-native-reanimated';
import ActionSide from './ActionSide/ActionSide';
import CarImage from './InsideCard/CarImage';
import HeaderTitle from './InsideCard/HeaderTitle';
import BottomInfo from './InsideCard/InfoList/BottomInfo';
import InfoItem from './InsideCard/InfoList/InfoItem';
interface CarItemProps {
  car: ICar;
}

function CarItem({ car }: CarItemProps) {
  const onPressCar = () => {
    router.push(`/cars/${car.id}`);
  };

  const { data: dict } = useDictionaryQuery();
  return (
    <Animated.View layout={LinearTransition}>
      <Pressable onPress={onPressCar}>
        <Card p={8} borderRadius={0} style={{ width: '100%' }}>
          <Grid gap={12} justfity="space-between" row>
            <CarImage image={car.picture} />
            <Grid justfity="space-between" flex={1}>
              <Grid gap={5}>
                <HeaderTitle title={car.title} id={car.id} />
                <Grid row wrap>
                  <InfoItem infoString={car.year} />
                  {car.mileage && <InfoItem infoString={formatToMillage(car.mileage)} />}
                  <InfoItem infoString={car.engine} />
                  <InfoItem infoString={`${car.volume} л.`} />
                  <InfoItem
                    infoString={compare(dict?.transmissions || offlineDict.transmissions, car.transmission)}
                    isLastElement
                  />
                </Grid>
                <Typography weight="bold">{priceFormat(car.price)}</Typography>
              </Grid>

              <BottomInfo car={car} />
            </Grid>
            <ActionSide />
          </Grid>
        </Card>
      </Pressable>
    </Animated.View>
  );
}

export default memo(CarItem);
