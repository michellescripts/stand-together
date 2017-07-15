import { applyMiddleware, createStore } from 'redux'
import clientStandupReducer from './stand-together-react/src/reducers/reducer'
import reducer from './reducer'
import createNodeLogger from 'redux-node-logger'

const store = createStore(reducer, applyMiddleware(createNodeLogger()))

export default store
