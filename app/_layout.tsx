import BackButton from '@/components/BackButton/BackButton';
import HeaderCarTab from '@/modules/HeaderCarTab';
import { setupStore } from '@/shared/store/store';
import {
  Montserrat_100Thin,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black,
  Montserrat_900Black_Italic,
  useFonts,
} from '@expo-google-fonts/montserrat';
import { Stack } from 'expo-router';
import React from 'react';
import { Provider } from 'react-redux';

const RootLayout = () => {
  const [fontsLoaded, fontError] = useFonts({
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light_Italic,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black_Italic,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const store = setupStore();

  return (
    <Provider store={store}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ title: 'Подборки' }} />
        <Stack.Screen
          name="cars/[id]"
          options={{
            headerShown: true,
            headerTitle: '',
            headerBackButtonMenuEnabled: true,
            headerLeft: () => <BackButton />,
            headerRight: () => <HeaderCarTab />,
          }}
        />
      </Stack>
    </Provider>
  );
};

export default RootLayout;
