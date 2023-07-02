import React from 'react';
import { Link } from 'react-router-dom';
import Service1 from '../components/images/Service1.jpg';
import Service2 from '../components/images/Service2.jpg';
import Service3 from '../components/images/Service3.jpg';

export default function Services() {
  return (
    <div className="services-container">
      <div className="service-box">
        <h3>Men’s Competitive/Recreational  League</h3>
        <img src={Service1} alt="Description 1" />
        <p>Our Men's Basketball Leagues cater to all. 
        The competitive league is for those seeking high-intensity action,
        while the recreational league offers a relaxed yet spirited atmosphere.
        Team Registration: $1000 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Individual Registration: $100 </p>
        <Link to="/register" className="register-button">Register</Link>
      </div>
      <div className="service-box">
        <h3>Women’s Competitive/Recreational League</h3>
        <img src={Service2} alt="Description 2" />
        <p>Our Women's Basketball Leagues offer both competitive
            and recreational options.  The competitive league presents intense gameplay, while the recreational one promotes fun. <br></br>
        Team Registration: $1000 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Individual Registration: $100 </p>
        <Link to="/register" className="register-button">Register</Link>
      </div>
      <div className="service-box">
        <h3>Co-ed League</h3>
        <img src={Service3} alt="Description 3" />
        <p>Our Coed Basketball League is the perfect blend of 
        competitive spirit and community building. It allows both men and women to come together, celebrate their love for basketball, and promote inclusivity in sports. <br></br>
        Team Registration: $1500 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Individual Registration: $120  </p>
        <Link to="/register" className="register-button">Register</Link>
      </div>
    </div>
  );
}
