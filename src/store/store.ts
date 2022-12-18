import { configureStore } from '@reduxjs/toolkit';
import SideMenuReducer from './features/sideMenuSlice';

export const store = configureStore({
  reducer: {
    sideMenuState: SideMenuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type UseDispatch = typeof store.dispatch;
