import React from 'react'
import { Navigate } from 'react-router-dom'
const Home = React.lazy(() => import('../pages/home'))
const Msg = React.lazy(() => import('../pages/msg'))
const Favor = React.lazy(() => import('../pages/favor'))
const Mine = React.lazy(() => import('../pages/mine'))
const routes = [
  { path: '/', element: <Navigate to="/home" /> },
  { path: '/home', element: <Home></Home> },
  { path: '/msg', element: <Msg></Msg> },
  { path: '/favor', element: <Favor></Favor> },
  { path: '/mine', element: <Mine></Mine> },
]
export default routes
