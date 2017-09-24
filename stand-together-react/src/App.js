import React, { Component } from 'react'
import Splash from './Splash'
import BP from './BoilerPlate'
import Prez from './Prez'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './splash.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Router>
          <div>
            <Route exact path='/' component={Splash} />
            <Route path='/standup/:id' component={BP} />
            <Route path='/prez/:id' component={Prez} />
            <Route path='/team/:name/:date' component={BP} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
