import React from 'react';
import ReactDOM from 'react-dom/client';

import { IndexProvider } from './context/index.tsx';

import App from './App.tsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IndexProvider>
      <App />
    </IndexProvider>
  </React.StrictMode>,
);
