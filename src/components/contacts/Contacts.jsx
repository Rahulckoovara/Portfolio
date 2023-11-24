import React, { useRef, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // ---input value inn conatct field----

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
  };

  const isButtonDisabled =
    name.trim() === "" || email.trim() === "" || message.trim() === "";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // ---------email services------------------------------------------------------------

    emailjs.sendForm(
      "service_5nv3uy8",
      "template_fygw9pl",
      form.current,
      "M_VVA5T0V_3rfFLhF"
    );

    //for--ressetting the emai field------

 
    form.current.reset(), 
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contacts">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container.contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail />

            <h4>Email</h4>

            <a href="mailto:rahulckoovara1445@gmail.com">send a message</a>
          </article>

          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              value={message}
              onChange={handleMessageChange}
              id=""
              cols="30"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button
              onClick={() => alert("Message send Succesfully")}
              type="submit"
              onSubmit={handleSubmit}
              disabled={isButtonDisabled}
              style={{ padding: "2%" }}
              className="btn btn-primary"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
