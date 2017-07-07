import React from 'react'
import splashimg from './standpeople.jpg'

const Splash = () => (
  <div>
    <h2>Stand Together</h2>
    <p>Get Started Now</p>
    <button><a href='/new'>Create a Stand Up</a></button>
    <hr />
    <h2>SPLASH PAGE STUFFFF</h2>
    <img src={splashimg} alt='standing people' style={{width: '50%'}} />
  </div>
)

export default Splash
