import { AppDispatch } from '../../store';
import { themeAction } from '../themeSlice';

export const updatePrimary = (newColor: string) => (dispatch: AppDispatch) => {
  try {
    dispatch(themeAction.setPrimaryColor(newColor));
  } catch (e) {
    console.log(e);
  }
};
