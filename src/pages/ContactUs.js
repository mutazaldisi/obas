import React from 'react';
import ContactUsLogo from '../components/images/ContactUsLogo.jpg'
import { Link } from 'react-router-dom';
const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="image-container">
        <img src={ContactUsLogo} alt="Contact Us" />
      </div>
      <div className="form-container">
        <h1>Contact Us</h1>
        <form>
          <div className="form-field">
            <input type="text" placeholder="Name" />
          </div>
          <div className="form-field">
            <input type="email" placeholder="Email" />
          </div>
          <div className="form-field">
            <input type="tel" placeholder="Phone Number" />
          </div>
          <div className="form-field">
            <textarea placeholder="Inquiries" rows="4"></textarea>
          </div>
          <div className="form-field">
            <Link to="/ContactUsThankyou" className='button'>Submit</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
