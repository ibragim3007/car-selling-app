import FooterSupport from '@/components/FooterSupport/FooterSupport';
import ErrorCard from '@/components/Informers/ErrorCard';
import Button from '@/shared/ui/buttons/Button';
import Input from '@/shared/ui/input/Input';
import Grid from '@/shared/ui/layout/Grid';
import PageBackground from '@/shared/ui/layout/PageBackground';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';

export interface IFormInput {
  login: string;
  password: string;
}

const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const pressButton = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <PageBackground paddingVertical={16} paddingHorizontal={16} color="primary">
      <Grid justfity="space-between" style={{ height: '100%' }} paddingBottom={30}>
        <Grid space="lg">
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
              passwordRules={'required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8'}
              rightSide={
                <Typography variant="subhead" weight="medium" color="success">
                  Забыли пароль?
                </Typography>
              }
            />
          </Grid>
          <ErrorCard text="Ошибка" />
          <Button onPress={handleSubmit(pressButton)}>Войти</Button>

          <Grid marginVertical={20} space="sm" align="center" row justfity="center">
            <Typography variant="subhead">Нет аккаунта?</Typography>
            <Typography variant="subhead" weight="medium" color="success">
              Зарегистрироваться
            </Typography>
          </Grid>
        </Grid>
        <FooterSupport />
      </Grid>
    </PageBackground>
  );
};

export default LoginPage;
