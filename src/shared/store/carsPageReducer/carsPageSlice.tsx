import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface StoreInterface {
  currentOffsetY: number;
}

const initialState: StoreInterface = {
  currentOffsetY: 0,
};

export const carsPageSlice = createSlice({
  name: 'carsPage',
  initialState: initialState,
  reducers: {
    setCurrentOffsetY(state, action: PayloadAction<number>) {
      state.currentOffsetY = action.payload;
    },
  },
});

export const carsPageAction = carsPageSlice.actions;
export const carsPageReducer = carsPageSlice.reducer;
