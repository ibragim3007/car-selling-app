import { ITheme, themes } from '@/shared/constants/theme/theme';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ThemeTypes = 'light' | 'dark';
interface StoreInterface {
  colors: ITheme;
  currentTheme: 'light' | 'dark';
}

const initialState: StoreInterface = {
  colors: themes[0],
  currentTheme: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    setCurrentTheme(state, action: PayloadAction<ThemeTypes>) {
      state.currentTheme = action.payload;
    },
    setCurrentColors(state, action: PayloadAction<ITheme>) {
      state.colors = action.payload;
    },
  },
});

export const themeAction = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
