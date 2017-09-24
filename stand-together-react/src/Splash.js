import React from 'react'
import FontAwesome from 'react-fontawesome'
import { withRouter } from 'react-router-dom'

class NewTeam extends React.Component {
  constructor () {
    super()
    this.state = {showButton: true, teamName: '', errorMode: false}
  }
  changeElement = () => {
    this.setState({showButton: false})
  }
  cancel = () => {
    this.setState({showButton: true})
  }
  handleTeam = (event) => {
    this.setState({teamName: event.target.value, errorMode: false })
  }
  addTeam = () => {
    fetch(`/api/teams/${this.state.teamName}`, {
      method: 'POST'
    }).then(response => {
      if (response.ok) {
        const todaysDate = new Date().toISOString().slice(0, 10).replace(/-/g, '')
        const urlPath = `/team/${this.state.teamName}/${todaysDate}`
        this.props.history.push(urlPath)   
      } else {
        this.setState({errorMode: true})
      }
    })
  }
  render () {
    let styleClasses = 'right button'
    if (this.state.errorMode) {styleClasses += ' errorMode'}
    return (
      <div>
        {this.state.showButton 
          ?   <button className='right button' onClick={this.changeElement}><FontAwesome className='fa' name='plus' />Create a Team</button> 
          :   <div>
                <input className={styleClasses} onChange={this.handleTeam} ></input>
                <button className='right button' onClick={this.addTeam}><FontAwesome className='fa' name='plus' /></button>
                <button className='right button' onClick={this.cancel}><FontAwesome className='fa' name='plus' /></button>
              </div>
        }
      </div>
    )
  }
}

const NewTeamWithRouter = withRouter(NewTeam)

const Splash = () => (
  <div>
    <div className='homeNavBar'>
      <h2 className='title'>Stand Together<FontAwesome name='users' /></h2>
      <button className='right button'><a href='/new'><FontAwesome className='fa' name='plus' />Create a Stand Up</a></button>
      <NewTeamWithRouter/>
    </div>
    <div className='splashImage' />
  </div>
)

export default Splash
