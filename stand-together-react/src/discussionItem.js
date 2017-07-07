import React from 'react'

const DiscussionItem = (props) => {
  const {title, name, description} = props
  return (
    <div className='App'>
      <h2 className='App-intro'>{title}</h2>
      <p className='App-intro'>{name}</p>
      <p className='App-intro'>{description}</p>
    </div>
  )
}

export default DiscussionItem
