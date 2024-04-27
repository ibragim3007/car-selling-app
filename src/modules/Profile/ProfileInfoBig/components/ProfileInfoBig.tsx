import Grid from '@/shared/ui/layout/Grid';
import React from 'react';
import AdditionalOptions from './AdditionalOptions/AdditionalOptions';
import HeaderInfo from './HeaderInfo/HeaderInfo';
import Services from './Services/Services';
import Subscription from './Subscription/Subscription';
import UnActiveSubscription from './UnactiveSubscription/UnActiveSubscription';

const ProfileInfoBig = () => {
  return (
    <Grid space="md" paddingBottom={8}>
      <HeaderInfo />
      <Subscription />
      <UnActiveSubscription />
      <Services />
      <AdditionalOptions />
    </Grid>
  );
};

export default ProfileInfoBig;
