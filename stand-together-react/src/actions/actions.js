// types
export const ADD_TOPIC = 'ADD_TOPIC'
export const ADD_DISCUSSION = 'ADD_DISCUSSION'

// action creator
export const addTopic = (topic) => {
  return { type: ADD_TOPIC, topic}
}

export const addDiscussionItem = (topic, name, title, details) => {
  return { type: ADD_DISCUSSION, topic, name, title, details}
}
