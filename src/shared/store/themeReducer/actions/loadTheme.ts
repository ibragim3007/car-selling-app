import Storage from '@/shared/constants/storage/Storage';
import { themes } from '@/shared/constants/theme/theme';
import { Inform } from '@/shared/services/logger.service/loger.service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppDispatch } from '../../store';
import { themeAction } from '../themeSlice';

export const loadTheme = () => async (dispatch: AppDispatch) => {
  try {
    const storeTheme = await AsyncStorage.getItem(Storage.theme);
    if (storeTheme === null) {
      await AsyncStorage.setItem(Storage.theme, 'light');
    } else if (storeTheme === 'light' || storeTheme === 'dark') {
      dispatch(themeAction.setCurrentColors(themes.find(theme => theme.themeName === storeTheme) || themes[0]));
      dispatch(themeAction.setCurrentTheme(storeTheme));
    }
  } catch (e) {
    Inform.log(e);
  }
};
