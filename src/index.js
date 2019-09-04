import React from 'react'
import ReactDOM from 'react-dom'
import Routers from './router/router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

import 'antd/dist/antd.less'
import '@/assets/css/base.css'
import './httpConfig'

const logger = store => next => action => {
  console.log('dispatching', action)
  return next(action)
}//每次dispatch 打印出action
const logger1 = store => next => action => {
  console.log('dispatching1', action)
  return next(action)
}//每次dispatch 打印出action

export const store = createStore(rootReducer, applyMiddleware(logger, logger1))

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
