import React from 'react'
import { useNavigate } from "react-router-dom";

const Navbar = ({page}) => {

    const navigate = useNavigate();

    function handleClick(page) {
      navigate(page);
    }

  return (
    <div className='navbar'>
      <div className='navbar_button' onClick={() => handleClick('/')}>
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_1514_1878" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
<rect x="0.974976" y="0.000244141" width="24" height="24" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_1514_1878)">
<path d="M5.97498 21.0002C5.42269 21.0002 4.97498 20.5525 4.97498 20.0002V9.50024C4.97498 9.18549 5.12317 8.8891 5.37498 8.70024L12.375 3.45024C12.7305 3.18358 13.2194 3.18358 13.575 3.45024L20.575 8.70024C20.8268 8.8891 20.975 9.18549 20.975 9.50024V20.0002C20.975 20.5525 20.5273 21.0002 19.975 21.0002H15.975C15.4227 21.0002 14.975 20.5525 14.975 20.0002V15.0002C14.975 14.448 14.5273 14.0002 13.975 14.0002H11.975C11.4227 14.0002 10.975 14.448 10.975 15.0002V20.0002C10.975 20.5525 10.5273 21.0002 9.97498 21.0002H5.97498Z"  fill={page === 'dashboard' ? "#F52D30" : "#747474"}/>
</g>
</svg>

      <span className={page === 'dashboard' ? 'navbar_text active' : 'navbar_text'}>Главная</span>
      </div>
      <div className='navbar_button' onClick={() => handleClick('/schools')}>
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1514_1885)">
<mask id="mask0_1514_1885"  maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
<rect x="0.925049" y="0.000244141" width="24" height="24" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_1514_1885)">
<path d="M22.925 17.0002C22.3728 17.0002 21.925 16.5525 21.925 16.0002V11.7833C21.925 11.0246 21.1132 10.5422 20.4469 10.905L13.4037 14.7397C13.1053 14.9021 12.7449 14.902 12.4466 14.7393L3.53452 9.87814C2.83966 9.49912 2.83966 8.50137 3.53452 8.12235L12.4462 3.26144C12.7447 3.09863 13.1054 3.09863 13.4039 3.26144L23.4039 8.71598C23.7252 8.89121 23.925 9.22793 23.925 9.59388V16.0002C23.925 16.5525 23.4773 17.0002 22.925 17.0002ZM13.4021 20.7413C13.1046 20.9028 12.7455 20.9028 12.448 20.7413L6.44796 17.4841C6.12571 17.3092 5.92505 16.9719 5.92505 16.6053V13.8809C5.92505 13.1228 6.73582 12.6404 7.40214 13.0021L12.448 15.7413C12.7455 15.9028 13.1046 15.9028 13.4021 15.7413L18.448 13.0021C19.1143 12.6404 19.925 13.1228 19.925 13.8809V16.6053C19.925 16.9719 19.7244 17.3092 19.4021 17.4841L13.4021 20.7413Z" fill={page === 'schools' ? "#F52D30" : "#747474"}/>
</g>
</g>
<defs>
<clipPath id="clip0_1514_1885">
<rect width="24" height="24" fill="white" transform="translate(0.625 0.000244141)"/>
</clipPath>
</defs>
</svg>


      <span className={page === 'schools' ? 'navbar_text active' : 'navbar_text'}>ВУЗы</span>
      </div>
      <div className='navbar_button' onClick={() => handleClick('/visits')}>
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_1514_1893" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
<rect x="0.875" y="0.000244141" width="24" height="24" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_1514_1893)">
<path d="M4.06598 17.2658C3.75995 17.7575 3.10131 17.887 2.63196 17.5476C2.20589 17.2395 2.09142 16.654 2.37008 16.2081L6.15358 10.1545C6.51129 9.58217 7.3216 9.52128 7.76084 10.0337L8.98269 11.4592C9.42382 11.9739 10.2383 11.9098 10.5936 11.3325L13.0583 7.32738C13.4402 6.70684 14.3362 6.68992 14.7412 7.2956L15.9899 9.16291C16.2575 9.56311 15.9827 10.1095 15.5125 10.2127C15.279 10.264 15.0475 10.3289 14.818 10.4073C14.6309 10.4713 14.4215 10.4075 14.3119 10.243C14.1428 9.98943 13.7678 9.99624 13.6081 10.2558L10.8682 14.7082C10.513 15.2853 9.6989 15.3496 9.25763 14.8354L8.01269 13.3847C7.57279 12.872 6.7617 12.934 6.4048 13.5075L4.06598 17.2658ZM23.1611 22.2892C22.7705 22.6797 22.1334 22.6837 21.7429 22.2931L19.9182 20.4685C19.5751 20.1254 19.0387 20.0924 18.588 20.2723C18.4666 20.3208 18.3414 20.3634 18.2125 20.4002C17.8042 20.5169 17.3833 20.5752 16.95 20.5752C15.7 20.5752 14.6375 20.1377 13.7625 19.2627C12.8875 18.3877 12.45 17.3252 12.45 16.0752C12.45 14.8252 12.8875 13.7627 13.7625 12.8877C14.6375 12.0127 15.7 11.5752 16.95 11.5752C18.2 11.5752 19.2625 12.0127 20.1375 12.8877C21.0125 13.7627 21.45 14.8252 21.45 16.0752C21.45 16.5086 21.3917 16.9294 21.275 17.3377C21.2349 17.4782 21.1878 17.6152 21.1339 17.7487C20.9549 18.1921 20.9949 18.7182 21.3344 19.055L23.1622 20.8682C23.5554 21.2582 23.5527 21.8975 23.1611 22.2892ZM16.95 18.5752C17.65 18.5752 18.2417 18.3336 18.725 17.8502C19.2083 17.3669 19.45 16.7752 19.45 16.0752C19.45 15.3752 19.2083 14.7836 18.725 14.3002C18.2417 13.8169 17.65 13.5752 16.95 13.5752C16.25 13.5752 15.6583 13.8169 15.175 14.3002C14.6917 14.7836 14.45 15.3752 14.45 16.0752C14.45 16.7752 14.6917 17.3669 15.175 17.8502C15.6583 18.3336 16.25 18.5752 16.95 18.5752ZM19.6282 9.86174C19.3665 10.2737 18.8473 10.4286 18.3767 10.2993C18.3141 10.2821 18.251 10.2657 18.1875 10.2502C17.7221 10.1367 17.4435 9.59683 17.6996 9.19205L21.6812 2.89924C21.9895 2.412 22.6448 2.28575 23.1121 2.62359C23.5407 2.93349 23.6538 3.52353 23.3702 3.96997L19.6282 9.86174Z" fill={page === 'visits' ? "#F52D30" : "#747474"}/>
</g>
</svg>


      <span className={page === 'visits' ? 'navbar_text active' : 'navbar_text'}>Посещ.</span>
      </div>
      <div className='navbar_button' onClick={() => handleClick('/programs')}>
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_1514_1900" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
<rect x="0.125" y="0.000244141" width="24" height="24" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_1514_1900)">
<path d="M10.3679 17.2931C10.7584 17.6837 11.3916 17.6837 11.7821 17.2931L16.0179 13.0574C16.4084 12.6668 16.4084 12.0337 16.0179 11.6431L15.9821 11.6074C15.5916 11.2168 14.9584 11.2168 14.5679 11.6074L11.7571 14.4181C11.3666 14.8087 10.7334 14.8087 10.3429 14.4181L9.65711 13.7324C9.26658 13.3418 8.62802 13.3472 8.2375 13.7377C7.84698 14.1283 7.84158 14.7668 8.23211 15.1574L10.3679 17.2931ZM6.125 22.0002C5.575 22.0002 5.10417 21.8044 4.7125 21.4127C4.32083 21.0211 4.125 20.5502 4.125 20.0002V4.00024C4.125 3.45024 4.32083 2.97941 4.7125 2.58774C5.10417 2.19608 5.575 2.00024 6.125 2.00024H13.7108C13.976 2.00024 14.2304 2.1056 14.4179 2.29314L19.8321 7.70735C20.0196 7.89489 20.125 8.14924 20.125 8.41446V20.0002C20.125 20.5502 19.9292 21.0211 19.5375 21.4127C19.1458 21.8044 18.675 22.0002 18.125 22.0002H6.125ZM13.125 8.00024C13.125 8.55253 13.5727 9.00024 14.125 9.00024H15.7108C16.6017 9.00024 17.0479 7.9231 16.4179 7.29314L14.8321 5.70735C14.2021 5.07738 13.125 5.52355 13.125 6.41446V8.00024Z" fill={page === 'programs' ? "#F52D30" : "#747474"}/>
</g>
</svg>



      <span className={page === 'prigrams' ? 'navbar_text active' : 'navbar_text'}>Програм.</span>
      </div>
    </div>
  )
}

export default Navbar