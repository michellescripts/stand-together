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
    const {title, items, addAnItem} = this.props
    const {addMode} = this.state
    let buttonClasses = 'right'
    if (addMode) {buttonClasses += ' addMode'}
    return (
      <div className='TopicBox'>
        <div className='parentFlex'>
         {/* <div className='gallery'> */}
          <h1 className='itemHeader'>{title}</h1>
          <h1 className={buttonClasses} onClick={this.changeEditMode}>+</h1>
        </div>
        {addMode && <AddItem onAddClick={(obj)=>addAnItem(title, obj.name, obj.title, obj.details)} />}
        {items.map((item, i) => {
          const {name, title, details} = item
          return (
            <div key={i}>
              <hr/>
              <div className='discussionTitle'>What:</div>
              <div className='discussionData'>{title}</div>
              <div className='discussionTitle'>Why:</div>
              <div className='discussionData'>{details}</div>
              <div className='discussionTitle'>Who:</div>
              <div className='discussionData'>{name}</div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default TopicItem
