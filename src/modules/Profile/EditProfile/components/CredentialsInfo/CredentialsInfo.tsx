import GoInButton from '@/components/Controllers/buttons/GoInButton';
import CardTitle from '@/components/Wrappers/CardTitle';
import { routes } from '@/shared/config/routes';
import Button from '@/shared/ui/buttons/Button';
import Grid from '@/shared/ui/layout/Grid';
import { router } from 'expo-router';
import React from 'react';

const CredentialsInfo = () => {
  return (
    <CardTitle title="Учетные данные" borderRadius={16}>
      <Grid space="md">
        <GoInButton title="Логин" value={'9222222222'} />
        <Button onPress={() => router.push(routes.pages.profile.updatePassword)} color="black" variant="outline">
          Сменить пароль
        </Button>
      </Grid>
    </CardTitle>
  );
};

export default CredentialsInfo;