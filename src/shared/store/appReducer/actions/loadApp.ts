import { Inform } from '@/shared/services/logger.service/loger.service';
import { AppDispatch } from '../../store';
import { loadTheme } from '../../themeReducer/actions/loadTheme';
import { loadToken } from './auth/loadToken';

export const loadApp = () => async (dispatch: AppDispatch) => {
  try {
    await dispatch(loadTheme());
    await dispatch(loadToken());
  } catch (e) {
    Inform.error(e);
  }
};
