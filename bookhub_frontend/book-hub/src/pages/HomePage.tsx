import React from 'react';
import './HomePage.css'; // Import the CSS file for styling

const Homepage: React.FC = () => {
  return (
    <div className="homepage" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/backg.jpg)` }}>
      <div className="content-wrapper">
        <div className="text-buttons">
          <h1>Hi, welcome to <span className="my-book-hub">MyBookHub</span></h1>
          <p className="header-subtitle">Your one-stop destination for book lovers...</p>
        </div>
      </div>
      <div className="newtrends">
        <h1>Discover New Reads Today!</h1>
      </div>
    </div>
  );
};

export default Homepage;
