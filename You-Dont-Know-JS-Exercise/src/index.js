import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CloserExercise from './closer-exercise/CloserExercise'
import CompareExercise from './compare-exercise/compare-exercise'
import Home from './Home'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1 class="text-3xl font-bold underline">Hello world!</h1>,
  },
  {
    path: '/compare-exercise',
    element: <CompareExercise />,
  },
  {
    path: '/closer-exercise',
    element: <CloserExercise />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
