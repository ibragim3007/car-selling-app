import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { appReducer } from './appReducer/appSlice';
import { themeReducer } from './themeReducer/themeSlice';
import { modalReducer } from './modalReducer/modalSlice';
import { rootApi } from '../api/root/api';
import { carsPageReducer } from './carsPageReducer/carsPageSlice';

const rootReducer = combineReducers({
  appReducer,
  themeReducer,
  modalReducer,
  carsPageReducer,
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
