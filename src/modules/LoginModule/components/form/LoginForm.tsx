import Input from '@/components/Controllers/Input/Input';
import Button from '@/shared/ui/buttons/Button';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';

export const LoginForm = () => {
  const { control, handleSubmit, setFocus } = useForm();

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
          enterKeyHint="next"
          keyboardType="ascii-capable"
          autoCapitalize="none"
          onSubmitEditing={() => setFocus('password')}
          label="Логин"
          autoCorrect={false}
          rules={{
            required: 'Логин обязателен',
          }}
        />
        <Input
          name="password"
          label="Пароль"
          enterKeyHint="enter"
          onSubmitEditing={handleSubmit(pressButton)}
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
      {/* <ErrorCard text="Ошибка" /> */}
      <Button onPress={handleSubmit(pressButton)}>Войти</Button>
    </>
  );
};
