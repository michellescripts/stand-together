import { NEW_STANDUP } from './action'
import clientReducer from './stand-together-react/src/reducers/reducer'
import { ADD_DISCUSSION, REMOVE_DISCUSSION } from './stand-together-react/src/actions/actions'

const initialState = {
  standups: [],
  byId: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_STANDUP:
    // this assumes action.id is unique. Otherwise- overwrites.
      return {
        standups: [...state.standups, action.id],
        byId: {
          ...state.byId,
          [action.id]: {
            // initial standup skeleton
            topics: ['Events', 'Interestings', 'Announcements'],
            itemByTopic: {
              Events: [],
              Interestings: [],
              Announcements: []
            }
          }
        }
      }
    case ADD_DISCUSSION:
      const id = action.id
      const nextState = {
        standups: state.standups,
        byId: {
          ...state.byId,
          [id]: clientReducer(state.byId[id], action)
        }
      }
      return nextState
    case REMOVE_DISCUSSION:
      const currentId = action.id
      const afterState = {
        standups: state.standups,
        byId: {
          ...state.byId,
          [currentId]: clientReducer(state.byId[currentId], action)
        }
      }
      return afterState
    default:
      return state
  }
}

export default reducer
