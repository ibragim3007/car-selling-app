import { Inform } from '@/shared/services/logger.service/loger.service';
import { AppDispatch } from '../../store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Storage from '@/shared/constants/storage/Storage';
import { appAction } from '../appSlice';

export const loadToken = () => async (dispatch: AppDispatch) => {
  try {
    const res = await AsyncStorage.getItem(Storage.auth_token);

    if (res) dispatch(appAction.setToken(res));
  } catch (e) {
    Inform.error(e);
  }
};
