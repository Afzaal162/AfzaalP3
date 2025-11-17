// NewsletterFooter.jsx
import React, { useState } from 'react';
import { ChevronUp, MapPin, Phone, Mail } from 'lucide-react';
// import './Footer.css';
import './Footer.css';


export default function NewsletterFooter() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="newsletter-footer">
      {/* Newsletter Section */}
      <div className="newsletter-section">
        <div className="newsletter-container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h2 className="newsletter-title">
                Subcribe to our Newsletter
              </h2>
              <p className="newsletter-description">
                Get e-mail updates about our latest shops and special offers
              </p>
            </div>
            <div className="newsletter-form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="newsletter-input"
              />
              <button
                onClick={handleSubscribe}
                className="newsletter-button"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="scroll-top-container">
        <button
          onClick={scrollToTop}
          className="scroll-top-button"
        >
          <ChevronUp size={24} />
        </button>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Vegefoods Info */}
            <div className="footer-column">
              <h3 className="footer-heading">Vegefoods</h3>
              <p className="footer-text">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
              </p>
              <div className="social-links">
                <a href="#" className="social-icon">
                  <svg className="icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg className="icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg className="icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.5 2h9A5.5 5.5 0 0122 7.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Menu */}
            <div className="footer-column">
              <h3 className="footer-heading">Menu</h3>
              <ul className="footer-list">
                <li><a href="#" className="footer-link">Shop</a></li>
                <li><a href="#" className="footer-link">About</a></li>
                <li><a href="#" className="footer-link">Journal</a></li>
                <li><a href="#" className="footer-link">Contact Us</a></li>
              </ul>
            </div>

            {/* Help */}
            <div className="footer-column">
              <h3 className="footer-heading">Help</h3>
              <ul className="footer-list">
                <li><a href="#" className="footer-link">Shipping Information</a></li>
                <li><a href="#" className="footer-link">Returns & Exchange</a></li>
                <li><a href="#" className="footer-link">Terms & Conditions</a></li>
                <li><a href="#" className="footer-link">Privacy Policy</a></li>
                <li><a href="#" className="footer-link">FAQs</a></li>
                <li><a href="#" className="footer-link">Contact</a></li>
              </ul>
            </div>

            {/* Have a Questions? */}
            <div className="footer-column">
              <h3 className="footer-heading">Have a Questions?</h3>
              <ul className="contact-list">
                <li className="contact-item">
                  <MapPin className="contact-icon" />
                  <span className="contact-text">203 Fake St. Mountain View, San Francisco, California, USA</span>
                </li>
                <li className="contact-item">
                  <Phone className="contact-icon" />
                  <span className="contact-text">+2 392 3929 210</span>
                </li>
                <li className="contact-item">
                  <Mail className="contact-icon" />
                  <span className="contact-text">info@yourdomain.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}