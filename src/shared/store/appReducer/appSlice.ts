import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface AppStoreInterface {
  version: string;
}

const initialState: AppStoreInterface = {
  version: '1',
};

export const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    setVersion(state, action: PayloadAction<AppStoreInterface['version']>) {
      state.version = action.payload;
    },
  },
});

export const appAction = appSlice.actions;
export const appReducer = appSlice.reducer;
