import React from 'react'
import ReactDOM from 'react-dom'
import Routers from './router/router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

import 'antd/dist/antd.less'
import '@/assets/css/base.css'
import './httpConfig'
export const store = createStore(rootReducer)
ReactDOM.render(
  <Provider store={store}>
    <Routers />
  </Provider>,
  document.getElementById('root')
)
store.subscribe(() => {
  const current = store.getState()
  console.log('current state:', current.Info)
})
if (module.hot) {
  module.hot.accept(() => {
    ReactDOM.render(
      <Provider store={store}>
        <Routers />
      </Provider>,
      document.getElementById('root')
    )
  })
}
