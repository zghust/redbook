// import routes from './router'
import { Route, Routes } from 'react-router-dom'
import { AppWrapper } from './style'
import Tabbar from './components/tabbar'
import { Navigate, useNavigate } from 'react-router-dom'
import './assets/css/reset.css'
import React, { useState } from 'react'
// import Authrouter from './router/authrouter'
// const Authrouter = React.lazy(() => import('./router/authrouter'))
const Home = React.lazy(() => import('./pages/home'))

const Favor = React.lazy(() => import('./pages/favor'))
const Mine = React.lazy(() => import('./pages/mine'))
const Login = React.lazy(() => import('./pages/login'))
function App() {
  const navigate = useNavigate()

  return (
    <AppWrapper>
      <div className="app">
        <Tabbar navigate={navigate}></Tabbar>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route path="/home" element={<Home></Home>}></Route>

          <Route
            path="/favor"
            element={<Favor navigate={navigate}></Favor>}
          ></Route>
          <Route path="/mine" element={<Mine navigate={navigate} />}></Route>

          <Route
            path="/login"
            element={<Login navigate={navigate}></Login>}
          ></Route>
        </Routes>
      </div>
    </AppWrapper>
  )
}

export default App
