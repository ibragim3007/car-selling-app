import { ButtonProps } from '@/shared/ui/buttons/Button';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type TOptionCallback = { color?: ButtonProps['color'] };

type TCallbacks = 'callback1' | 'callback2' | 'callback3';

export interface DisplayDataModalProps {
  title?: string;
  subhead: string;
  children?: React.ReactNode;
  type?: 'horizontal' | 'vertical';
  options?: Partial<Record<TCallbacks, TOptionCallback>>;
  buttons?: React.ReactNode[];
}

interface StoreInterface {
  isOpen: boolean;
  displayData?: DisplayDataModalProps;
}

const initialState: StoreInterface = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState: initialState,
  reducers: {
    setOpen(state, action: PayloadAction<StoreInterface['isOpen']>) {
      state.isOpen = action.payload;
    },
    setDisplayData(state, action: PayloadAction<DisplayDataModalProps>) {
      state.displayData = action.payload;
    },
  },
});

export const modalAction = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
