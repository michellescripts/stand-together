import React from 'react'
import FontAwesome from 'react-fontawesome'

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
        // add route to bp for team
      } else {
        this.setState({errorMode: true})
      }
    })
    
  }
  render () {
    let styleClasses = 'right button'
    if (this.state.errorMode) {styleClasses += ' errorMode'}
    if (this.state.showButton === true) {
      return (
        <button className='right button' onClick={this.changeElement}><FontAwesome className='fa' name='plus' />Create a Team</button>
      )
    } else {
      return (
        <div>
          <input className={styleClasses} onChange={this.handleTeam} ></input>
          <button className='right button' onClick={this.addTeam}><FontAwesome className='fa' name='plus' /></button>
          <button className='right button' onClick={this.cancel}><FontAwesome className='fa' name='plus' /></button>
      </div>
      )
    }
  }
}

const Splash = () => (
  <div>
    <div className='homeNavBar'>
      <h2 className='title'>Stand Together<FontAwesome name='users' /></h2>
      <button className='right button'><a href='/new'><FontAwesome className='fa' name='plus' />Create a Stand Up</a></button>
      <NewTeam />
    </div>
    <div className='splashImage' />
  </div>
)

export default Splash
