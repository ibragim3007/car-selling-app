import Grid from '@/shared/ui/layout/Grid';
import React from 'react';
import { ScrollView } from 'react-native';
import HeaderInfo from './HeaderInfo/HeaderInfo';
import Subscription from './Subscription/Subscription';

const ProfileInfoBig = () => {
  return (
    <Grid>
      <ScrollView>
        <Grid gap={16}>
          <HeaderInfo />
          <Subscription />
        </Grid>
      </ScrollView>
    </Grid>
  );
};

export default ProfileInfoBig;
