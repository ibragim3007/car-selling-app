import { Inform } from '@/shared/services/logger.service/loger.service';
import { AppDispatch, RootState } from '../../store';
import { carsPageAction } from '../carsPageSlice';

export const toggleSuggestionCreateFilter = () => (dispatch: AppDispatch, getState: () => RootState) => {
  try {
    const {
      carsPageReducer: { showSuggestCreateFilter },
    } = getState();

    dispatch(carsPageAction.setShowSuggestCreateFilter(!showSuggestCreateFilter));
  } catch (e) {
    Inform.error(e);
  }
};
