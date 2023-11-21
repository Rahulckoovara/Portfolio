import React from 'react';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';
import './Header.css';
   

const Header = () => {
  return (
   <header>
    <div className='container header__container'>
        <h5>Hello im </h5>
        <h1>RAHUL C</h1>
        <h5 className="text-light">
            Web Developer   
        </h5>
        <CTA />
        <HeaderSocials/>
        <div className='me'>
            <img src={ME} alt='me'></img>
             </div>
             <a href='#contact' className='scroll__down'>Scroll down</a>
            

    </div>
   </header>
  )
}

export default Header;
