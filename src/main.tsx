import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes';
import GlobalStyle from './styles/global';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRoutes />
    <GlobalStyle />
  </React.StrictMode>
)
