import React from 'react';
import ContactForm from '../components/ContactForm'; 
import '../styles/pages/Contact.scss';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contactez-moi</h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
