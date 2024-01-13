import React from 'react'

const Switch = ({action, showApplications}) => {
  return (
    <div className='switch' onClick={action}>
      <span className='switch_option' style={showApplications ? {} : {backgroundColor : '#FFFFFF'}}>Отличники</span>
      <span className='switch_option' style={showApplications ? {backgroundColor : '#FFFFFF'} : {}}>Заявления</span>
    </div>
  )
}

export default Switch
