import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { Suspense } from 'react'
import store from './redux/index'
import { HashRouter } from 'react-router-dom'
import App0 from './App0'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <HashRouter>
    <Suspense fallback="loading">
      <Provider store={store}>
        <App0 />
      </Provider>
    </Suspense>
  </HashRouter>
)
