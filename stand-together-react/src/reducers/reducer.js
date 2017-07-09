import { ADD_TOPIC } from '../actions/actions'

const initialState = {
  topics: [],
  itemByTopic: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOPIC:
      return {
        topics: [...state.topics, action.topic],
        itemByTopic: {
          ...state.itemByTopic,
          [action.topic]: []
        }
      }
    default:
      return state
  }
}

export default reducer
