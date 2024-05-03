import Input from '@/components/Controllers/Input/Input';
import Button from '@/shared/ui/buttons/Button';
import Card from '@/shared/ui/card/Card';
import Grid from '@/shared/ui/layout/Grid';
import ScrollViewPage from '@/shared/ui/layout/ScrollViewPage';
import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';

const UpdatePasswordPage = () => {
  const { control, handleSubmit, watch } = useForm();

  console.log(watch('new_password'));

  const pressUpdatePassword = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <ScrollViewPage spaceVertical="sm" bounces={false}>
      <Card borderRadius={16}>
        <Grid space="md">
          <Input
            secureTextEntry
            control={control}
            name="old_password"
            label="Старый пароль"
            rules={{ required: 'Пароль обязателен' }}
          />
          <Input
            secureTextEntry
            control={control}
            name="new_password"
            label="Новый пароль"
            rules={{ required: 'Пароль обязателен', minLength: { value: 8, message: 'Минимальная длина пароля 8' } }}
          />
          <Input
            secureTextEntry
            control={control}
            name="new_password_repeat"
            label="Подтверждение нового пароля"
            rules={{
              required: 'Пароль обязателен',
              minLength: { value: 8, message: 'Минимальная длина пароля 8' },
              validate: value => (value === watch('new_password') ? true : 'Пароль не совпадает'),
            }}
          />
          <Button onPress={handleSubmit(pressUpdatePassword)}>Изменить пароль</Button>
        </Grid>
      </Card>
    </ScrollViewPage>
  );
};

export default UpdatePasswordPage;
