import BackButton from '@/components/BackButton/BackButton';
import MyFiltersHeader from '@/components/HeadersRight/MyFiltersHeader';
import HeaderCarTab from '@/modules/HeaderCarTab';
import { routes } from '@/shared/config/routes';
import { ITheme } from '@/shared/constants/theme/theme';
import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import { Stack } from 'expo-router';
import React from 'react';

function OptionsModal(colors: ITheme) {
  return {
    headerShown: true,
    headerBackButtonMenuEnabled: true,
    headerTitle: '',
    headerStyle: { backgroundColor: colors.background.primary },

    headerLeft: () => <BackButton />,
    headerRight: () => <HeaderCarTab />,
  };
}
const StackRoute = () => {
  const { colors } = useTheme();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerTitleStyle: { color: colors.text.primary },
        headerStyle: { backgroundColor: colors.background.primary },
        headerLeft: () => <BackButton />,
      }}
    >
      <Stack.Screen name="(tabs)" options={{ title: 'Подборки' }} />
      <Stack.Screen
        name={`(pages)/${routes.pages.support.advice}`}
        options={{
          headerTitle: 'Советы',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name={`(pages)/${routes.pages.support.help}`}
        options={{
          headerTitle: 'Помощь',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name={`(pages)/${routes.pages.support.questions}`}
        options={{
          headerTitle: 'Часто задаваемые вопросы',
          headerShown: true,
        }}
      />
      <Stack.Screen name="cars/[id]" options={OptionsModal(colors)} />
      <Stack.Screen
        name={routes.auth.login}
        options={{
          headerTitle: 'Aвторизация',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name={routes.auth.registration}
        options={{
          headerTitle: 'Регистрация',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name={routes.auth.recovery}
        options={{
          headerTitle: 'Восстановление доступа',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name={routes.pages.filter.mycollections}
        options={{
          headerShown: true,
          headerBackButtonMenuEnabled: true,
          headerTitle: 'Подборки',
          headerRight: () => <MyFiltersHeader />,
        }}
      />
      <Stack.Screen
        name={routes.pages.filter.newfilter}
        options={{
          headerShown: true,
          headerBackButtonMenuEnabled: true,
          headerTitle: 'Новая подборка',
          headerRight: () => null,
        }}
      />
      <Stack.Screen
        name={`(pages)/${routes.pages.profile.edit}`}
        options={{
          headerShown: true,
          headerBackButtonMenuEnabled: true,
          headerTitle: 'Настройки профиля',
          headerRight: () => null,
        }}
      />
      <Stack.Screen
        name={`(pages)/${routes.pages.profile.updatePassword}`}
        options={{
          headerShown: true,
          headerBackButtonMenuEnabled: true,
          headerTitle: 'Сменить пароль',
          headerRight: () => null,
        }}
      />
      <Stack.Screen
        name={`(pages)/${routes.pages.profile.delete}`}
        options={{
          headerShown: true,
          headerBackButtonMenuEnabled: true,
          headerTitle: 'Удаление аккаунта',
          headerRight: () => null,
        }}
      />
      <Stack.Screen
        name={'(pages)/settings/index'}
        options={{
          headerShown: true,
          headerBackButtonMenuEnabled: true,
          headerTitle: 'Настройки',
          headerRight: () => null,
        }}
      />
    </Stack>
  );
};

export default StackRoute;
