import React from 'react'
import TopicItem from './topicitem'
import { connect } from 'react-redux'
import { addDiscussionItem } from './actions/actions'

// function copyToClipboard (element)

const mapStateToProps = (state) => {
  return {
    topics: state.topics,
    items: state.itemByTopic
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddItem: (topic, name, title, details) => {
      dispatch(addDiscussionItem(topic, name, title, details))
    }
  }
}

const BP = (props) => {
  const { match, topics, items, onAddItem } = props
  return (
    <div>
      <div className='homeNavBar'>
        <h2>Stand Together</h2>
        <p id='p1'>http/localhost:5000/standup/{match.params.id}</p>
        <button className='button right'>Copy Link</button>
      </div>
      <div className='flexRow'>
        {topics.map((topic, i) => {
          const currentItems = items[topic]
          return <TopicItem title={topic} key={i} items={currentItems} addAnItem={onAddItem} />
        })}
      </div>
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BP)
