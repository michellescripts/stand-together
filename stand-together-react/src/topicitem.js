import React from 'react'
import AddItem from './additem'
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
  removeItem = (ind, event) => {
    this.props.removeAnItem(ind)
  }
  addClicked = (title, obj) => {
    this.changeEditMode()
    this.props.addAnItem(title, obj.name, obj.title, obj.details)
  }
  render () {
    const {title, items} = this.props
    const {addMode} = this.state
    let buttonClasses = 'right fabutton'
    let divClass = ''
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
        {items.map((item, ind) => {
          const {name, title, details} = item
          return (
            <div key={ind} className={divClass}>
              <hr/>
              <div className='discussionTitle'>{title}:</div>
              <div className='discussionData'>{details}</div>
              <div className='discussionSubmit'>submitted by {name}</div>
              <h1 className='fabutton'>
                <FontAwesome name='minus-circle remove' key={ind} onClick={this.removeItem.bind(this, ind)} />
              </h1>
            </div>
          )
        })}
      </div>
    )
  }
}

export default TopicItem
