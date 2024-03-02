import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CompareExercise from './compare-exercise/compare-exercise'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello, World!</div>,
  },
  {
    path: '/compare-exercise',
    element: <CompareExercise />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
