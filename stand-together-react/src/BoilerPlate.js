import React from 'react'
import TopicItem from './topicitem'
import { connect } from 'react-redux'
import { addDiscussionItem, fetchSuccess } from './actions/actions'
import io from 'socket.io-client'
import ClipboardButton from 'react-clipboard.js'
import FontAwesome from 'react-fontawesome'

const mapStateToProps = (state) => {
  return {
    topics: state.topics,
    items: state.itemByTopic
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddItem: (topic, name, title, details, id, socket) => {
      const action = addDiscussionItem(topic, name, title, details)
      fetch(`/api/standup/${id}`, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(action)
      })
      socket.emit('addEvent', {data: action, standupId: id})
      dispatch(action)
    },
    fetchResponse: (response) => {
      dispatch(fetchSuccess(response))
    }
  }
}

const fetchPosts = (id) => {
  return fetch(`/api/standup/${id}`).then((r) => {
    return r.json()
  })
}

const updateCodeFromSockets = (payload) => {
    // this.setState({code: payload.newCode})
    // ADD TO MAP TO STATE PROPS
  console.log('Hit update current state with: ', payload.data)
}

class BP extends React.Component {
  componentDidMount () {
    console.log('props', this.props)
    const { match, fetchResponse } = this.props
    fetchPosts(match.params.id).then((response) => {
      fetchResponse(response)
    })
    // initiate ws connection
    this.socket = io(`http://localhost:5000`)
    this.socket.emit('register', { standupId: match.params.id })
    this.socket.on('receive code', (payload) => {
      updateCodeFromSockets(payload)
    })
  }
  render () {
    const { match, topics, items, onAddItem } = this.props
    const currentURL = 'http://localhost:3000/standup/' + match.params.id
    return (
      <div>
        <div className='homeNavBar'>
          <h2 className='title'>Stand Together<FontAwesome name='users' /></h2>
          <ClipboardButton className='button right' data-clipboard-text={currentURL}>
            <FontAwesome name='clipboard' /> Copy Link
          </ClipboardButton>
        </div>
        <div className='flexRow'>
          {/* <div className='container'> */}
          {topics.map((topic, i) => {
            const currentItems = items[topic]
            return <TopicItem title={topic} key={i}
              items={currentItems}
              addAnItem={(topic, name, title, details) => onAddItem(topic, name, title, details, match.params.id, this.socket)} />
          })}
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BP)
