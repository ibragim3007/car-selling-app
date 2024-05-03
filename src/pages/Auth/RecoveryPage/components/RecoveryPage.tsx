import InputTel from '@/components/Controllers/Input/InputTel';
import ErrorCard from '@/components/Informers/ErrorCard';
import Button from '@/shared/ui/buttons/Button';
import Grid from '@/shared/ui/layout/Grid';
import PageBackground from '@/shared/ui/layout/PageBackground';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { Alert } from 'react-native';

const RecoveryPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const pressButton = (data: FieldValues) => {
    Alert.alert(JSON.stringify(data));
  };

  return (
    <PageBackground color="primary" isPaddingPage>
      <Grid space="md">
        <Typography variant="subhead" color="secondary">
          Введите номер телефона, который вы указали при регистрации. Мы пришлем пароль
        </Typography>
        <Grid space="lg">
          <InputTel name={'tel'} control={control} />
          {errors.tel && <ErrorCard text={errors.tel.message?.toString()} />}
          <Button onPress={handleSubmit(pressButton)}>Отправить</Button>
        </Grid>
      </Grid>
    </PageBackground>
  );
};

export default RecoveryPage;
