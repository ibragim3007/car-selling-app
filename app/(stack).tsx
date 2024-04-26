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
    <Stack screenOptions={{ headerShown: false, headerTitleStyle: { color: colors.text.primary } }}>
      <Stack.Screen name="(tabs)" options={{ title: 'Подборки' }} />
      <Stack.Screen name="cars/[id]" options={OptionsModal(colors)} />
      <Stack.Screen
        name="(pages)/help"
        options={{
          headerTitle: 'Помощь',
          headerShown: true,
          headerLeft: () => <BackButton />,
        }}
      />
      <Stack.Screen
        name={routes.auth.login}
        options={{
          headerStyle: { backgroundColor: colors.background.primary },
          headerTitle: 'Aвторизация',
          headerShown: true,
          headerLeft: () => <BackButton />,
        }}
      />
      <Stack.Screen
        name={routes.auth.registration}
        options={{
          headerStyle: { backgroundColor: colors.background.primary },
          headerTitle: 'Регистрация',
          headerShown: true,
          headerLeft: () => <BackButton />,
        }}
      />
      <Stack.Screen
        name={routes.auth.recovery}
        options={{
          headerStyle: { backgroundColor: colors.background.primary },
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
          headerStyle: { backgroundColor: colors.background.primary },
          headerRight: () => <Add height={normalizedSize(16)} width={normalizedSize(16)} />,
          headerLeft: () => <BackButton />,
        }}
      />
    </Stack>
  );
};

export default StackRoute;
