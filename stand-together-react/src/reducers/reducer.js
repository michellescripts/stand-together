import { ADD_TOPIC, ADD_DISCUSSION } from '../actions/actions'

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
    case ADD_DISCUSSION:
      const {name, title, details, topic} = action
      const currentItems = state.itemByTopic[topic]
      return {
        topics: state.topics,
        itemByTopic: {
          ...state.itemByTopic,
          // can do without const current items:
          // itemByTopic: [...state.itemByTopic[action.topic], {name, title, details}]
          [topic]: [...currentItems, {name, title, details}]
        }
      }
    default:
      return state
  }
}

export default reducer
