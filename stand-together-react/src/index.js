import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { unregister } from './registerServiceWorker'
import { applyMiddleware, createStore } from 'redux'
import reducer from './reducers/reducer'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

const store = createStore(reducer, applyMiddleware(logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
unregister()
