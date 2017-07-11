// types
export const ADD_TOPIC = 'ADD_TOPIC'
export const ADD_DISCUSSION = 'ADD_DISCUSSION'
export const FETCH_STANDUPS_SUCCESS = 'FETCH_STANDUPS_SUCCESS'

// action creator
export const addTopic = (topic) => {
  return { type: ADD_TOPIC, topic}
}

export const addDiscussionItem = (topic, name, title, details) => {
  // TODO: post to server redux
  return { type: ADD_DISCUSSION, topic, name, title, details}
}

export function fetchSuccess (response) {
  return {
    type: FETCH_STANDUPS_SUCCESS,
    response: response
  }
}
