import React from 'react';
import { Link } from 'react-router-dom';
import HomeImg from '../components/images/HomeImg.jpg';

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-image">
        <img src={HomeImg} alt="Your description" />
      </div>
      <div className="home-content">
        <h1>Welcome!</h1>
        <p>
          Welcome to the Ottawa Basketball Association,
          <br></br>
          the hub for all things basketball in our community!
          <br></br>
           Whether you're a player, coach, or fan, we provide 
          <br></br>
          the resources you need. Explore our site for updates,  
           <br></br>
           events, and ways to engage. Together, let's celebrate 
           <br></br>
           the joy and competition of the game.
        </p>
        <Link to="/register" className="register-button">Register</Link>
      </div>
    </div>
  );
}