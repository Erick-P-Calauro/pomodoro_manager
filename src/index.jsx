import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './ui/templates/App.tsx';
import { ThemeProvider } from './ui/logic/contexts/useThemeContext.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

