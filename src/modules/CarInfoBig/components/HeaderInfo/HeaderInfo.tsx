import Carousel from '@/components/ImageCarousel/Carousel';
import GroupInfo from '@/components/Informers/GroupInfo';
import HighlightText from '@/components/Informers/HighlightText';
import TagPrice from '@/components/Informers/TagPrice';
import ArrowRight from '@/icons/linear/arrow-right.svg';
import { formatCurrency, priceFormat } from '@/shared/helpers/priceFormat';
import { ICarBig } from '@/shared/types';
import { IDictionaryRoot } from '@/shared/types/dictionary.types';
import Card from '@/shared/ui/card/Card';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import { normalizedSize } from '@/shared/utils/size';
import React from 'react';
import { Pressable } from 'react-native';

interface HeaderInfoProps {
  car: ICarBig;
  dict?: IDictionaryRoot;
}

const HeaderInfo = ({ car, dict }: HeaderInfoProps) => {
  return (
    <Card borderRadius={0}>
      <Grid gap={16}>
        <Grid gap={4}>
          <GroupInfo leftInfo={car.title} rightInfo={car.year} weight="medium" />
          <Grid row justfity="space-between" align="center">
            <Grid gap={8} row align="center">
              <Typography variant="title-3" weight="bold">
                {priceFormat(car.price)}
              </Typography>
              <TagPrice amount={car.delta} isRised={car.delta < 0} style={{ alignSelf: 'stretch' }} />
            </Grid>
            <Pressable>
              <Grid row gap={4} align="center" padding={5}>
                <Typography color="secondary" variant="caption-2">
                  Изменение цены
                </Typography>
                <ArrowRight width={normalizedSize(11)} height={normalizedSize(11)} />
              </Grid>
            </Pressable>
          </Grid>
          {car.deviation && (
            <HighlightText isRed={car.deviation > 0}>
              {/* исправить и сделать по дефолту */}
              {/* {compare(dict!.avgCostDeviations, car.drive)} */}
              {car.deviation > 0 ? 'Выше' : 'Ниже'} рынка на {formatCurrency(car.deviation)}
            </HighlightText>
          )}
        </Grid>
        {car.photos.length > 0 && <Carousel data={car.photos} />}
      </Grid>
    </Card>
  );
};

export default HeaderInfo;
