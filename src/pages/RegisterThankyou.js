import React from 'react';
import ContactUsLogo from '../components/images/ContactUsLogo.jpg'

const RegisterThankyou = () => {
  return (
    <div className="content-wrapper">
    <div className="image-container">
        <img src={ContactUsLogo} alt="Contact Us" />
      </div>
      <div className="thankyou-message">
          <p>Thank you for your Registration!<br></br>
           You will recieve a confirmation email soon!</p>
        </div>
    </div>
  );
};

export default RegisterThankyou;