import routes from './router'
import { useRoutes } from 'react-router-dom'
import { AppWrapper } from './style'
function App() {
  return (
    <AppWrapper>
      <div className="app">{useRoutes(routes)}</div>
    </AppWrapper>
  )
}

export default App
