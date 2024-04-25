import { AppDispatch } from '../../store';
import { modalAction } from '../modalSlice';

export const closeModal = () => (dispatch: AppDispatch) => {
  try {
    dispatch(modalAction.setOpen(false));
  } catch (e) {
    console.log(e);
  }
};
