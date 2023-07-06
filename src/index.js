import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { TodoProvider } from './context/todo-context';
import { ShopProvider } from './context/shop-context';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoProvider>
        <ShopProvider>
          <App />
        </ShopProvider>
      </TodoProvider>
    </BrowserRouter>
  </React.StrictMode>
);
