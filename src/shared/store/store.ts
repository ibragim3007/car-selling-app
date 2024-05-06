import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { appReducer } from './appReducer/appSlice';
import { themeReducer } from './themeReducer/themeSlice';
import { modalReducer } from './modalReducer/modalSlice';
import { rootApi } from '../api/root/api';

const rootReducer = combineReducers({
  appReducer,
  themeReducer,
  modalReducer,
  [rootApi.reducerPath]: rootApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }).concat(rootApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
