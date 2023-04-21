import React from 'react'
import header from './header.css'

import Cmt from './Cmt'
import HeaderSocials from './HeaderSocials'
import Getimage from './Getimage'
export default function Headerr() {
  return (
   <header id='#'>
    <div className="container header_container">
           <h4 id="mainn">Hello I'm</h4>
           <h1>Mansi Gaikwad</h1>
           <h5 className="text-light">Frontend Developer</h5>
           
  <HeaderSocials />
  <Getimage />
  <Cmt />
  </div>
 
  <a href='#contactt'  className='scroll_down'>Scroll Down</a>
   </header>
  )
}
