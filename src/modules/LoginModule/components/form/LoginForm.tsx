import Input from '@/components/Controllers/Input/Input';
import ErrorCard from '@/components/Informers/ErrorCard';
import { routes } from '@/shared/config/routes';
import { useLogin } from '@/shared/hooks/entityies/user/useLogin';
import { ILogin } from '@/shared/types';
import Button from '@/shared/ui/buttons/Button';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import { isServerError } from '@/shared/utils/isServerError';
import { Link } from 'expo-router';
import React from 'react';
import { useForm } from 'react-hook-form';

export const LoginForm = () => {
  const { isError, isLoading, error, pressLoginButton } = useLogin();
  const { control, handleSubmit, setFocus } = useForm<ILogin>({
    defaultValues: {
      login: '',
      password: '',
    },
  });

  const pressButton = async (data: ILogin) => {
    await pressLoginButton(data);
  };

  return (
    <>
      <Grid space="md">
        <Input
          style={{ borderColor: 'red' }}
          name="login"
          control={control}
          enterKeyHint="next"
          keyboardType="ascii-capable"
          autoCapitalize="none"
          onSubmitEditing={() => setFocus('password')}
          label="Логин"
          autoCorrect={false}
          rules={{
            required: 'Логин обязателен',
          }}
        />
        <Input
          name="password"
          label="Пароль"
          enterKeyHint="enter"
          onSubmitEditing={handleSubmit(pressButton)}
          rules={{
            required: 'Пароль обязателен',
            minLength: {
              value: 4,
              message: 'Минимум 4 символа',
            },
          }}
          control={control}
          secureTextEntry
          rightSide={
            <Link href={routes.auth.recovery}>
              <Typography variant="subhead" weight="medium" color="success">
                Забыли пароль?
              </Typography>
            </Link>
          }
        />
      </Grid>
      {isError && !isLoading && isServerError(error) && <ErrorCard error={error} />}
      <Button loading={isLoading} onPress={handleSubmit(pressButton)}>
        Войти
      </Button>
    </>
  );
};
