import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.png';

import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.jpg';
import IMG6 from '../../assets/portfolio6.jpg';



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Works</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>




        {/* ----------------portfolio contents---------------------------------------- */}


        <article className='portfolio__item'>
      <div className='portfolio__img'>
        <img src={IMG1} alt=''/>

      </div>
        <h3>Teranis 2023</h3>
        <div style={{display:'flex'}}>
        <a href='https://github.com/Teranis-LBSCEK/teranis23-mobile-app' target='_blank' className='btn'> Github</a>
        <p style={{color:'cyan'}}>#flutter</p>
        </div>
        </article>
        <article className='portfolio__item'>
      <div className='portfolio__img'>
        <img src={IMG2} alt=''/>

      </div>
      
        <h3>Home Rental application</h3>
        <div style={{display:'flex'}}>
        <a href='https://github.com/Rahulckoovara/E-commerce' target='_blank' className='btn'> Github</a>
        <p style={{color:'cyan'}}>#React, #Javascript</p>
        </div>
        </article>
        <article className='portfolio__item'>
      <div className='portfolio__img' >
        <img src={IMG3} alt=''/>

      </div>

        <h3>  E Blood Bank</h3>
        <div style={{display:'flex'}}>
        <a href='https://github.com/athulll7/EBloodBank' target='_blank' className='btn'> Github</a>
        <p style={{color:'cyan'}}>#Flutter</p>
        </div>
        </article>
        <article className='portfolio__item'>
      <div className='portfolio__img'>
        <img src={IMG4} alt=''/>

      </div>

        <h3>Parking Management</h3>
        <div style={{display:'flex'}}>
        <a href='https://github.com/athulll7/Vision-Based-Parking-Booth' target='_blank' className='btn'> Github</a>
        <p style={{color:'cyan'}}>#Python</p>
        </div>
        </article>
        <article className='portfolio__item'>
      <div className='portfolio__img'>
        <img src={IMG5} alt=''/>

      </div>

        <h3>Club App</h3>
        <div style={{display:'flex'}}>
        <a href='https://github.com/Rahulckoovara/CLUB' target='_blank' className='btn'> Github</a>
        
        <p style={{color:'cyan'}}>#Flutter</p>
      </div>
        </article>
        <article className='portfolio__item'>
      <div className='portfolio__img'>
        <img src={IMG6} alt=''/>

      </div>

        <h3>This is Portfolio item title</h3>
        <a href='https://github.com/' target='_blank' className='btn'> Github</a>
      
        </article>
      </div>

    </section>
  )
}

export default Portfolio;
