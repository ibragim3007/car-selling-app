import BackButton from '@/components/BackButton/BackButton';
import HeaderCarTab from '@/modules/HeaderCarTab';
import { ITheme } from '@/shared/constants/theme/theme';
import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import Add from '@/icons/linear/add.svg';
import { Stack } from 'expo-router';
import React from 'react';
import { normalizedSize } from '@/shared/utils/size';
import { routes } from '@/shared/config/routes';

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
      }}
    >
      <Stack.Screen name="(tabs)" options={{ title: 'Подборки' }} />
      <Stack.Screen
        name={`(pages)/${routes.pages.support.advice}`}
        options={{
          headerTitle: 'Советы',
          headerShown: true,
          headerLeft: () => <BackButton />,
        }}
      />
      <Stack.Screen
        name={`(pages)/${routes.pages.support.help}`}
        options={{
          headerTitle: 'Помощь',
          headerShown: true,
          headerLeft: () => <BackButton />,
        }}
      />
      <Stack.Screen
        name={`(pages)/${routes.pages.support.questions}`}
        options={{
          headerTitle: 'Часто задаваемые вопросы',
          headerShown: true,
          headerLeft: () => <BackButton />,
        }}
      />
      <Stack.Screen name="cars/[id]" options={OptionsModal(colors)} />
      <Stack.Screen
        name={routes.auth.login}
        options={{
          headerTitle: 'Aвторизация',
          headerShown: true,
          headerLeft: () => <BackButton />,
        }}
      />
      <Stack.Screen
        name={routes.auth.registration}
        options={{
          headerTitle: 'Регистрация',
          headerShown: true,
          headerLeft: () => <BackButton />,
        }}
      />
      <Stack.Screen
        name={routes.auth.recovery}
        options={{
          headerTitle: 'Восстановление доступа',
          headerShown: true,
          headerLeft: () => <BackButton />,
        }}
      />
      <Stack.Screen
        name="(mycollections)/mycollections"
        options={{
          headerShown: true,
          headerBackButtonMenuEnabled: true,
          headerTitle: '',
          headerRight: () => <Add height={normalizedSize(16)} width={normalizedSize(16)} />,
          headerLeft: () => <BackButton />,
        }}
      />
    </Stack>
  );
};

export default StackRoute;
