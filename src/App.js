// import routes from './router'
import { Route, Routes, useLocation } from 'react-router-dom'
import Tabbar from './components/tabbar'
import { Navigate, useNavigate } from 'react-router-dom'
import './assets/css/reset.css'
import React from 'react'
import { SafeArea } from 'antd-mobile'
const Home = React.lazy(() => import('./pages/home'))
const Favor = React.lazy(() => import('./pages/favor'))
const Mine = React.lazy(() => import('./pages/mine'))
const Login = React.lazy(() => import('./pages/login'))
const Search = React.lazy(() => import('./pages/searchpage'))
function App() {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <div className="app">
      <div style={{ background: '#ace0ff' }}>
        <SafeArea position="top" />
      </div>
      <div>
        {location.pathname === '/search' ? null : (
          <Tabbar navigate={navigate} safeArea={true}></Tabbar>
        )}
      </div>
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
        <Route
          path="/search"
          element={<Search navigate={navigate}></Search>}
        ></Route>
      </Routes>
      <div style={{ background: '#ffcfac' }}>
        <SafeArea position="bottom" />
      </div>
    </div>
  )
}

export default App
