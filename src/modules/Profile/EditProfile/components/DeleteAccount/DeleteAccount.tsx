import CardTitle from '@/components/Wrappers/CardTitle';
import Button from '@/shared/ui/buttons/Button';
import React from 'react';

const DeleteAccount = () => {
  return (
    <CardTitle title="Удаление аккаунта" borderRadius={16}>
      <Button color="black" variant="outline">
        Удалить аккаунт
      </Button>
    </CardTitle>
  );
};

export default DeleteAccount;
