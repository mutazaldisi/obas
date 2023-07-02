import React from 'react';
import ContactUsLogo from '../components/images/ContactUsLogo.jpg'

const ContactUsThankyou = () => {
  return (
    <div className="content-wrapper">
    <div className="image-container">
        <img src={ContactUsLogo} alt="Contact Us" />
      </div>
      <div className="thankyou-message">
          <p>Thank you for contacting us.<br></br>
           We will be in touch soon!</p>
        </div>
    </div>
  );
};

export default ContactUsThankyou;