import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// import DiscussionItem from './discussionItem'
import Splash from './Splash'

const Standup = (props) => {
  const { match } = props
  return (
    <div>
      <h2>Stand Together</h2>
      <h2>{match.params.id}</h2>
      <p>THIS IS THE STAND UP PAGE</p>
    </div>
  )
}

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Router>
          <div>
            <Route exact path='/' component={Splash} />
            <Route path='/standup/:id' component={Standup} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
