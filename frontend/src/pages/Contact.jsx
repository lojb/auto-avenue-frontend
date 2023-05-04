import React from 'react';
import { phone, location } from '../assets';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-page__header">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-page__cards">
        <div className="contact-page__card">
          <img src={location} alt="Location" className="contact-page__card-logo" />
          <p>123 Main St<br />Anytown, USA 12345</p>
        </div>
        <div className="contact-page__card">
          <img src={phone} alt="Phone" className="contact-page__card-logo" />
          <p>555-555-5555</p>
        </div>
      </div>
      <div className="contact-page__form">
        <h2>What's the problem?</h2>
        <form>
          <textarea name="problem" rows="4" placeholder="Please describe your problem"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
