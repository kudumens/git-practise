import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
console.log(process.env.NODE_VERSION);
console.log(process.env.TACMS_TEST_ENV_CLIENT_ID);
console.log(process.env.NODE_ENV);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
