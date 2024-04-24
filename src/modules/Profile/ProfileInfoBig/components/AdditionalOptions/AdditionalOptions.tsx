import RowButton from '@/shared/ui/buttons/RowBotton';
import Card from '@/shared/ui/card/Card';
import React from 'react';
import StarIcon from '@/icons/linear/star.svg';
import Grid from '@/shared/ui/layout/Grid';

const AdditionalOptions = () => {
  return (
    <Card color="secondary" p={0} borderRadius={16} style={{ overflow: 'hidden' }}>
      <Grid gap={1}>
        <RowButton title="Оценить нас" Icon={StarIcon} />
        <RowButton title="Справка" Icon={StarIcon} />
        <RowButton title="Настройки приложения" Icon={StarIcon} />
        <RowButton title="Написать оператору" Icon={StarIcon} />
      </Grid>
    </Card>
  );
};

export default AdditionalOptions;
