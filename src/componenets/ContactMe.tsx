import React from 'react';
import './contactme.css';

interface ContactMeProps {
  phone: string;
  email: string;
  address: string;
}

const ContactUS: React.FC<ContactMeProps> = ({ phone, email, address }) => {
  return (
    <div id='Contact' className="contact-container">
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-card">
        <i className="fas fa-phone"></i>
        <h3>Phone</h3>
        <p>{phone}</p>
      </div>
      <div className="contact-card">
        <i className="fas fa-envelope"></i>
        <h3>Email</h3>
        <p>{email}</p>
      </div>
      <div className="contact-card">
        <i className="fas fa-map-marker-alt"></i>
        <h3>Address</h3>
        <p>{address}</p>
      </div>
    </div>
  );
};

export default ContactUS;
