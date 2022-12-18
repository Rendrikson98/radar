import { configureStore } from '@reduxjs/toolkit';
import menuSlice from './features/menuSlice';
import SideMenuReducer from './features/sideMenuSlice';

export const store = configureStore({
  reducer: {
    sideMenuState: SideMenuReducer,
    menuState: menuSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type UseDispatch = typeof store.dispatch;
