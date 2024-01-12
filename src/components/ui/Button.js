import React from 'react'

const Button = ({text, action, icon, type='navigate'}) => {
  return (
    <button className='button' onClick={action}>
        <span>{text}</span>
        {type === 'navigate' ? 
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_1514_718" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
        <rect y="0.000183105" width="24" height="24" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_1514_718)">
        <path d="M12.6 12.0002L8 7.40018L9.4 6.00018L15.4 12.0002L9.4 18.0002L8 16.6002L12.6 12.0002Z" fill="white"/>
        </g>
        </svg>        
        :
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_1514_61" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
<rect width="24" height="24" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_1514_61)">
<path d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18V15H6V18H18V15H20V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H6Z" fill="white"/>
</g>
</svg>

        }
        {/* <span>{icon}</span> */}
    </button>
  )
}

export default Button
