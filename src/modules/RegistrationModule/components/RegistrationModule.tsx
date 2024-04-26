import InputTel from '@/components/Controllers/Input/InputTel';
import ErrorCard from '@/components/Informers/ErrorCard';
import Button from '@/shared/ui/buttons/Button';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { Alert } from 'react-native';

const RegistrationModule = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const pressRegister = (data: FieldValues) => {
    Alert.alert(JSON.stringify(data));
  };

  return (
    <Grid space="md">
      <Typography variant="subhead" color="secondary">
        Введите номер телефона и получите доступ к системе на 2 часа
      </Typography>
      <Grid space="lg">
        <InputTel name={'tel'} control={control} />
        <Grid space="lg">
          {errors.tel && <ErrorCard text={errors.tel.message?.toString()} />}
          <Button onPress={handleSubmit(pressRegister)}>Отправить</Button>
          <Typography color="secondary" variant="subhead" textAlign="center">
            Повторная регистрация не допускается
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RegistrationModule;
