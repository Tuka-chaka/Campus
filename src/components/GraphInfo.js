import React from 'react'

const GraphInfo = ({suptext, count, sidetext, subtext, showArrow = false, isGreater}) => {
  return (
    <div className='graph_info'>
          <span className='suptext'>{suptext}</span>
          <div>
          <div className='statistics'>
            <span className='count'>{count}</span>
            {showArrow ? isGreater ?
            <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 5.40097e-05L8 4.00005L6.9375 5.06255L4.75 2.87505L4.75 9.00005L3.25 9.00005L3.25 2.87505L1.0625 5.06255L4.37114e-07 4.00005L4 5.40097e-05Z" fill="#747474"/>
            </svg> 
            :
            <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 8.99999L0 4.99999L1.0625 3.93749L3.25 6.12499L3.25 -8.58307e-06L4.75 -8.58307e-06L4.75 6.12499L6.9375 3.93749L8 4.99999L4 8.99999Z" fill="#747474"/>
</svg>
            : <></>
            }
            {sidetext ? <span className='sidetext'>{sidetext}</span> : <></>}
          </div>
          {subtext ? <span className='subtext'>{subtext}</span> : <></>}
          </div>
        </div>
  )
}

export default GraphInfo
