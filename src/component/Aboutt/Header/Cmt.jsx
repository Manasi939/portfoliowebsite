import React from 'react'
import res from '../../../assets/Resume (1).pdf'
function Cmt() {
  return (
    <div className='cta'>
    <a className='btn'>Let's Connect</a>
    <a className='btn btn-primary' href={res} download>Download CV</a>
  </div>
  )
}

export default Cmt