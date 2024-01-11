import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/components/ContactForm.scss'; 

const ContactForm = () => {
    const [formData, setFormData] = useState({
        from_name: '',
        to_name: '', 
        message: '',
        reply_to: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            formData,
            process.env.REACT_APP_EMAILJS_USER_ID
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            
        }, (error) => {
            console.log('FAILED...', error);
            
        });
    };
    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="from_name" 
                value={formData.from_name}
                onChange={handleChange}
                placeholder="Votre nom"
                required
            />
            <input
                type="email"
                name="reply_to" 
                value={formData.reply_to}
                onChange={handleChange}
                placeholder="Votre email"
                required
            />

            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Votre message"
                required
            />
            <button type="submit">Envoyer</button>
        </form>
    );
};

export default ContactForm;
