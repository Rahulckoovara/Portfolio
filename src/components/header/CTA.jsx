import React from 'react'
import CV from '../../assets/rahul_cv.pdf';
const CTA = () => {
  return (
    <div className='cta' style={{display:'flex',gap:'1px',justifyContent:'center'}}>
      <a href={CV} download className='btn'>Download CV</a>
      <a href='#contacts' className=' btn btn-primary'>Contact</a>
    </div>
  )
}

export default CTA  ;
