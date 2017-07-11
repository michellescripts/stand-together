import { NEW_STANDUP } from './action'
import clientReducer from './stand-together-react/src/reducers/reducer'
import { ADD_DISCUSSION } from './stand-together-react/src/actions/actions'

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
            topics: ['Events', 'Interestings', 'Announce', 'Resources'],
            itemByTopic: {
              Events: [],
              Interestings: [],
              Announce: [],
              Resources: []
            }
          }
        }
      }
    case ADD_DISCUSSION:
      console.log('hitting or not')
      const id = action.id
      return {
        standups: state.standups,
        byId: {
          ...state.byID,
          [id]: clientReducer(state.standups.byId[id], action)
        }
      }
    default:
      return state
  }
}

export default reducer
