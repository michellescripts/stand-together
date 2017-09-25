import { applyMiddleware, createStore } from 'redux'
import reducer from './reducer'
import createNodeLogger from 'redux-node-logger'

const store = createStore(reducer, applyMiddleware(createNodeLogger()))

export default store
