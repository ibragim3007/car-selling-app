import Button from '@/shared/ui/buttons/Button';
import Card from '@/shared/ui/card/Card';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';

const UnSubscripbeSuggestion = () => {
  return (
    <Card borderRadius={0}>
      <Grid align="center" justfity="center" gap={12}>
        <Typography variant="subhead" weight="bold">
          Приложение в демо-режиме
        </Typography>
        <Typography variant="caption-1" style={{ textAlign: 'center' }}>
          Объявления показываются с 2-х часовой задержкой
        </Typography>
        <Button size="small" style={{ width: '50%' }} color="black">
          Войти
        </Button>
      </Grid>
    </Card>
  );
};

export default UnSubscripbeSuggestion;
