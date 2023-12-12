import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { Suspense } from 'react'
import store from './redux/index'
import { HashRouter } from 'react-router-dom'
import App0 from './App0'
import { Skeleton } from 'antd-mobile'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <HashRouter>
    <Suspense
      fallback={
        <div>
          <Skeleton.Title animated />
          <Skeleton.Paragraph lineCount={45} animated />
        </div>
      }
    >
      <Provider store={store}>
        <App0 />
      </Provider>
    </Suspense>
  </HashRouter>
)
