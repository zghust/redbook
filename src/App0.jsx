import React from 'react'
import Drawer from './components/drawer'
import App from './App'
import { useDispatch, useSelector } from 'react-redux'
import { setDrawerOpen } from './redux/modules/home'
const SearchPage = React.lazy(() => import('./pages/searchpage'))
const App0 = () => {
  const dispatch = useDispatch()
  const isdraweropen = useSelector((state) => state.home.isdraweropen)
  const onclose = () => {
    dispatch(setDrawerOpen())
  }
  return (
    <div>
      <Drawer isOpen={isdraweropen} onClose={onclose}>
        <SearchPage isOpen={isdraweropen} onClose={onclose} />
      </Drawer>
      <App />
    </div>
  )
}

export default App0
