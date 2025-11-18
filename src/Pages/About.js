import React from 'react';
import './About.css';

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="about-section" >
        <div className="hero-overlay">
          <h1 className="hero-title">ABOUT US</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="content-section">
        <div className="content-wrapper">
          
          {/* Left Image */}
          <div className="image-column">
            <img
              src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&auto=format&fit=crop"
              alt="Woman with apple"
              className="about-image"
            />
          </div>

          {/* Right Text */}
          <div className="text-column">
            <h2 className="section-title">Welcome to FoodZone</h2>
            <p className="section-text">
              Far far away, behind the word mountains, far from the countries Vokalia and 
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove 
              right at the coast of the Semantics, a large language ocean.
            </p>
            <p className="section-text">
              But nothing the copy said could convince her and so it didn't take long until 
              a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole 
              and dragged her into their agency, where they abused her for their.
            </p>
            <button className="shop-btn">SHOP NOW</button>
          </div>

        </div>
      </div>
    </>
  );
};

export default About;
