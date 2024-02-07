import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { ThemeProvider } from './provider/ThemeContext';
import '@fortawesome/fontawesome-free/css/all.css';

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
);
