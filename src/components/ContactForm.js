import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import '../styles/components/ContactForm.scss';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        from_name: '',
        reply_to: '', 
        message: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [confirmationMessage, setConfirmationMessage] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);
    const successMessage = " Votre message a été envoyé avec succès.";

    useEffect(() => {
        let timer;
        if (isSubmitted) {
            setShowConfirmation(true);
            let index = 0;
            timer = setInterval(() => {
                setConfirmationMessage((prev) => prev + successMessage.charAt(index));
                index++;
                if (index === successMessage.length) clearInterval(timer);
            }, 50);
        } else {
            setConfirmationMessage('');
            setShowConfirmation(false);
        }
        return () => clearInterval(timer);
    }, [isSubmitted]);

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
            setIsSubmitted(true);
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
                disabled={isSubmitted}
            />
            <input
                type="email"
                name="reply_to" 
                value={formData.reply_to}
                onChange={handleChange}
                placeholder="Votre email"
                required
                disabled={isSubmitted}
            />

            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Votre message"
                required
                disabled={isSubmitted}
            />
            <button type="submit" disabled={isSubmitted}>Envoyer</button>
            <p className="confirmation-message">{confirmationMessage}</p>
        </form>
    );
};

export default ContactForm;
