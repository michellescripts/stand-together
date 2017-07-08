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

class TopicItem extends React.Component {
  constructor () {
    super()
    this.state = {addMode: false}
  }
  changeEditMode = () => {
      this.setState(prevState => ({
        addMode: !prevState.addMode
      }))
  }
  render () {
    console.log('state', this.state.addMode);
    const {title} = this.props
    const {addMode} = this.state
    let buttonClasses = 'right'
    if (addMode) {buttonClasses += ' addMode'}
    return (
      <div className='TopicBox'>
        <div className='parentFlex'>
          <h1 className='itemHeader'>{title}</h1>
          <h1 className={buttonClasses} onClick={this.changeEditMode}>+</h1>
        </div>
        {addMode && <AddItem />}
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
}

export default TopicItem
