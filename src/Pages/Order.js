import React, { useState } from 'react';
import './Order.css'
const Order = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: 'France',
    streetAddress: '',
    apartment: '',
    city: '',
    postcode: '',
    phone: '',
    email: '',
    paymentMethod: 'bank'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePaymentChange = (e) => {
    setFormData(prev => ({
      ...prev,
      paymentMethod: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order placed:', formData);
    alert('Order placed successfully!');
  };

  return (
    <div className="checkout-container">
      <div className="checkout-content">
        {/* Billing Details Section */}
        <div className="billing-section">
          <h2 className="section-title">Billing Details</h2>
          
          <form className="billing-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="country">State / Country</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
              >
                <option value="France">France</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Germany">Germany</option>
                <option value="Spain">Spain</option>
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="streetAddress">Street Address</label>
                <input
                  type="text"
                  id="streetAddress"
                  name="streetAddress"
                  placeholder="House number and street name"
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="apartment" className="optional-label">Apartment, suite, unit etc: (optional)</label>
                <input
                  type="text"
                  id="apartment"
                  name="apartment"
                  placeholder="Appartment, suite, unit etc: (optional)"
                  value={formData.apartment}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">Town / City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="postcode">Postcode / ZIP *</label>
                <input
                  type="text"
                  id="postcode"
                  name="postcode"
                  value={formData.postcode}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </form>
        </div>

        {/* Cart Total and Payment Section */}
        <div className="summary-section">
          {/* Cart Total */}
          <div className="cart-total">
            <h3 className="cart-title">Cart Total</h3>
            
            <div className="total-row">
              <span className="total-label">Subtotal</span>
              <span className="total-value">$20.60</span>
            </div>
            
            <div className="total-row">
              <span className="total-label">Delivery</span>
              <span className="total-value">$0.00</span>
            </div>
            
            <div className="total-row">
              <span className="total-label">Discount</span>
              <span className="total-value">$3.00</span>
            </div>
            
            <div className="total-row total-final">
              <span className="total-label">TOTAL</span>
              <span className="total-value final-price">$17.60</span>
            </div>
          </div>

          {/* Payment Method */}
          <div className="payment-method">
            <h3 className="payment-title">Payment Method</h3>
            
            <div className="payment-options">
              <label className="payment-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bank"
                  checked={formData.paymentMethod === 'bank'}
                  onChange={handlePaymentChange}
                />
                <span className="payment-label">Direct Bank Tranfer</span>
              </label>
              
              <label className="payment-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="check"
                  checked={formData.paymentMethod === 'check'}
                  onChange={handlePaymentChange}
                />
                <span className="payment-label">Check Payment</span>
              </label>
            </div>

            <button 
              type="submit" 
              className="place-order-btn"
              onClick={handleSubmit}
            >
              Place an Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;