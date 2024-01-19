import React from 'react'
import formatThousands from '../../utils/ThousandsFormatter'

const PagesBarChart = ({data, type}) => {
  return (
    <div className='pages_chart'>
      {data ? data.map((page) => 
      <div className='bar_container' key={page.name}>
        <div className='bar_header'>
          <span className='page_name'>{page.name}</span>
          <span className='page_time'>{type === 'pages' ? `${Math.floor(page.time / 60)} ч. ${page.time % 60} мин.` : formatThousands(page.users)}</span>
        </div>
        <div className='bar'>
          <div className='bar_filler' style={{width: `${page.percentage}%`}}></div>
          <hr className='vertical'></hr>
        </div>
        <span className='percentage' style={{width: `${page.percentage}%`}}>{`${page.percentage}%`}</span>
      </div>) : <></>}
    </div>
  )
}

export default PagesBarChart
