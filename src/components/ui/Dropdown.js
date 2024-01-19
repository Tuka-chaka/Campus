import React, { useState } from 'react'

const Dropdown = ({options, value, action, width}) => {

  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => setOpen(!isOpen);

  const handleSelect = (option) => {
    action(option)
    handleOpen()
  }

  return (
    <div className='dropdown_root' style={{width: width}}>
    <div className='dropdown' onClick={() => handleOpen()}>
      <span className='dropdown_content'>{value}</span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_1542_1467" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
<rect width="24" height="24" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_1542_1467)">
<path d="M12 15.375L6 9.37501L7.4 7.97501L12 12.575L16.6 7.97501L18 9.37501L12 15.375Z" fill="#747474"/>
</g>
</svg>
    </div>
    {
		isOpen && (
      <>
      <div className='backdrop' onClick={() => setOpen(false)}/>
		  <div className='dropdown_menu'>
			{options.map(option => option === value ? <></> : <div className='dropdown_option' key={option} onClick={() => handleSelect(option)}>{option}</div>)}
		  </div>
      </>
		)
	  }
    </div>
  )
}

export default Dropdown
