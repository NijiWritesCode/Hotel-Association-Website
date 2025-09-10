import React, { useState, useRef } from 'react';
import './Contact.css';
import Navbar from '../Sub_Component/Navbar/Navbar.jsx';
import Footer from '../Sub_Component/Footer/Footer.jsx';
import { ScrollRestoration } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import AdOverlay from '../Sub_Component/Advert/Advert.jsx';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ message: '', type: '' });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_v0ostm5', 'template_m5udj8a', form.current, {
        publicKey: 'VjfM9HFhhHgzXHVYR',
      })
      .then(
        () => {
          setStatus({ message: 'Message sent successfully!', type: 'success' });
          form.current.reset();
          setTimeout(() => setStatus({ message: '', type: '' }), 3000);
        },
        (error) => {
          setStatus({ message: `Failed to send message: ${error.text}`, type: 'error' });
          setTimeout(() => setStatus({ message: '', type: '' }), 3000);
          form.current.reset();
        }
      );
  };

  return (
    <div className="contact">
      <div className="nav">
        <Navbar />
      </div>

      <div className="contact-card">
        <p>Do You Like What We Offer And Want To Join?</p>

        <form ref={form} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="NAME"
              className="contact-form-input"
              required
              aria-required="true"
            />
          </div>

          <div className="form-group">
            <label htmlFor="title">Subject</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="SUBJECT"
              className="contact-form-input"
              required
              aria-required="true"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="EMAIL"
              className="contact-form-input"
              required
              aria-required="true"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="MESSAGE"
              className="contact-form-textarea"
              required
              aria-required="true"
            />
          </div>

          {status.message && (
            <div className={`status-message ${status.type}`}>
              {status.message}
            </div>
          )}

          <button type="submit" className="contact-form-button" aria-label="Send message" onClick={sendEmail}>
            SEND
          </button>
        </form>

        <div className="call-info">
          <h2>Call Us</h2>
          <p>
            Are you a hotel operator in Ado Odo Ota LGA? Join us to benefit from a strong network, legal
            backing, security partnerships, and business growth opportunities. Together, we raise the
            bar for hospitality in Ado Odo Ota. Do you need further information? Call: +2348037279143
          </p>
        </div>
      </div>

      <div className="foot">
        <Footer />
      </div>

      <AdOverlay />

      <ScrollRestoration />
    </div>
  );
};

export default Contact;