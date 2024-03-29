import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ThinkingInReact from './thinking-in-react/ThinkingInReact';
import TicTacToc from './tic-tac-toc/TicTacToc';
import AvoidDeeplyNestedState from './avoid-deeply-nested-state/AvoidDeeplyNestedSate';
import FixDisappearingSelection from './fix-disappearing-selection/FixDisappearingSelection';

const router = createBrowserRouter([{
    path: '/',
    element: <h1>Hello World!</h1>
  }, {
    path: "/thinking-in-react",
    element: <ThinkingInReact />
  }, {
    path: '/tic-tac-toc',
    element: <TicTacToc />
  }, {
    path: 'avoid-deeply-nested-state',
    element: <AvoidDeeplyNestedState />
  }, {
    path: 'fix-disappearing-selection',
    element: <FixDisappearingSelection />
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)