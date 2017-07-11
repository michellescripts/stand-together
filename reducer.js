import { NEW_STANDUP } from './action'

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
    default:
      return state
  }
}

export default reducer
