import React from 'react'
import AddItem from './additem'
import styles from './splash.css'
import FontAwesome from 'react-fontawesome'

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
  addClicked = (title, obj) => {
    this.changeEditMode()
    this.props.addAnItem(title, obj.name, obj.title, obj.details)
  }
  render () {
    const {title, items} = this.props
    const {addMode} = this.state
    let buttonClasses = 'right'
    if (addMode) {buttonClasses += ' addMode'}
    return (
      <div className='TopicBox'>
        <div className='parentFlex'>
         {/* <div className='gallery'> */}
          <h1 className='itemHeader'>{title}</h1>
          <h1 className={buttonClasses} onClick={this.changeEditMode}>
            <FontAwesome name='plus-circle' />
          </h1>
        </div>
        {addMode && <AddItem onAddClick={(obj)=>this.addClicked(title, obj)} />}
        {items.map((item, i) => {
          const {name, title, details} = item
          return (
            <div key={i}>
              <hr/>
              <div className='discussionTitle'>{title}</div>
              <div className='discussionData'>{details}</div>
              <div className='discussionSubmit'>submitted by {name}</div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default TopicItem
