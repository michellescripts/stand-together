import { createStore } from 'redux'
import clientStandupReducer from './stand-together-react/src/reducers/reducer'
import reducer from './reducer'

const store = createStore(reducer)

export default store
