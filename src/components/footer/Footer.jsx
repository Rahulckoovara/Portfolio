import React from 'react'
import './Footer.css';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";




const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>RAHUL C</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
       <li><a href='#contacts'>Contacts</a></li>
        
      </ul>
      <div className="footer__socials">
        <a href='https://facebook.com' target=' '><FaFacebookF className='footer__logo' /></a>
        <a href='https://instagram.com' target=''><FaInstagram className='footer__logo'/></a>
        <a href='https://github.com/Rahulckoovara' target=' '><FaGithub className='footer__logo'  /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; RAHUL.All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
