import { ITheme, themes } from '@/shared/constants/theme/theme';
import { createSlice } from '@reduxjs/toolkit';

interface StoreInterface {
  theme: ITheme;
}

const initialState: StoreInterface = {
  theme: themes[0],
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {},
});

export const themeAction = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
