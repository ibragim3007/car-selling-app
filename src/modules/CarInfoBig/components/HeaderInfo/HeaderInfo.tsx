import GroupInfo from '@/components/Informers/GroupInfo';
import HighlightText from '@/components/Informers/HighlightText';
import TagPrice from '@/components/Informers/TagPrice';
import ArrowRight from '@/icons/linear/arrow-right.svg';
import { formatCurrency, priceFormat } from '@/shared/helpers/priceFormat';
import Card from '@/shared/ui/card/Card';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import { normalizedSize } from '@/shared/utils/size';
import React from 'react';
import { Pressable } from 'react-native';
import SliderImages from './SliderImages';
import ImageCarousel, { ImageCarouselItem } from '@/components/ImageCarousel/ImageCarousel';
import { carImages } from '@/shared/mock/car1';

const HeaderInfo = () => {
  return (
    <Card borderRadius={0}>
      <Grid gap={16}>
        <Grid gap={4}>
          <GroupInfo leftInfo={'TOYOTA Land Cruiser'} rightInfo={'2012'} weight="medium" />
          <Grid row justfity="space-between" align="center">
            <Grid gap={8} row align="center">
              <Typography variant="title-3" weight="bold">
                {priceFormat(1200000)}
              </Typography>
              <TagPrice amount={110121} isRised={false} style={{ alignSelf: 'stretch' }} />
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
          <Grid>
            <HighlightText isRed>Выше рынка {formatCurrency(60000)}</HighlightText>
          </Grid>
        </Grid>
        <SliderImages />
      </Grid>
      {/* <ImageCarousel data={carImages} /> */}
    </Card>
  );
};

export default HeaderInfo;
