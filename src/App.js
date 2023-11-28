import routes from './router'
import { useRoutes } from 'react-router-dom'
import { AppWrapper } from './style'
import Tabbar from './components/tabbar'
function App() {
  return (
    <AppWrapper>
      <div className="app">
        {useRoutes(routes)}
        <Tabbar></Tabbar>
      </div>
    </AppWrapper>
  )
}

export default App
