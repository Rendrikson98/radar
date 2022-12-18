import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Radar } from './page/Radar';
import './styles/global.scss';

export function App() {
  return (
    <Provider store={store}>
      <Radar />
    </Provider>
  );
}
