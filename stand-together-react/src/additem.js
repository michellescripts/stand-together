import React from 'react'

// HEY HERE

const AddItem = (props) => {
  const {title} = props
  return (
    <div>
      <section class='linkform'>
        <p>from additem.js</p>
        <p>your link is {title}</p>
        <label for='title'>Title</label>
        <input type='text' class='' name='title' id='title' />
        <label for='name'>Name</label>
        <input type='text' class='' name='name' id='name' />
        <label for='details'>Details</label>
        <input type='text' class='' name='details' id='details' />
        <button>Add Discussion Item</button>
      </section>
    </div>
  )
}

export default AddItem
