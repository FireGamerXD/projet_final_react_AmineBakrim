
import React from 'react';
import './index.css'
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ContextPovider } from './utils/ContextPovider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ContextPovider>
      <App />
    </ContextPovider>
    </BrowserRouter>
  </React.StrictMode>
);
