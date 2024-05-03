import Grid from '@/shared/ui/layout/Grid';
import React from 'react';
import ContactInfo from './ContactInfo/ContactInfo';
import CredentialsInfo from './CredentialsInfo/CredentialsInfo';
import DeleteAccount from './DeleteAccount/DeleteAccount';
import GeneralInfo from './GeneralInfo/GeneralInfo';

export const EditProfile = () => {
  return (
    <Grid space="sm">
      <GeneralInfo />
      <ContactInfo />
      <CredentialsInfo />
      <DeleteAccount />
    </Grid>
  );
};
