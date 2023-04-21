import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'
import {SiCodechef} from 'react-icons/si'

function HeaderSocials() {
  return (
   <div className="header_socials">
    <a href="https://www.w3schools.com/cssref/pr_scroll-behavior.php"><AiFillLinkedin/></a>
    <a href="https://fonts.google.com/specimen/Poppins"><AiOutlineGithub /></a>
    <a href="https://fonts.google.com/specimen/Poppins"><SiCodechef /></a>
   </div>
  )
}

export default HeaderSocials