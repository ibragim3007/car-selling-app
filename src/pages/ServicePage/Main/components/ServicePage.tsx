import CardService from '@/components/Informers/CardService';
import CarIcon from '@/icons/linear/car.svg';
import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import Grid from '@/shared/ui/layout/Grid';
import PageBackground from '@/shared/ui/layout/PageBackground';
import React from 'react';

const ServicePage = () => {
  const { colors } = useTheme();
  return (
    <PageBackground color="primary" paddingHorizontal={8} paddingVertical={8}>
      <Grid space="sm">
        <Grid space="sm" row>
          <Grid flex={1}>
            <CardService
              additionalInfo="Для браузера"
              href="/"
              flex={1}
              backgroundColor={colors.accent.primary}
              title="Расширение AVINFO"
              description={
                'Перейди в веб-версию нашего приложения и улучши свой онлайн опыт с нашим браузерным расширением'
              }
              Icon={CarIcon}
            />
          </Grid>
          <Grid flex={1} space="sm">
            <CardService href="/" backgroundColor="#60DFFF" title="Услуги" Icon={CarIcon} />
            <CardService href="/" backgroundColor="#6274DA" title="Подбор VIN" Icon={CarIcon} />
          </Grid>
        </Grid>
        <Grid row space="sm">
          <CardService href="/" flex={1} backgroundColor="#FF6699" title="API для получения данных " Icon={CarIcon} />
          <CardService href="/" flex={1} backgroundColor="#FFB760" title="База объявлений" Icon={CarIcon} />
        </Grid>
        <CardService href="/" flex={1} backgroundColor="#2BABEE" title="Проверка в Telegram" Icon={CarIcon} />
      </Grid>
    </PageBackground>
  );
};

export default ServicePage;
