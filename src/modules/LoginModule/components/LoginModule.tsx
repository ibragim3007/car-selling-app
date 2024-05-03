import React from 'react';
import { LoginForm } from './form/LoginForm';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import { router } from 'expo-router';
import { routes } from '@/shared/config/routes';

const LoginModule = () => {
  return (
    <Grid space="lg">
      <LoginForm />
      <Grid marginVertical={20} space="sm" align="center" row justfity="center">
        <Typography variant="subhead">Нет аккаунта?</Typography>
        <Typography
          onPress={() => router.push(routes.auth.registration)}
          variant="subhead"
          weight="medium"
          color="success"
        >
          Зарегистрироваться
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LoginModule;
