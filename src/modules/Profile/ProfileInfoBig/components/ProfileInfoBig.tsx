import Grid from '@/shared/ui/layout/Grid';
import React from 'react';
import { ScrollView } from 'react-native';
import HeaderInfo from './HeaderInfo/HeaderInfo';
import Subscription from './Subscription/Subscription';
import Services from './Services/Services';

const ProfileInfoBig = () => {
  return (
    <Grid>
      <ScrollView>
        <Grid space="md">
          <HeaderInfo />
          <Subscription />
          <Services />
        </Grid>
      </ScrollView>
    </Grid>
  );
};

export default ProfileInfoBig;
