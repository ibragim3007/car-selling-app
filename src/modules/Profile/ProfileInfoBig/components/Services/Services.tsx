import CardInformer from '@/components/Informers/CardInformer';
import HighlightText from '@/components/Informers/HighlightText';
import CardTitle from '@/components/Wrappers/CardTitle';
import ClipboardIcon from '@/icons/linear/clipboard-text.svg';
import PhoneSipIcon from '@/icons/linear/phone-sip.svg';
import StarIcon from '@/icons/linear/star.svg';
import Grid from '@/shared/ui/layout/Grid';
import React from 'react';

const Services = () => {
  return (
    <CardTitle
      borderRadius={16}
      title="Услуги"
      rightHeader={
        <HighlightText variant="footnote" weight="bold">
          Докупить
        </HighlightText>
      }
    >
      <Grid space="sm">
        <Grid space="sm" row>
          <CardInformer Icon={ClipboardIcon} title="Короткие отчеты" value="∞" />
          <CardInformer Icon={ClipboardIcon} title="Полные отчеты" value="∞" />
        </Grid>
        <Grid space="sm" row>
          <CardInformer Icon={ClipboardIcon} title="Отчеты по расчетам" value="35" />
          <CardInformer Icon={ClipboardIcon} title="Полные с расчетами" value="5" />
        </Grid>
        <Grid space="sm" row>
          <CardInformer Icon={PhoneSipIcon} title="SIP-звонки" value="278 минут" />
          <CardInformer Icon={StarIcon} title="Бонусные баллы" value="3366" />
        </Grid>
      </Grid>
    </CardTitle>
  );
};

export default Services;
