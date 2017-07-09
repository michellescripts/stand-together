import React from 'react'
import TopicItem from './topicitem'
import { connect } from 'react-redux'

// function copyToClipboard (element)

const mapStateToProps = (state) => {
  return {
    topics: state.topics
  }
}

const BP = (props) => {
  const { match, topics } = props
  return (
    <div>
      <div className='homeNavBar'>
        <h2>Stand Together</h2>
        <p id='p1'>http/localhost:5000/standup/{match.params.id}</p>
        <button className='button right'>Copy Link</button>
      </div>
      <div className='flexRow'>
        {topics.map((topic) => {
          return <TopicItem title={topic} key={topic} />
        })}
      </div>
    </div>
  )
}

export default connect(
  mapStateToProps,
  null
)(BP)
