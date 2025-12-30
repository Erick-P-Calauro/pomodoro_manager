import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router";
import { ThemeProvider } from './ui/logic/contexts/useThemeContext.tsx';
import { AuthContextProvider } from './ui/logic/contexts/useAuthContext.tsx';
import { Login } from './ui/templates/Login.tsx';
import { App } from './ui/templates/App.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />}/>
          </Routes>
        </ThemeProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

