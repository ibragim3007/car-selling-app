import Button from '@/shared/ui/buttons/Button';
import Input from '@/components/Controllers/Input/Input';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import ErrorCard from '@/components/Informers/ErrorCard';

export const LoginForm = () => {
  const { control, handleSubmit } = useForm();

  const pressButton = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <>
      <Grid space="md">
        <Input
          style={{ borderColor: 'red' }}
          name="login"
          control={control}
          label="Логин"
          rules={{
            required: 'Логин обязателен',
          }}
        />
        <Input
          name="password"
          label="Пароль"
          rules={{
            required: 'Пароль обязателен',
            minLength: {
              value: 4,
              message: 'Минимум 4 символа',
            },
          }}
          control={control}
          secureTextEntry
          rightSide={
            <Typography variant="subhead" weight="medium" color="success">
              Забыли пароль?
            </Typography>
          }
        />
      </Grid>
      <ErrorCard text="Ошибка" />
      <Button onPress={handleSubmit(pressButton)}>Войти</Button>
    </>
  );
};
