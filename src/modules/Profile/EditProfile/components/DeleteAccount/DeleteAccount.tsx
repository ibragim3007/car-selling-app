import CardTitle from '@/components/Wrappers/CardTitle';
import { routes } from '@/shared/config/routes';
import Button from '@/shared/ui/buttons/Button';
import { router } from 'expo-router';
import React from 'react';

const DeleteAccount = () => {
  return (
    <CardTitle title="Удаление аккаунта" borderRadius={16}>
      <Button onPress={() => router.push(routes.pages.profile.delete)} color="black" variant="outline">
        Удалить аккаунт
      </Button>
    </CardTitle>
  );
};

export default DeleteAccount;
