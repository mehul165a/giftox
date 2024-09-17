import React from 'react';
import './Contact.css'; // Ensure this CSS file contains the necessary styles

const Contact = () => (
  <section id="contact" className="contact">
    <h2>Contact Us</h2>
    <div className="contact-info">
      <div className="contact-item">
        <h3>Name</h3>
        <p>Ayush Pathak</p>
      </div>
      <div className="contact-item">
        <h3>Phone Number</h3>
        <p><a href="tel:+9599379261">9599379261</a></p>
      </div>
      <div className="contact-item">
        <h3>Email</h3>
        <p><a href="mailto:ayushpathak2703@gmail.com">ayushpathak2703@gmail.com</a></p>
      </div>
    </div>
  </section>
);

export default Contact;
