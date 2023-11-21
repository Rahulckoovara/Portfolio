import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";





const HeaderSocials = () => {
  return (
    <div>
      <a href='www.linkedin.com/in/rahulc-koovara-6225921a2' target='__blank'><FaLinkedin/> </a>
      <a href='https://github.com/Rahulckoovara' target='__blank'><FaGithub/> </a>
      <a href='www.instagram.com' target='__blank'> <FaInstagram/>   </a>
    </div>
  )
}

export default HeaderSocials
