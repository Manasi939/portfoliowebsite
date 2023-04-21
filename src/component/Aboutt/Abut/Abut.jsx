import React from 'react'
import abut from './abut.css'
import me from '../../../images/meme.jpg'
import {BiLibrary} from 'react-icons/bi'
import {BsAwardFill} from 'react-icons/bs'
import {FaRegNewspaper} from 'react-icons/fa'
export default function Abut() {
  return (
    <section id='user'>

        <h5>WHAT IS INTERESTING</h5>
        <h1 id='abb'>About me!!</h1>
      <div className='container about_container'>
        <div className='about_image'>
          <img src={me}></img>
        </div>
        <div className='about_content'>
         <article className='about_cards'>
         <article className='about_card'>
          <BiLibrary className="edu_icon"/>
                     <h5>Education</h5>
           <small>BTech (IT)</small>
        </article>
        <article className='about_card'>
          <BsAwardFill className="cgpa_icon"/>
                     <h5>CGPA</h5>
           <small>9+</small>
        </article>
        <article className='about_card'>
          <FaRegNewspaper className="res_icon"/>
                     <h5>Research papers</h5>
           <small>3+</small>
        </article>
         </article>
         <div className='about_below'>
         <div className='aboutpara'>
    <p>Passionate frontend developer.Here, to build more skills and creatively design chiques designs ising diversified skillsets.Calm,composed and smart work is the key!!.</p>
          </div>
          <div className='btn btn-primary'>
         <a className="conecy" href='#contact' >Lets connect!</a>
          </div>
         </div>
        
        </div>
         
      </div>


    </section>
  )
}
