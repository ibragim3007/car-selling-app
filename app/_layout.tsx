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
import React from 'react';
import { Provider } from 'react-redux';
import StackRoute from './(stack)';
import ModalAction from '@/components/Modal/ModalAction';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import LoadApp from '@/shared/providers/LoadApp';

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
      <LoadApp>
        <Provider store={store}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
              <StackRoute />
              <ModalAction />
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
        </Provider>
      </LoadApp>
    </Provider>
  );
};

export default RootLayout;
