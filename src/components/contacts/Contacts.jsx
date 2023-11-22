import React,{useRef} from 'react'
import { AiOutlineMail } from "react-icons/ai";
import './Contact.css';

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5nv3uy8', 'template_fygw9pl', form.current, 'M_VVA5T0V_3rfFLhF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contacts'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='container.contact__container'>
        <div className="contact__options">
          <article className='contact__option'>

          <AiOutlineMail />

            <h4>
              Email
            </h4>
            
            <a href='mailto:rahulckoovara1445@gmail.com'>send a message</a>
          </article>
          <form ref={form} onSubmit={sendEmail}>
    	    <input type='text' name='name' placeholder='Your Full Name' required/> 
          <input type='email' name='email' placeholder='Your Email' required  />
          <textarea name='message' id='' cols='30' rows='7' placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>

        </div>

      </div>
    </section>
  )
}

export default Contacts;
