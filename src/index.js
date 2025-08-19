import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './index.css';
import App from './App';


const Root = () => {
  return (
    <BrowserRouter>
    <App />
    </BrowserRouter>
  );
}

const container = document.getElementById('root');
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
