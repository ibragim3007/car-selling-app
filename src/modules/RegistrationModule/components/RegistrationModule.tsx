import InputTel from '@/components/Controllers/Input/InputTel';
import Button from '@/shared/ui/buttons/Button';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegistrationModule = () => {
  const { control } = useForm();
  return (
    <Grid space="md">
      <Typography variant="subhead" color="secondary">
        Введите номер телефона и получите доступ к системе на 2 часа
      </Typography>
      <Grid space="lg">
        <InputTel name={'tel'} control={control} />
        <Grid space="lg">
          <Button>Отправить</Button>
          <Typography color="secondary" variant="subhead" textAlign="center">
            Повторная регистрация не допускается
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RegistrationModule;
