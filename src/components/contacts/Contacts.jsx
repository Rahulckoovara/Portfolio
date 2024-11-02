import React, { useRef, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import "./Contact.css";

import axios from "axios";
const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  
//google shhet urll
//https://docs.google.com/spreadsheets/d/1eQ9v6b8TKZN6Ih865Z2q12q7z8eDCxyrYx9jhDQlrYc/edit?gid=0#gid=0

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    const data = {
      Name: name,
      Email: email,
      Message: message,
    };
    axios
      .post(
        "https://api.sheetbest.com/sheets/b7e573d8-277a-4ad0-865b-3d1aec442050",
        data
      )
      .then((res) => console.log(res)
   
    );
    setShowSuccessMessage(true);
    setTimeout(()=>setShowSuccessMessage(false),3000);
    //clearformfields
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

            <a>send a message</a>
          </article>

          <form onSubmit={handleSubmit}>
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
              type="submit"
              style={{ padding: "2%" }}
              className="btn btn-primary"
            >
              Send Message
            </button>
            {showSuccessMessage && (
              <div
                style={{ color: "green", fontWeight: "700", marginTop: "5px" }}
              >
                Message sent successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;



//    // if (name && email && message) {
    //   try {
    //     // Google Sheets API URL to append data to the sheet
    //     const endpoint = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1!A1:append?valueInputOption=USER_ENTERED&key=${API_KEY}`;

    //     // Send data to Google Sheets
    //     await axios.post(endpoint, {
    //       values: [[name, email, message]]
    //     });

    //     setShowSuccessMessage(true);
    //     setName("");
    //     setEmail("");
    //     setMessage("");

    //     setTimeout(() => setShowSuccessMessage(false), 3000);
    //   } catch (error) {
    //     console.error("Error writing to Google Sheets", error);
    //   }
    // } else {
    //   alert("Please fill all fields");
    // }

  // // Button is disabled if any field is empty
  // const isButtonDisabled =
  //   name.trim() === "" || email.trim() === "" || message.trim() === "";

  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   if (!isButtonDisabled) {
  //     // Email service configuration
  //     emailjs
  //       .sendForm(
  //         "service_5nv3uy8",
  //         "template_fygw9pl",
  //         form.current,
  //         "M_VVA5T0V_3rfFLhF"
  //       )
  //       .then(
  //         () => {
  //           // Clear the form
  //           form.current.reset();
  //           setName("");
  //           setEmail("");
  //           setMessage("");
  //           setShowSuccessMessage(true);

  //           // Hide success message after 3 seconds
  //           setTimeout(() => setShowSuccessMessage(false), 3000);
  //         },
  //         (error) => {
  //           console.error("Email sending failed:", error);
  //         }
  //       );
  //   }
  // };