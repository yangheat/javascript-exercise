import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CloserExercise from './closer-exercise/CloserExercise'
import CompareExercise from './compare-exercise/compare-exercise'
import Home from './Home'
import './index.css'
import Prototypeexercise from './prototype-exercise/Prototype-exercise'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/compare-exercise',
    element: <CompareExercise />,
  },
  {
    path: '/closer-exercise',
    element: <CloserExercise />,
  },
  {
    path: '/prototype-exercise',
    element: <Prototypeexercise />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
