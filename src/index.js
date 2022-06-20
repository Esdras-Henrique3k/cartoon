import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Grommet } from 'grommet';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

root.render(
  <Grommet theme={theme}>
    <App />
  </Grommet>
);
