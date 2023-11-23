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
        <li><a href='#portfoli'>Portfolio</a></li>
       <li><a href='#contacts'>Contacts</a></li>
        
      </ul>
      <div className="footer__socials">
        <a href='https://facebook.com'><FaFacebookF className='footer__logo' /></a>
        <a href='https://instagram.com'><FaInstagram className='footer__logo'/></a>
        <a href='https://github.com'><FaGithub className='footer__logo'  /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; RAHUL.All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
