import { configureStore } from '@reduxjs/toolkit';
import { sideMenuReducer } from './reducers/sideMenuReducer';

export const store = configureStore({
  reducer: {
    sideMenuState: sideMenuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type UseDispatch = typeof store.dispatch;
