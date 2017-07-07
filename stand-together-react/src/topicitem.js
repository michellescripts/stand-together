import React from 'react'
import AddItem from './additem'
import styles from './splash.css'

// HEY HERE
// const data = {
//   discussionItems: [
//     { title: 'Develop Denver Happy Hour', name: 'Michelle', details: 'Tonight, 6pm at a bar.'},
//     { title: 'Develop Denver Happy Hour', name: 'Michelle', details: 'Tonight, 6pm at a bar.'}
//   ]
// }

const TopicItem = (props) => {
  const {title} = props
  return (
    <div className='TopicBox'>
      <div className='parentFlex'>
        <h1 className='itemHeader'>{title}</h1>
        <h1 className='right addStuff'>+</h1>
      </div>
      {/* make hidden */}
      <AddItem />
      <hr />
      <div>insert discussion items here</div>
      <ul>
        <li>Item one</li>
        <li>Item Two</li>
        <li>Item Three</li>
      </ul>
    </div>
  )
}

export default TopicItem
