import React from 'react'
import TopicItem from './topicitem'
import { connect } from 'react-redux'
import { addDiscussionItem, fetchSuccess } from './actions/actions'
import io from 'socket.io-client'
import ClipboardButton from 'react-clipboard.js'
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router-dom'

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
    },
    dispatch: dispatch
  }
}

const fetchPosts = (id) => {
  return fetch(`/api/standup/${id}`).then((r) => {
    return r.json()
  })
}

class BP extends React.Component {
  componentDidMount () {
    console.log('here. ', process.env.REACT_APP_TEST)
    const { match, fetchResponse } = this.props
    fetchPosts(match.params.id).then((response) => {
      fetchResponse(response)
    })
    // initiate ws connection
    const url = process.env.REACT_APP_URL || `http://localhost:5000`
    this.socket = io(url)
    this.socket.emit('register', { standupId: match.params.id })
    this.socket.on('receive code', (payload) => {
      if (match.params.id === payload.standupId) {
        this.props.dispatch(payload.data)
      }
    })
  }
  render () {
    const { match, topics, items, onAddItem } = this.props
    const currentURL = window.location.origin + '/standup/' + match.params.id
    return (
      <div>
        <div className='homeNavBar'>
          <a href='/'><h2 className='title'>Stand Together<FontAwesome name='users' /></h2></a>
          <button className='button'>
            <Link to={'/prez/' + match.params.id}>
              <FontAwesome name='television' />
              Present
            </Link>
          </button>
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
