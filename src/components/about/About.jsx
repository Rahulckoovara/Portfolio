import React from 'react';
import './About.css';
import ME from '../../assets/me_about_pic.jpg';
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About me</h2>
      <div className='container about__container'>
        <div className="about__me">
        <div className="about__me_image">
          <img src={ME} alt=''/> 
        </div>
        </div>
        <div  className="about__contents">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
      <h5>Experience</h5>
      <small>1+ years</small>
            </article>
            <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>

      <h5>Projects</h5>
      <small>8+</small>
            </article>
          
          </div>
          <p  className='about__content'>Dedicated to creating captivating digital experiences through app and web development, I specialize in App development. My enthusiasm for diverse IT domains, coupled with a commitment to ongoing learning, fuels my drive to stay innovative and collaborate with fellow tech enthusiasts</p>
        <a href='#contacts' className='btn btn-primary'>Lets Talk</a>
        </div>
      </div>
    </section>
  )
  
}



export default About;
