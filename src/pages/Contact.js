// Contact.js

import React from "react";
import "../styles/Contact.css";

function Contact() {
  const handleButtonClick = () => {
    const url = `https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=geralpradesa@upi.edu`;
    window.open(url, "_blank");
  };

  return (
    <div className="contact">
      <div className="content">
        <h1>Contact</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea rows="6" placeholder="Enter message..." name="message" required></textarea>
          <button type="button" onClick={handleButtonClick}>
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
