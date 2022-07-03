import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './pages/login'
import Coleta from './pages/coleta';
import Cart from './pages/cart';
import Parceiros from './pages/parceiros';
import Produtos from './pages/produtos';
import { Grommet } from 'grommet';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/coleta" element={<Coleta />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/parceiros" element={<Parceiros />} />
        <Route path="/produtos" element={<Produtos />} />
      </Routes>
    </BrowserRouter>
  </Grommet>
);
