import React from 'react'
// import { Field, reduxForm } from 'redux-form'

class AddItem extends React.Component {
  render () {
    const {title} = this.props
    return (
      <div>
        <section className='linkform'>
          <label htmlFor='title'>Title</label>
          <input type='text' className='' name='title' id='title' />
          <label htmlFor='name'>Name</label>
          <input type='text' className='' name='name' id='name' />
          <label htmlFor='details'>Details</label>
          <input type='text' className='' name='details' id='details' />
          <button>Add Discussion Item</button>
        </section>
      </div>
    )
  }
}

export default AddItem
