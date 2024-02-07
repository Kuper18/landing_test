import React from 'react';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { useTheme } from './provider/ThemeContext';
import { Footer } from './components/Footer/Footer';

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
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
