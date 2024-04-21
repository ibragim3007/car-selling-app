import BackButton from '@/components/BackButton/BackButton';
import HeaderCarTab from '@/modules/HeaderCarTab';
import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import { Stack } from 'expo-router';
import React from 'react';

const StackRoute = () => {
  const { colors } = useTheme();

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ title: 'Подборки' }} />
        <Stack.Screen
          name="cars/[id]"
          options={{
            headerShown: true,
            headerBackButtonMenuEnabled: true,
            headerTitle: '',
            headerStyle: { backgroundColor: colors.background.primary },
            headerLeft: () => <BackButton />,
            headerRight: () => <HeaderCarTab />,
          }}
        />
      </Stack>
    </>
  );
};

export default StackRoute;
