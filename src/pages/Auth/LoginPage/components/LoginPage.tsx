import FooterSupport from '@/components/FooterSupport/FooterSupport';
import LoginModule from '@/modules/LoginModule/components/LoginModule';
import Grid from '@/shared/ui/layout/Grid';
import PageBackground from '@/shared/ui/layout/PageBackground';
import React from 'react';

export interface IFormInput {
  login: string;
  password: string;
}

const LoginPage = () => {
  return (
    <PageBackground isPaddingPage color="primary">
      <Grid justfity="space-between" style={{ height: '100%' }} paddingBottom={30}>
        <LoginModule />
        <FooterSupport />
      </Grid>
    </PageBackground>
  );
};

export default LoginPage;
