import React from 'react';
import { useTheme } from './provider/ThemeContext';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { AsideLinks } from './components/AsideLinks';

import './App.scss';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div
      className="App"
      style={
        {
          ...theme,
        } as React.CSSProperties
      }
    >
      <AsideLinks />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
