import InputTel from '@/components/Controllers/Input/InputTel';
import Button from '@/shared/ui/buttons/Button';
import Grid from '@/shared/ui/layout/Grid';
import PageBackground from '@/shared/ui/layout/PageBackground';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';
import { useForm } from 'react-hook-form';

const RecoveryPage = () => {
  const { control } = useForm();
  return (
    <PageBackground color="primary" isPaddingPage>
      <Grid space="md">
        <Typography variant="subhead" color="secondary">
          Введите номер телефона, который вы указали при регистрации. Мы пришлем пароль
        </Typography>
        <Grid space="lg">
          <InputTel name={'tel'} control={control} />
          <Button>Отправить</Button>
        </Grid>
      </Grid>
    </PageBackground>
  );
};

export default RecoveryPage;
