import React, { useState } from 'react';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import './Shop.css';

const Shop = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [cartCount] = useState(0);

    const categories = ['All', 'Vegetables', 'Fruits', 'Juice', 'Dried'];

    const products = [
        {
            id: 1,
            name: 'BELL PEPPER',
            price: 80.00,
            originalPrice: 120.00,
            discount: '30%',
            image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&h=300&fit=crop',
            category: 'Vegetables'
        },
        {
            id: 2,
            name: 'STRAWBERRY',
            price: 120.00,
            image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=300&fit=crop',
            category: 'Fruits'
        },
        {
            id: 3,
            name: 'GREEN BEANS',
            price: 120.00,
            image: '/images/Green.webp',
            category: 'Vegetables'
        },
        {
            id: 4,
            name: 'PURPLE CABBAGE',
            price: 120.00,
            image: '/images/Purple.jpeg',
            category: 'Vegetables'
        },
        {
            id: 5,
            name: 'TOMATOES',
            price: 80.00,
            originalPrice: 120.00,
            discount: '30%',
            image: '/images/Tomato.webp',
            category: 'Vegetables'
        },
        {
            id: 6,
            name: 'BROCCOLI',
            price: 120.00,
            image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&h=300&fit=crop',
            category: 'Vegetables'
        },
        {
            id: 7,
            name: 'CARROTS',
            price: 120.00,
            image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=300&fit=crop',
            category: 'Vegetables'
        },
        {
            id: 8,
            name: 'JUICE BOTTLES',
            price: 120.00,
            image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop',
            category: 'Juice'
        }
    ];

    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(product => product.category === activeCategory);

    return (
        <div className="vegefoods-container">
            <div
                className="blog-hero"
                style={{
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
                <div className="blog-hero-overlay"></div>
                <h1 className="blog-hero-title">Shop Now</h1>
            </div>

            <main className="main-content">
                <div className="category-filter">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="products-grid">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="product-card">
                            {product.discount && (
                                <div className="discount-badge">{product.discount}</div>
                            )}
                            <div className="product-image">
                                <img src={product.image} alt={product.name} />
                                <div className="product-actions">
                                    <button className="action-btn" title="View Details">
                                        <Eye size={18} />
                                    </button>
                                    <button className="action-btn" title="Add to Cart">
                                        <ShoppingCart size={18} />
                                    </button>
                                    <button className="action-btn" title="Add to Wishlist">
                                        <Heart size={18} />
                                    </button>
                                </div>
                            </div>
                            <div className="product-info">
                                <h3 className="product-name">{product.name}</h3>
                                <div className="product-price">
                                    {product.originalPrice && (
                                        <span className="original-price">${product.originalPrice.toFixed(2)}</span>
                                    )}
                                    <span className="current-price">${product.price.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Shop;