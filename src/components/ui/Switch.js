import React from 'react'

const Switch = ({action}) => {
  return (
    <div className='switch' onClick={action}>
      <span className='switch_option'>Отличники</span>
      <span className='switch_option'>Заявления</span>
    </div>
  )
}

export default Switch
