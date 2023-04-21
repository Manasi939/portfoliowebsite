import React from 'react'
import navv from './navv.css'
import {HiHome} from 'react-icons/hi'
import {BiUser} from 'react-icons/bi'
import {BsBookHalf} from 'react-icons/bs'
import {TiContacts} from 'react-icons/ti'
import {MdWork} from 'react-icons/md'
import {useState} from 'react';
export default function Nav() {
  const [activenow,setactive]=useState('#')
  return (
  <nav className='navb'>
 <a href='#' onClick={()=>{setactive("#")}}  className={ activenow==='#'?'active':' '}><HiHome/></a>
 <a href='#user' onClick={()=>{setactive("#user")}}  className={ activenow==='#user'?'active':' '}><BiUser/></a>
 <a href='#experi' onClick={()=>{setactive("#experi")}}  className={ activenow==='#experi'?'active':' '}><BsBookHalf/></a>
 {/* <a href='#service' onClick={()=>{setactive("#service")}}  className={ activenow==='#service'?'active':' '}><MdWork/></a> */}
 <a href='#contact' onClick={()=>{setactive("#contact")}}  className={ activenow==='#contact'?'active':' '}><TiContacts/></a>
 
  </nav>


  )
}
