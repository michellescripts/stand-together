// types
export const ADD_TOPIC = 'ADD_TOPIC'
export const ADD_DISCUSSION = 'ADD_DISCUSSION'
export const FETCH_STANDUPS_SUCCESS = 'FETCH_STANDUPS_SUCCESS'
export const REMOVE_DISCUSSION = 'REMOVE_DISCUSSION'

// action creator
export const addTopic = (topic) => {
  return { type: ADD_TOPIC, topic }
}

export const addDiscussionItem = (topic, name, title, details) => {
  return { type: ADD_DISCUSSION, topic, name, title, details }
}

export const removeDiscussionItem = (currentTopic, ind) => {
  return { type: REMOVE_DISCUSSION, currentTopic, ind }
}

export function fetchSuccess (response) {
  return {
    type: FETCH_STANDUPS_SUCCESS,
    response: response
  }
}
