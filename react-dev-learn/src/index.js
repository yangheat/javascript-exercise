import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TicTacToc from './tic-tac-toc/TicTacToc';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Hello World!</h1>
  },
  {
    path: '/tic-tac-toc',
    element: <TicTacToc />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)