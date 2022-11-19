import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Nav from './component/Nav';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Nav />
    <App />
  </BrowserRouter>
);

reportWebVitals();
