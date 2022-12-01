import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./index.css"
import MainAppProvider from './contexts/Main_app_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <MainAppProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MainAppProvider>
    
  </React.StrictMode>
);


reportWebVitals();
