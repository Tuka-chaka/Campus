import React from 'react'

const Dropdown = ({text}) => {
  return (
    <div className='dropdown'>
      <span className='dropdown_content'>{text}</span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_1542_1467" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
<rect width="24" height="24" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_1542_1467)">
<path d="M12 15.375L6 9.37501L7.4 7.97501L12 12.575L16.6 7.97501L18 9.37501L12 15.375Z" fill="#747474"/>
</g>
</svg>
    </div>
  )
}

export default Dropdown
