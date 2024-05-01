import { themes } from '@/shared/constants/theme/theme';
import { AppDispatch, RootState } from '../../store';
import { themeAction } from '../themeSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Storage from '@/shared/constants/storage/Storage';

export const switchTheme = () => async (dispatch: AppDispatch, getState: () => RootState) => {
  try {
    const {
      themeReducer: { currentTheme },
    } = getState();

    if (currentTheme === 'dark') {
      dispatch(themeAction.setCurrentColors(themes.find(theme => theme.themeName === 'light') || themes[0]));
      dispatch(themeAction.setCurrentTheme('light'));
      await AsyncStorage.setItem(Storage.theme, 'light');
    } else if (currentTheme === 'light') {
      dispatch(themeAction.setCurrentColors(themes.find(theme => theme.themeName === 'dark') || themes[0]));
      dispatch(themeAction.setCurrentTheme('dark'));
      await AsyncStorage.setItem(Storage.theme, 'dark');
    }
  } catch (e) {
    console.log(e);
  }
};
