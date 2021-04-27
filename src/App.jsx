import React from 'react';
import { AppRouter } from './components/AppRouter/AppRouter';
import { Header } from './components/Header/Header';
import { store } from './store/store';
import { Provider } from 'react-redux';
import './App.sass';

export const App = () => {
  return (
    <>
      <Provider store={store} >
        <Header />
        <AppRouter />
      </Provider>
    </>
  );
};
