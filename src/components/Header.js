import React from 'react'
import Button from './ui/Button'
import downloadData from '../utils/DataDownloader'

const Header = ({text, subtext, data}) => {
  return (
    <div className='header'>
      <h1>{text}</h1>
      <Button text = 'Скачать отчёт' action = {() => downloadData(data)} type='download'/>
      {subtext ? <span className='header_subtext'>{subtext}</span> : <></>}
    </div>
  )
}

export default Header
