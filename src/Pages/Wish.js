import React, { useState } from 'react';
import { X } from 'lucide-react';
import './Wish.css';

const Wish = () => {
const [cartItems, setCartItems] = useState([
  {
    id: 1,
    name: 'Bell Pepper',
    description: 'Far far away, behind the word mountains, far from the countries',
    price: 4.90,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=150&h=150&fit=crop'
  },
  {
    id: 2,
    name: 'Strawberry',
    description: 'Far far away, behind the word mountains, far from the countries',
    price: 15.70,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=150&h=150&fit=crop'
  },
  {
    id: 3,
    name: 'Green Beans',
    description: 'Far far away, behind the word mountains, far from the countries',
    price: 15.70,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1600&auto=format&fit=crop'
  }
]);


  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const calculateTotal = (price, quantity) => {
    return (price * quantity).toFixed(2);
  };

  const calculateGrandTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      {/* Hero Section */}
      <div className="hero-section1" style={{
    backgroundImage: `url('https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=1600&auto=format&fit=crop')`,
        backgroundSize: 'cover',       // cover the whole section
        backgroundPosition: 'center',  // center the image
        backgroundRepeat: 'no-repeat', // avoid repeating
        minHeight: '400px',            // adjust height as needed
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div className="hero-overlay1">
          <h1 className="hero-title">Wishlist</h1>
        </div>
      </div>

      {/* Cart Table */}
      <div className="cart-content">
        <div className="cart-table-wrapper">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product List</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id} className="cart-item">
                  <td className="product-info">
                    <button
                      className="remove-btn"
                      onClick={() => removeItem(item.id)}
                      aria-label="Remove item"
                    >
                      <X size={16} />
                    </button>
                    <img src={item.image} alt={item.name} className="product-image" />
                    <div className="product-details">
                      <h3 className="product-name">{item.name}</h3>
                      <p className="product-description">{item.description}</p>
                    </div>
                  </td>
                  <td className="product-price">${item.price.toFixed(2)}</td>
                  <td className="product-quantity">
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                      className="quantity-input"
                    />
                  </td>
                  <td className="product-total">${calculateTotal(item.price, item.quantity)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Wish;