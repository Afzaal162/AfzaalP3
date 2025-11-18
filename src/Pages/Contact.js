import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="blog-hero"
        style={{
    width: "100%",
    height: "50vh",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    animation: "fadeInHero 1s ease-in-out",
    backgroundImage: `url('https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=1600&auto=format&fit=crop')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
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
          
          {/* Left Image */}
       <div className="form-image">
  <img
    src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?w=1600&auto=format&fit=crop&q=80"
    alt="Contact Support"
  />
</div>


          {/* Right Form Fields */}
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
