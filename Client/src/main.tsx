import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Chat from './chat/index.tsx'
import Login from './login/index.tsx'

const router = createBrowserRouter([
  { path: "/", Component: Login },
  { path: "*", Component: Chat },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
