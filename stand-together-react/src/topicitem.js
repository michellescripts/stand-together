import React from 'react'
import AddItem from './additem'
import styles from './splash.css'

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
      </div>
    )
  }
}

export default TopicItem
