import { Inform } from '@/shared/services/logger.service/loger.service';
import { AppDispatch } from '../../../store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Storage from '@/shared/constants/storage/Storage';
import { appAction } from '../../appSlice';

export const setToken = (token: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(appAction.setToken(token));
    await AsyncStorage.setItem(Storage.auth_token, token);
  } catch (e) {
    Inform.error(e);
  }
};
