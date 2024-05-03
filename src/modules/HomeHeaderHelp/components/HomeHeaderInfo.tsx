import CardService from '@/components/Informers/CardService';
import CarIcon from '@/icons/linear/car.svg';
import { routes } from '@/shared/config/routes';
import Grid from '@/shared/ui/layout/Grid';
import React from 'react';
import StarIcon from '@/icons/linear/star.svg';

const HomeHeaderInfo = () => {
  return (
    <Grid space="sm">
      <CardService
        height={90}
        style={{ borderRadius: 24 }}
        href={routes.tabs.collections}
        backgroundColor={'#FFAD43'}
        title="Наш ТОП автомобилей"
        description={'Популярные марки и модели в выкупе сегодня'}
        Icon={StarIcon}
      />
      <Grid space="sm">
        <Grid row space="sm">
          <CardService flex={1} href="/" backgroundColor="#47D586" title="Тарифы" Icon={CarIcon} />
          <CardService flex={1} href="/" backgroundColor="#4586FF" title="Акции и промокоды" Icon={StarIcon} />
        </Grid>
        <Grid row space="sm">
          <CardService href="/" flex={1} backgroundColor="#6274DA" title="Бонусные баллы" Icon={StarIcon} />
          <CardService href="/" flex={1} backgroundColor="#FF4185" title="Для юридических лиц" Icon={CarIcon} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomeHeaderInfo;
