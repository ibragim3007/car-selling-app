import { AppDispatch } from '../../store';
import { DisplayDataModalProps, modalAction } from '../modalSlice';

export const openModal =
  ({ ...props }: DisplayDataModalProps) =>
  (dispatch: AppDispatch) => {
    try {
      dispatch(modalAction.setOpen(true));
      dispatch(modalAction.setDisplayData(props));
    } catch (e) {
      console.log(e);
    }
  };
