import React from 'react'
import formatThousands from '../utils/ThousandsFormatter'
import sortMonths from '../utils/MonthsSorter'

const ProgramsPreview = ({data}) => {
  return (
    <div className='preview_container'>
    <div className='preview_card'>
      <div className='preview_segment first'>
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect y="0.000244141" width="42" height="42" rx="5" fill="white"/>
  <mask id="mask0_1514_1813"  maskUnits="userSpaceOnUse" x="9" y="9" width="24" height="25">
  <rect x="9" y="9.00024" width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_1514_1813)">
  <path d="M23 22.0002C22.1667 22.0002 21.4583 21.7086 20.875 21.1252C20.2917 20.5419 20 19.8336 20 19.0002C20 18.1669 20.2917 17.4586 20.875 16.8752C21.4583 16.2919 22.1667 16.0002 23 16.0002C23.8333 16.0002 24.5417 16.2919 25.125 16.8752C25.7083 17.4586 26 18.1669 26 19.0002C26 19.8336 25.7083 20.5419 25.125 21.1252C24.5417 21.7086 23.8333 22.0002 23 22.0002ZM16 25.0002C15.45 25.0002 14.9792 24.8044 14.5875 24.4127C14.1958 24.0211 14 23.5502 14 23.0002V15.0002C14 14.4502 14.1958 13.9794 14.5875 13.5877C14.9792 13.1961 15.45 13.0002 16 13.0002H30C30.55 13.0002 31.0208 13.1961 31.4125 13.5877C31.8042 13.9794 32 14.4502 32 15.0002V23.0002C32 23.5502 31.8042 24.0211 31.4125 24.4127C31.0208 24.8044 30.55 25.0002 30 25.0002H16ZM18 23.0002H28C28 22.4502 28.1958 21.9794 28.5875 21.5877C28.9792 21.1961 29.45 21.0002 30 21.0002V17.0002C29.45 17.0002 28.9792 16.8044 28.5875 16.4127C28.1958 16.0211 28 15.5502 28 15.0002H18C18 15.5502 17.8042 16.0211 17.4125 16.4127C17.0208 16.8044 16.55 17.0002 16 17.0002V21.0002C16.55 21.0002 17.0208 21.1961 17.4125 21.5877C17.8042 21.9794 18 22.4502 18 23.0002ZM29 29.0002H12C11.45 29.0002 10.9792 28.8044 10.5875 28.4127C10.1958 28.0211 10 27.5502 10 27.0002V16.0002H12V27.0002H29V29.0002Z" fill="#F52D30"/>
  </g>
  </svg>
        <span className='preview_header'>Стипендиальная программа фонда</span>
      </div>
      <div className='preview_segment'>
        <span className='preview_statistics'><span className='highlighted'>{formatThousands(sortMonths(data.fundStipend).slice(-1)[0].amount)}</span> студентов получают данную стипендию</span>
      </div>
    </div>
    <div className='preview_card'>
      <div className='preview_segment first'>
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.000244141" width="42" height="42" rx="5" fill="white"/>
<mask id="mask0_1514_1821" maskUnits="userSpaceOnUse" x="9" y="9" width="24" height="25">
<rect x="9" y="9.00024" width="24" height="24" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_1514_1821)">
<path d="M13 31.0002V20.0002H11V14.0002H16.2C16.1167 13.8502 16.0625 13.6919 16.0375 13.5252C16.0125 13.3586 16 13.1836 16 13.0002C16 12.1669 16.2917 11.4586 16.875 10.8752C17.4583 10.2919 18.1667 10.0002 19 10.0002C19.3833 10.0002 19.7417 10.0711 20.075 10.2127C20.4083 10.3544 20.7167 10.5502 21 10.8002C21.2833 10.5336 21.5917 10.3336 21.925 10.2002C22.2583 10.0669 22.6167 10.0002 23 10.0002C23.8333 10.0002 24.5417 10.2919 25.125 10.8752C25.7083 11.4586 26 12.1669 26 13.0002C26 13.1836 25.9833 13.3544 25.95 13.5127C25.9167 13.6711 25.8667 13.8336 25.8 14.0002H31V20.0002H29V31.0002H13ZM23 12.0002C22.7167 12.0002 22.4792 12.0961 22.2875 12.2877C22.0958 12.4794 22 12.7169 22 13.0002C22 13.2836 22.0958 13.5211 22.2875 13.7127C22.4792 13.9044 22.7167 14.0002 23 14.0002C23.2833 14.0002 23.5208 13.9044 23.7125 13.7127C23.9042 13.5211 24 13.2836 24 13.0002C24 12.7169 23.9042 12.4794 23.7125 12.2877C23.5208 12.0961 23.2833 12.0002 23 12.0002ZM18 13.0002C18 13.2836 18.0958 13.5211 18.2875 13.7127C18.4792 13.9044 18.7167 14.0002 19 14.0002C19.2833 14.0002 19.5208 13.9044 19.7125 13.7127C19.9042 13.5211 20 13.2836 20 13.0002C20 12.7169 19.9042 12.4794 19.7125 12.2877C19.5208 12.0961 19.2833 12.0002 19 12.0002C18.7167 12.0002 18.4792 12.0961 18.2875 12.2877C18.0958 12.4794 18 12.7169 18 13.0002ZM13 16.0002V18.0002H20V16.0002H13ZM20 29.0002V20.0002H15V29.0002H20ZM22 29.0002H27V20.0002H22V29.0002ZM29 18.0002V16.0002H22V18.0002H29Z" fill="#F52D30"/>
</g>
</svg>

        <span className='preview_header'>Бонусная программа</span>
      </div>
      <div className='preview_segment'>
        <span className='preview_statistics'><span className='highlighted'>{formatThousands(sortMonths(data.fundBonus).slice(-1)[0].amount)}</span> студентов учавствуют в программе лояльности</span>
      </div>
    </div>
    <div className='preview_card'>
      <div className='preview_segment first'>
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.000244141" width="42" height="42" rx="5" fill="white"/>
<mask id="mask0_1514_1829" maskUnits="userSpaceOnUse" x="9" y="9" width="24" height="25">
<rect x="9" y="9.00024" width="24" height="24" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_1514_1829)">
<path d="M16 30.0002V27.0002H14V25.0002H16V23.0002H14V21.0002H16V12.0002H22.5C24.0333 12.0002 25.3333 12.5336 26.4 13.6002C27.4667 14.6669 28 15.9669 28 17.5002C28 19.0336 27.4667 20.3336 26.4 21.4002C25.3333 22.4669 24.0333 23.0002 22.5 23.0002H18V25.0002H22V27.0002H18V30.0002H16ZM18 21.0002H22.5C23.4667 21.0002 24.2917 20.6586 24.975 19.9752C25.6583 19.2919 26 18.4669 26 17.5002C26 16.5336 25.6583 15.7086 24.975 15.0252C24.2917 14.3419 23.4667 14.0002 22.5 14.0002H18V21.0002Z" fill="#F52D30"/>
</g>
</svg>


        <span className='preview_header'>Льготное кредитование</span>
      </div>
      <div className='preview_segment'>
        <span className='preview_statistics'><span className='highlighted'>{formatThousands(sortMonths(data.fundPrivilege).slice(-1)[0].amount)}</span> студентов оформили льготное кредитование</span>
      </div>
    </div>
    </div>
  )
}

export default ProgramsPreview
