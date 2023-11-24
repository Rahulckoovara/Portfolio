import React from "react";
import './Services.css';
import Ktu from '../../assets/ktu.png';
import ults from '../../assets/ults.png';


const Services = () => {
  return (
    <section id="services">
      <h5>My way</h5>
      <h2>Timeline</h2>
      <div className="timeline">
        <div className="text_container leftcontainer">
          <img className="img_timeline" src={Ktu} />
          <div className="text_box">
            <h2>Computer Science and Engineering </h2>
            <small>LBSCEK</small><br/>
            <small> July 2019 - June 2023</small>
            
            <p>Completed Computer Science and Engineering from LBSCEK in APJ Abdul kalam Technological university </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>
        <div className="text_container rightcontainer">
          <img  className="img_timeline" src={ults}/>
          <div className="text_box">
            <h2>Associate Engineer</h2>
            <small>ULTS</small><br/>
            <small> October 2023- Present</small>
            
            <p>Working as Associate Engineer in the UL Technology Solutions </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
