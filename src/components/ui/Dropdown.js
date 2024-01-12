import React from 'react'

const Dropdown = ({text}) => {
  return (
    <div className='dropdown'>
      <span className='dropdown_content'>{text}</span>
      <span className='dropdown_icon'>icon</span>
    </div>
  )
}

export default Dropdown
