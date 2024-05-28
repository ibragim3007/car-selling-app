import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface StoreInterface {
  currentOffsetY: number;
  showSuggestCreateFilter: boolean;
}

const initialState: StoreInterface = {
  currentOffsetY: 0,
  showSuggestCreateFilter: false,
};

export const carsPageSlice = createSlice({
  name: 'carsPage',
  initialState: initialState,
  reducers: {
    setCurrentOffsetY(state, action: PayloadAction<number>) {
      state.currentOffsetY = action.payload;
    },

    setShowSuggestCreateFilter(state, action: PayloadAction<boolean>) {
      state.showSuggestCreateFilter = action.payload;
    },
  },
});

export const carsPageAction = carsPageSlice.actions;
export const carsPageReducer = carsPageSlice.reducer;
