import React from 'react'
import TopicItem from './topicitem'

// function copyToClipboard (element) {
//   var $temp = $('<input>')
//   $('body').append($temp)
//   $temp.val($(element).text()).select()
//   document.execCommand('copy')
//   $temp.remove()
// }

const BP = (props) => {
  const { match } = props
  return (
    <div>
      <div className='homeNavBar'>
        <h2>Stand Together</h2>
        <p id='p1'>http/localhost:5000/standup/{match.params.id}</p>
        <button className='button right' onclick="copyToClipboard('#p1')">Copy Link</button>
      </div>
      <div className='flexRow'>
        <TopicItem title='Resource' />
        <TopicItem title='Interestings' />
        <TopicItem title='Events' />
        <TopicItem title='Updates' />
      </div>
    </div>
  )
}

export default BP
