import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import '../styles/contact.scss';

const Contactbox = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pes0d2s', 'template_iq97atp', form.current, 'B6KnbhJG6mjDr0n6s')
      .then(
        () => {
         alert("Message sent  successfully");
        },
        (error) => {
          alert("Failed");
        },
      );
  };

  return (
    <div className="contact">
      <div className="contactcontent">
        <h2>Leave your contact here. We will be in touch shortly.</h2>
        <form ref={form} onSubmit={sendEmail} className="contactline">
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input name="message" placeholder="Message" required />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contactbox;
