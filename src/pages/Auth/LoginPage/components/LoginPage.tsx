import FooterSupport from '@/components/FooterSupport/FooterSupport';
import Button from '@/shared/ui/buttons/Button';
import Input from '@/shared/ui/input/Input';
import Grid from '@/shared/ui/layout/Grid';
import PageBackground from '@/shared/ui/layout/PageBackground';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';

const LoginPage = () => {
  return (
    <PageBackground paddingVertical={16} paddingHorizontal={16} color="primary">
      <Grid justfity="space-between" style={{ height: '100%' }} paddingBottom={30}>
        <Grid space="lg">
          <Grid space="md">
            <Input label="Логин" />
            <Input
              label="Пароль"
              secureTextEntry
              passwordRules={'required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8'}
              rightSide={
                <Typography variant="subhead" weight="medium" color="success">
                  Забыли пароль?
                </Typography>
              }
            />
          </Grid>
          <Button>Войти</Button>
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
