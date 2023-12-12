import React from 'react'
import Drawer from './components/drawer'
import { AppWrapper } from './style'
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
    <AppWrapper>
      <div className="main">
        <Drawer isOpen={isdraweropen} onClose={onclose}>
          <SearchPage isOpen={isdraweropen} onClose={onclose} />
        </Drawer>
        <App />
      </div>
    </AppWrapper>
  )
}

export default App0
