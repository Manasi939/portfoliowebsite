import React from 'react'
import experi from './experi.css'
import {AiFillDatabase} from 'react-icons/ai'
import {BsFillBootstrapFill} from 'react-icons/bs'
import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {DiReact} from 'react-icons/di'
export default function Experi() {
  return (
    <section id='experi'>
      <div>
        <h1 id='exh'>Skillsets</h1>
        <article className='about_cards2'>
      <article className='about_card2'>
          <BsFillBootstrapFill className="edu_icon"/>
                     <h5>Bootstrap</h5>
           <small>Made entry level projects using bootstrap</small>
        </article>
        <article className='about_card2'>
          <AiFillHtml5 className="edu_icon"/>
                     <h5>HTML</h5>
           <small>Fundamentals of HTML completed</small>
        </article>
        <article className='about_card2'>
          <IoLogoCss3 className="edu_icon"/>
                     <h5>CSS</h5>
           <small>Good command over CSS</small>
        </article>
        <article className='about_card2'>
          <DiReact className="edu_icon"/>
                     <h5>React</h5>
           <small>Started exploring react</small>
        </article>
        <article className='about_card2'>
          <AiFillDatabase className="edu_icon"/>
                     <h5>MySql</h5>
           <small>Good knowledge of MySql</small>
        </article>  
        </article>
      </div>
       
    </section>
  )
}
