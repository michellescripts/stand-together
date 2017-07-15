import reducer from './reducer'

const initialState = {
  standups: ['H1LNmR8H$', 'HJWLXCUr$'],
  byId: {
    H1LNmR8H$: {
      topics: ['Events', 'Interestings', 'Announcements', 'Resources'],
      itemByTopic: {
        Events: [],
        Interestings: [],
        Announcements: [],
        Resources: []
      }
    },
    HJWLXCUr$: {
      topics: ['Events', 'Interestings', 'Announcements', 'Resources'],
      itemByTopic: {
        Events: [],
        Interestings: [],
        Announcements: [],
        Resources: []}
    }
  }
}

const action = {
  type: 'ADD_DISCUSSION',
  topic: 'Events',
  name: 'hi',
  title: 'hi',
  details: 'hi',
  id: 'HJWLXCUr$'
}

const newState = reducer(initialState, action)

console.log(newState)
