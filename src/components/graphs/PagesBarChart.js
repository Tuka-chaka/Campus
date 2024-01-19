import React from 'react'

const PagesBarChart = ({data}) => {
  return (
    <div className='pages_chart'>
      {data ? data.map((page) => 
      <div className='bar_container'>
        <div className='bar_header'>
          <span className='page_name'>{page.name}</span>
          <span className='page_time'>{`${page.time} мин.`}</span>
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
