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
          <label className="addLabel" htmlFor='title'>Title</label><br />
          <input type='text' onChange={this.handleTitleChange} className='addInput' name='title' id='title' /><br />
          <label className="addLabel" htmlFor='name'>Name</label><br />
          <input type='text' onChange={this.handleNameChange} className='addInput' name='name' id='name' /><br />
          <label className="addLabel" htmlFor='details'>Details</label><br />
          <input type='text' onChange={this.handleDetailsChange} className='addInput' name='details' id='details' /><br />
          <button onClick={()=>onAddClick({name, title, details})} className='checkButton'> &#10003; </button><br /> 
        </section>
      </div>
    )
  }
}

export default AddItem
