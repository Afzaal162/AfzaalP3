import React, { useState } from 'react';
import { Star } from 'lucide-react';
import './Product.css';

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('SMALL');

  const sizes = ['SMALL', 'MEDIUM', 'LARGE', 'EXTRA LARGE'];

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={18}
        className={index < rating ? 'star-filled' : 'star-empty'}
        fill={index < rating ? '#82ae46' : 'none'}
        stroke={index < rating ? '#82ae46' : '#ddd'}
      />
    ));
  };

  return (
    <div className="product-detail-container">
      <div className="product-detail-content">
        {/* Product Image Section */}
        <div className="product-image-section">
          <img 
            src="https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=600&h=600&fit=crop" 
            alt="Bell Pepper" 
            className="main-product-image"
          />
        </div>

        {/* Product Info Section */}
        <div className="product-info-section">
          <h1 className="product-title">Bell Pepper</h1>
          
          {/* Rating and Sales */}
          <div className="product-meta">
            <div className="rating-container">
              <span className="rating-number">5.0</span>
              <div className="stars">
                {renderStars(5)}
              </div>
            </div>
            <span className="rating-count">100 Rating</span>
            <span className="sold-count">500 Sold</span>
          </div>

          {/* Price */}
          <div className="product-price">$120.00</div>

          {/* Description */}
          <p className="product-description">
            A small river named Duden flows by their place and supplies it with the 
            necessary regelialia. It is a paradisematic country, in which roasted parts 
            of sentences fly into your mouth. Text should turn around and return to its 
            own, safe country. But nothing the copy said could convince her and so it 
            didn't take long until.
          </p>

          {/* Size Selector */}
          <div className="size-selector">
            <select 
              value={selectedSize} 
              onChange={(e) => setSelectedSize(e.target.value)}
              className="size-dropdown"
            >
              {sizes.map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>

          {/* Quantity Selector */}
          <div className="quantity-selector">
            <button 
              className="quantity-btn" 
              onClick={decrementQuantity}
              aria-label="Decrease quantity"
            >
              -
            </button>
            <input 
              type="number" 
              value={quantity}
              onChange={handleQuantityChange}
              className="quantity-input"
              min="1"
            />
            <button 
              className="quantity-btn" 
              onClick={incrementQuantity}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          {/* Stock Info */}
          <p className="stock-info">600 kg available</p>

          {/* Add to Cart Button */}
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;