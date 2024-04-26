import Input from '@/components/Controllers/Input/Input';
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
        <Grid space="sm">
          <Typography weight="bold">Введите номер</Typography>
          <Grid row align="center" space="sm">
            <Typography weight="bold">+7</Typography>
            <Grid flex={1}>
              <Input
                keyboardType="phone-pad"
                name="tel"
                control={control}
                placeholder="(000) 000-00-00"
                textContentType="telephoneNumber"
              />
            </Grid>
          </Grid>
        </Grid>
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
