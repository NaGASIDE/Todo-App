import React from 'react';
import { AppRouter } from './components/AppRouter/AppRouter';
import { Header } from './components/Header/Header';
import './App.sass';

export const App = () => {
  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
};
