import Card from '@/shared/ui/card/Card';
import Grid from '@/shared/ui/layout/Grid';
import { normalizedSize } from '@/shared/utils/size';
import React from 'react';
import { View } from 'react-native';
import CarImage from './InsideCard/CarImage';
import HeaderTitle from './InsideCard/HeaderTitle';
import InfoList from './InsideCard/InfoList/InfoList';
import ActionSide from './ActionSide/ActionSide';

const infoList = ['2012', '205 000 км', 'Дизель', '4.5 л.', 'АТ'];

const CarList = () => {
  return (
    <View>
      <Card p={8} borderRadius={0}>
        <Grid gap={12} justfity="space-between" row>
          <CarImage image="https://news.store.rambler.ru/img/e43de71baa09aec20b7eb19ad23d2ee3?img-format=auto&img-1-resize=height:400,fit:max&img-2-filter=sharpen" />
          <Grid flex={2} gap={4}>
            <HeaderTitle title="Toyota Camry" />
            <InfoList infoList={infoList} />
          </Grid>
          <ActionSide />
        </Grid>
      </Card>
    </View>
  );
};

export default CarList;
