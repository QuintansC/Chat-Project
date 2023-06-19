import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Chat from '../chat'
import Login from '../login'

const router = createBrowserRouter([
  { path: "/", Component: Login },
  { path: "*", Component: Chat },
]);

export { router, RouterProvider}