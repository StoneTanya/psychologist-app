import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App.jsx';
import './assets/styles/index.css';
import './assets/styles/normalize.css';
import './i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
