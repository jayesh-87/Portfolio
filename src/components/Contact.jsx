import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import siteConfig from '../data/siteConfig';

export default function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_kvw0m3i',   
        'template_lz46dzw',    
        formRef.current,
        'es8IIpFQTuoVYDrpN'      
      )
      .then(
        () => {
          alert('Message sent successfully!');
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="contact container">
      <h2>Contact</h2>
      <p>Let's build something together — reach out via email or social links.</p>

      <div className="contact-grid">
        {/* Contact Info Card */}
        <div className="contact-card contact-card-small">
          <h4>Get in Touch</h4>
          <p>
            <strong>Email:</strong>{' '}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </p>
          <p>
            <strong>Links:</strong>
            <br />
            <a href={siteConfig.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <br />
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </p>
        </div>

        {/* Contact Form */}
        <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
          <label>
            Name
            <input required type="text" name="name" placeholder="Your Name" />
          </label>

          <label>
            Email
            <input required type="email" name="email" placeholder="your.email@example.com" />
          </label>

          <label>
            Message
            <textarea
              required
              name="message"
              rows="4"
              placeholder="Your message here..."
            ></textarea>
          </label>

          <button className="btn" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
