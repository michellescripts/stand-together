// types
export const ADD_TOPIC = 'ADD_TOPIC'

// action creator
export const addTopic = (topic) => {
  return { type: ADD_TOPIC, topic}
}
