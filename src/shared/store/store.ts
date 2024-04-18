import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { appReducer } from './appReducer/appSlice';
import { themeReducer } from './themeReducer/themeSlice';

const rootReducer = combineReducers({
  appReducer,
  themeReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }).concat(),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
