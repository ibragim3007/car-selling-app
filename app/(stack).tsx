import BackButton from '@/components/BackButton/BackButton';
import HeaderCarTab from '@/modules/HeaderCarTab';
import { ITheme } from '@/shared/constants/theme/theme';
import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import Add from '@/icons/linear/add.svg';
import { Stack } from 'expo-router';
import React from 'react';
import { normalizedSize } from '@/shared/utils/size';

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
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" options={{ title: 'Подборки' }} />
      <Stack.Screen name="cars/[id]" options={OptionsModal(colors)} />
      <Stack.Screen name="auth/login" options={OptionsModal(colors)} />
      <Stack.Screen name="auth/registration" options={OptionsModal(colors)} />
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
