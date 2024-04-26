import RegistrationModule from '@/modules/RegistrationModule';
import PageBackground from '@/shared/ui/layout/PageBackground';
import React from 'react';

const RegistrationPage = () => {
  return (
    <PageBackground isPaddingPage color="primary">
      <RegistrationModule />
    </PageBackground>
  );
};

export default RegistrationPage;
