import React from 'react'

class AddItem extends React.Component {
  constructor () {
    super()
    this.state = {name: '', title: '', details: ''}
  }
  handleNameChange = (event) => {
    this.setState({name: event.target.value})
  }
  handleTitleChange = (event) => {
    this.setState({title: event.target.value})
  }
  handleDetailsChange = (event) => {
    this.setState({details: event.target.value})
  }
  render () {
    const {onAddClick} = this.props
    const { name, title, details } = this.state
    return (
      <div>
        <section className='linkform'>
          <label htmlFor='title'>Title</label>
          <input type='text' onChange={this.handleTitleChange} className='' name='title' id='title' />
          <label htmlFor='name'>Name</label>
          <input type='text' onChange={this.handleNameChange} className='' name='name' id='name' />
          <label htmlFor='details'>Details</label>
          <input type='text' onChange={this.handleDetailsChange} className='' name='details' id='details' />
          <button onClick={()=>onAddClick({name, title, details})}>Add Discussion Item</button>
        </section>
      </div>
    )
  }
}

export default AddItem
