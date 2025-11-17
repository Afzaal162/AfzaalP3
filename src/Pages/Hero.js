import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";

export default function Hero() {
  // HERO SLIDER IMAGES
  const images = [
    `${process.env.PUBLIC_URL}/images/Food-1.jpg`,
    `${process.env.PUBLIC_URL}/images/Food-2.jpg`,
    `${process.env.PUBLIC_URL}/images/Food-3.jpg`,
    `${process.env.PUBLIC_URL}/images/Food-4.jpg`,
  ];
  const [current, setCurrent] = useState(0);

  // FADE ANIMATION
  const fadeRefs = useRef([]);
  fadeRefs.current = [];
  const addToRefs = (el) => {
    if (el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.2 }
    );
    fadeRefs.current.forEach((el) => observer.observe(el));
    return () => fadeRefs.current.forEach((el) => observer.unobserve(el));
  }, []);

  // PRODUCT CARDS
  const cards = [
    { id: 1, name: "Organic Vegetables", image: `${process.env.PUBLIC_URL}/images/Organic.png`, discount: "30% OFF" },
    { id: 2, name: "Fresh Nuts", image: `${process.env.PUBLIC_URL}/images/Nuts.png` },
    { id: 3, name: "Healthy Salad Bowl", image: `${process.env.PUBLIC_URL}/images/Salad.png` },
    { id: 4, name: "Natural Fruit Juice", image: `${process.env.PUBLIC_URL}/images/juice.png` },
    { id: 5, name: "Strawberry", image: `${process.env.PUBLIC_URL}/images/Strawbarry.png`, discount: "20% OFF" },
    { id: 6, name: "Avocado", image: `${process.env.PUBLIC_URL}/images/Avacado.png` },
    { id: 7, name: "Banana", image: `${process.env.PUBLIC_URL}/images/Banana.png` },
    { id: 8, name: "Apple", image: `${process.env.PUBLIC_URL}/images/Apple.png` },
  ];

  // COUNTDOWN TIMER
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7); // 7 days from now
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      if (distance < 0) { clearInterval(timer); return; }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // TESTIMONIAL SLIDER COMPONENT
  const TestimonialSlider = () => {
    const testimonials = [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
        text: "This service is fantastic! I've never had such a smooth experience.",
        name: "Garreth Smith",
        position: "System Analyst",
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
        text: "Outstanding quality and top-notch support. Highly recommended!",
        name: "Amanda Lee",
        position: "Marketing Manager",
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
        text: "Truly impressive! The design and functionality are amazing.",
        name: "John Carter",
        position: "UI/UX Designer",
      },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 4000);
      return () => clearInterval(interval);
    }, [testimonials.length]);

    const handleNext = () => setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    const handlePrev = () => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
      <section className="testimonial-section">
        <h2 className="testimonial-heading">What Our Customers Say</h2>
        <div className="testimonial-slider">
          <div className="testimonial-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {testimonials.map((t) => (
              <div className="testimonial-card" key={t.id}>
                <div className="testimonial-image-wrapper">
                  <img src={t.image} alt={t.name} className="testimonial-image" />
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <h3 className="testimonial-name">{t.name}</h3>
                <p className="testimonial-position">{t.position}</p>
              </div>
            ))}
          </div>
          <button className="nav-btn prev" onClick={handlePrev}>❮</button>
          <button className="nav-btn next" onClick={handleNext}>❯</button>
        </div>
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <span key={index} className={`dot ${index === currentSlide ? "active" : ""}`} onClick={() => setCurrentSlide(index)}></span>
          ))}
        </div>
      </section>
    );
  };

  // MAIN RETURN
  return (
    <div className="container">
      {/* HERO SLIDER */}
      <div className="hero">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Food ${index + 1}`} className={`hero-image ${index === current ? "active" : ""}`} />
        ))}
        <div className="hero-overlay">
          <h1 className="hero-headline">Delicious Foods Await You</h1>
          <button className="hero-button">Order Now</button>
        </div>
      </div>

      {/* FEATURES */}
      <section className="features">
        {[
          { icon: `${process.env.PUBLIC_URL}/images/Transport.png`, title: "FREE SHIPPING", desc: "On order over $100", color: "pink" },
          { icon: `${process.env.PUBLIC_URL}/images/Fresh.png`, title: "ALWAYS FRESH", desc: "Product well packaged", color: "gold" },
          { icon: `${process.env.PUBLIC_URL}/images/Quality.png`, title: "SUPERIOR QUALITY", desc: "Quality products", color: "blue" },
          { icon: `${process.env.PUBLIC_URL}/images/Customer.png`, title: "SUPPORT", desc: "24/7 Support", color: "yellow" },
        ].map((f, i) => (
          <div className="feature fade-up" key={i} ref={addToRefs}>
            <div className={`icon-circle ${f.color}`}>
              <img src={f.icon} alt={f.title} />
            </div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </section>

      {/* HERO CATEGORIES */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-left">
            <div className="category fade-up" ref={addToRefs}><img src={`${process.env.PUBLIC_URL}/images/Fruites.jpg`} alt="Fruits" /><span className="label">Fruits</span></div>
            <div className="category fade-up" ref={addToRefs}><img src={`${process.env.PUBLIC_URL}/images/Vegetables.jpg`} alt="Vegetables" /><span className="label">Vegetables</span></div>
          </div>
          <div className="hero-center">
            <div className="content fade-up" ref={addToRefs}><h2>Vegetables</h2><p>Protect the health of every home</p><button className="shop-btn">Shop now</button></div>
            <div className="category fade-up" ref={addToRefs}><img src={`${process.env.PUBLIC_URL}/images/fruite.jpg`} alt="Juices" /><span className="label">Juices</span></div>
          </div>
          <div className="hero-right">
            <div className="category fade-up" ref={addToRefs}><img src={`${process.env.PUBLIC_URL}/images/FruiteJuice.jpeg`} alt="Juices" /><span className="label">Juices</span></div>
            <div className="category fade-up" ref={addToRefs}><img src={`${process.env.PUBLIC_URL}/images/Nuts.webp`} alt="Dried" /><span className="label">Dried</span></div>
          </div>
        </div>
      </section>

      {/* PRODUCT CARDS */}
      <section className="product-section">
        <h2 className="product-title">Featured Products</h2>
        <div className="product-grid">
          {cards.map((card) => (
            <div className="product-card" key={card.id}>
              {card.discount && <span className="discount-badge">{card.discount}</span>}
              <div className="product-image-wrapper">
                <img src={card.image} alt={card.name} className="product-image" />
                <div className="cart-popup"><i className="fas fa-shopping-cart"></i></div>
              </div>
              <h3 className="product-name">{card.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* DEAL OF THE DAY */}
      <section className="deal-section">
        <div className="deal-image">
          <img 
            src="https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=800&q=80" 
            alt="Fresh Vegetables" 
          />
        </div>
        <div className="deal-content">
          <p className="deal-subtitle">Best Price For You</p>
          <h1 className="deal-title">Deal of the day</h1>
          <p className="deal-description">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
          </p>
          <h2 className="product-name-deal">Spinach</h2>
          <div className="price-container">
            <span className="original-price">$10</span>
            <span className="sale-price">now $5 only</span>
          </div>
          <div className="countdown-timer">
            <div className="time-block">
              <span className="time-value">{timeLeft.days}</span>
              <span className="time-label">DAYS</span>
            </div>
            <div className="time-block">
              <span className="time-value">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="time-label">HOURS</span>
            </div>
            <div className="time-block">
              <span className="time-value">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="time-label">MINUTES</span>
            </div>
            <div className="time-block">
              <span className="time-value">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="time-label">SECONDS</span>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <TestimonialSlider />
      </section>

      {/* PARTNERS */}
      <section className="partners-section fade-up" ref={addToRefs}>
        <h2 className="partners-heading">Our Proud Customers & Partners</h2>
        <div className="partners-logos">
          <img src={`${process.env.PUBLIC_URL}/images/Google.jpg`} alt="Google" className="partner-logo" />
          <img src={`${process.env.PUBLIC_URL}/images/microsoft.png`} alt="Microsoft" className="partner-logo" />
          <img src={`${process.env.PUBLIC_URL}/images/tesla.jpg`} alt="Tesla" className="partner-logo" />
          <img src={`${process.env.PUBLIC_URL}/images/orcale.png`} alt="Oracle" className="partner-logo" />
          <img src={`${process.env.PUBLIC_URL}/images/amazon.png`} alt="Amazon" className="partner-logo" />
        </div>
      </section>
    </div>
  );
}
