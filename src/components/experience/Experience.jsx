import React from 'react';
import './Experience.css';
import { MdVerified } from "react-icons/md";


const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills i Have</h5>
      <h2>My Skills</h2>
      <div className=' exp exp__container'>
        <div className="exp__frontend">
          <h3>Development</h3><br/>
          <div className="exp__content">
            <article className='exp__details'>
            <div className='exp__skill'><MdVerified className='exp__icon' /><h4>Flutter </h4></div>
            <div className='exp__skill'><MdVerified className='exp__icon' /><h4>MongoDB</h4></div>
            <div className='exp__skill'><MdVerified className='exp__icon' /><h4>Node basics </h4></div>
           <div className='exp__skill'><MdVerified className='exp__icon' /><h4>HTML </h4></div> 
           <div className='exp__skill'><MdVerified className='exp__icon'/><h4>CSS</h4></div>
            <div className='exp__skill'><MdVerified className='exp__icon'/> <h4>JavaScript</h4></div>
           <div className='exp__skill'> <MdVerified className='exp__icon'/> <h4>React</h4></div>

           

            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
