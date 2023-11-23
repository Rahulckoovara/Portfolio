import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";





const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a className='header__icons' href='https://linkedin.com/in/rahulc-koovara-6225921a2' target=' '><FaLinkedin/> </a>
      <a className='header__icons' href='https://github.com/Rahulckoovara' target=' '><FaGithub/> </a>
      <a className='header__icons' href='https://instagram.com' target=' '> <FaInstagram/>   </a>
    </div>
  )
}

export default HeaderSocials
