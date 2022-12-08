import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CurrencyContext from './context/CurrencyContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CurrencyContext>
    <App />
    </CurrencyContext>
  </React.StrictMode>
);

reportWebVitals();
