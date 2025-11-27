import React from 'react';
import siteConfig from '../data/siteConfig';

export default function Contact() {
  return (
    <div className="contact container">
      <h2>Contact</h2>
      <p>Let's build something together — reach out via email or social links.</p>
      <div className="contact-grid">
        <div className="contact-card contact-card-small"> {/* Added class for smaller size */}
          <h4>Get in Touch</h4>
          <p><strong>Email:</strong> <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
          <p><strong>Links:</strong><br />
            <a href={siteConfig.github} target="_blank" rel="noreferrer">GitHub</a><br />
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </p>
        </div>
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert('Form submitted — integrate EmailJS or Formspree for real submissions.');
          }}
        >
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
            <textarea required name="message" rows="4" placeholder="Your message here..."></textarea>
          </label>
          <button className="btn" type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}