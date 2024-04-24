import Grid from '@/shared/ui/layout/Grid';
import React from 'react';
import { ScrollView } from 'react-native';
import HeaderInfo from './HeaderInfo/HeaderInfo';
import Services from './Services/Services';
import Subscription from './Subscription/Subscription';
import UnActiveSubscription from './UnactiveSubscription/UnActiveSubscription';
import AdditionalOptions from './AdditionalOptions/AdditionalOptions';

const ProfileInfoBig = () => {
  return (
    <Grid>
      <ScrollView style={{ minHeight: '100%' }}>
        <Grid space="md" paddingBottom={8}>
          <HeaderInfo />
          <Subscription />
          <UnActiveSubscription />
          <Services />
          <AdditionalOptions />
        </Grid>
      </ScrollView>
    </Grid>
  );
};

export default ProfileInfoBig;
