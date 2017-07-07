import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// import DiscussionItem from './discussionItem'
import Splash from './Splash'
import BP from './BoilerPlate'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Router>
          <div>
            <Route exact path='/' component={Splash} />
            <Route path='/standup/:id' component={BP} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
