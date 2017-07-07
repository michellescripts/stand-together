import React from 'react'
import splashimg from './standpeople.jpg'

const BP = (props) => {
  const { match } = props
  return (
    <div>
      <h2>Stand Together</h2>
      <h2>{match.params.id}</h2>
      <p>THIS IS THE BP STAND UP PAGE</p>
    </div>
  )
}

export default BP
