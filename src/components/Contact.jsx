import React, { useState } from "react";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_d3wgoqv";
const TEMPLATE_ID = "template_wagy9ud";
const PUBLIC_KEY = "r5j0naynvR15Per5v";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then(
        () => {
          alert("Thank you for your message!");
          setForm({ name: "", email: "", message: "" });
          setSending(false);
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          setSending(false);
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <div className="contact-item">
          <svg className="contact-icon" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg>
          <a href="mailto:bricealibyilingiro@gmail.com" className="contact-link">
            bricealibyilingiro@gmail.com
          </a>
        </div>
        <div className="contact-item">
          <svg className="contact-icon" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
              clipRule="evenodd"
            ></path>
          </svg>
          <a href="https://github.com/Brice-art" className="contact-link">
            GitHub
          </a>
        </div>
        <div className="contact-item">
          <svg className="contact-icon" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clipRule="evenodd"
            ></path>
          </svg>
          <a
            href="https://www.linkedin.com/in/brice-ali-byiringiro-ab1182254/"
            className="contact-link"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={sending}>
          {sending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
