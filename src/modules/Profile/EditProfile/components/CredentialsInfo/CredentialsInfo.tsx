import GoInButton from '@/components/Controllers/buttons/GoInButton';
import CardTitle from '@/components/Wrappers/CardTitle';
import Button from '@/shared/ui/buttons/Button';
import Grid from '@/shared/ui/layout/Grid';
import React from 'react';

const CredentialsInfo = () => {
  return (
    <CardTitle title="Учетные данные" borderRadius={16}>
      <Grid space="md">
        <GoInButton title="Логин" value={'9222222222'} />
        <Button color="black" variant="outline">
          Сменить пароль
        </Button>
      </Grid>
    </CardTitle>
  );
};

export default CredentialsInfo;
