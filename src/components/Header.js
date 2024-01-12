import React from 'react'
import Button from './ui/Button'

const Header = ({text, subtext}) => {
  return (
    <div className='header'>
      <h1>{text}</h1>
      <Button text = 'Скачать отчёт' action = {() => alert('Отчётыч')} type='download'/>
      {subtext ? <span className='header_subtext'>{subtext}</span> : <></>}
    </div>
  )
}

export default Header
