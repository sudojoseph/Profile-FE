import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import './index.css';
import App from './App';

const options = {
  position: 'bottom center',
  timeout: 4000,
  offset: '30px',
  transition: 'scale'
};


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>
);
