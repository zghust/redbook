import { Navigate } from 'react-router-dom'
import React from 'react'
import Authrouter from './authrouter'
const Home = React.lazy(() => import('../pages/home'))
const Msg = React.lazy(() => import('../pages/msg'))
const Favor = React.lazy(() => import('../pages/favor'))
const Mine = React.lazy(() => import('../pages/mine'))
const Login = React.lazy(() => import('../pages/login'))

const routes = [
  { path: '/', element: <Navigate to="/home" /> },
  { path: '/home', element: <Home></Home> },
  { path: '/msg', element: <Msg></Msg> },
  { path: '/favor', element: <Favor></Favor> },
  { path: '/mine', element: <Mine></Mine> },
  { path: '/login', element: <Login></Login> },
]
export default routes
