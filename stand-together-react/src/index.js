import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { unregister } from './registerServiceWorker'
import { createStore } from 'redux'
import reducer from './reducers/reducer'
import { Provider } from 'react-redux'
import { addTopic } from './actions/actions'

const store = createStore(reducer)

store.dispatch(addTopic('Interestings'))
store.dispatch(addTopic('Events'))
store.dispatch(addTopic('Resources'))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
unregister()
