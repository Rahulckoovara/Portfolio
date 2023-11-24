  import React,{useState,useEffect} from 'react';
  import CTA from './CTA';
  import ME from '../../assets/me.png';
  import HeaderSocials from './HeaderSocials';
  import './Header.css';

  const Header = () => {
    const [wordIndex, setWordIndex] = useState(0);
    const words = ["Web Developer", "Application Developer"];
    useEffect(() => {
      const intervalId = setInterval(() => {
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 1500);
      return () => clearInterval(intervalId);
    },[]);

    // function scrollDown (){
    //   var words=["Web Develop
   // const [wordIndex, setWordIndex] = useState(0);
    //er","App Developer"],
    //   i=0;
    //   setInterval(function(){$("#words").fadeOut(function(){
    //     $(this).html(words[(i=(i+1)%words.length)]).fadeIn();
    //   })},
    //   1000);
    // }
    return (
    <header>
      <div className='container header__container'>
          <h5 style={{fontSize:'1.2rem'}}>Hello <span style={{color:'red'}}>im</span></h5>
          <h1>RAHUL C</h1>
          <h5 id='words' >{words[wordIndex]}</h5>
          <CTA />
          <HeaderSocials/>
          <div className='me'>
              <img src={ME} alt='me'></img>
              </div>
              <a href='#contacts' className='scroll__down'>Scroll down</a>
              

      </div>
    </header>
    )
  }

  export default Header;
