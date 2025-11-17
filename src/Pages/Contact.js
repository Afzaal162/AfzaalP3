import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="Contact-section" style={{
        backgroundImage: `url('/images/Vegetables.jpg')`,
        backgroundSize: 'cover',       // cover the whole section
        backgroundPosition: 'center',  // center the image
        backgroundRepeat: 'no-repeat', // avoid repeating
        minHeight: '400px',            // adjust height as needed
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      >
        <div className="hero-overlay">
          <h1 className="hero-title">Contact US</h1>
        </div>
      </div>

      <div className="contact-container">
        {/* Info Cards Section */}
        <div className="cards-section">
          <div className="contact-card">
            <h3>Address</h3>
            <p>123 FoodZone Street, Food City, Country</p>
          </div>
          <div className="contact-card">
            <h3>Phone</h3>
            <p>+123 456 7890</p>
          </div>
          <div className="contact-card">
            <h3>Email</h3>
            <p>info@foodzone.com</p>
          </div>
          <div className="contact-card">
            <h3>Website</h3>
            <p>www.foodzone.com</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="form-section">
          <div className="form-image">
            <img
              src="/images/Contact.jpg.png"
              alt="Contact Us"
            />
          </div>

          <div className="form-fields">
            <h2>Get in Touch</h2>
            <form>
              <div className="input-group">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
              </div>
              <input type="text" placeholder="Subject" required />
              <textarea placeholder="Message" rows="5" required></textarea>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
