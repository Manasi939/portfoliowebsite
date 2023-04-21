import React from 'react'
import contact from './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
export default function Contactt() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6j2c2j6', 'template_wisewqa', form.current, 'hluP0_sFhFuhLhxSO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5 id='hjk'>Get in touch</h5>
      <h2>Contact me!</h2>
      <div className="contact_container">
       <div className="contact_options">
    <article className="contact_option">
    <AiOutlineMail/>
      <h4>Email</h4>
      <h5 >manasigaikwad113@gmail.com</h5>

      <a href='mailto:manasigaikwad113@gmail.com'>Send a message</a>
    </article>
       </div>
       <form ref ={form} onSubmit={sendEmail} className='formc'>
        <input name='name' type='text' placeholder='Enter Full name'></input>
        <input name='mobile'  type='text' placeholder='Enter mobile number'></input>
        <textarea  name='textt'  placeholder='Enter text here'></textarea>
        <button className='btn btn-primary' type='submit'>Submit here!</button>
       </form>
      </div>

    </section>
  )
}
