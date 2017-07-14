import React from 'react'
import styles from './splash.css'
import FontAwesome from 'react-fontawesome'

const Splash = () => (
  <div>
    <div className='homeNavBar'>
      <h2 className='title'>Stand Together<FontAwesome name='users' /></h2>
      <button className='right button'><a href='/new'><FontAwesome className='fa' name='plus' />Create a Stand Up</a></button>
    </div>
  </div>
)

export default Splash
