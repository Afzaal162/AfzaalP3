import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";

export default function Hero() {
  // HERO SLIDER IMAGES
  const images = [
    "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=1200&h=500&fit=crop",
    "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1600&auto=format&fit=crop",
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
    {
      id: 1,
      name: "Organic Vegetables",
      image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=600&h=600&fit=crop",
      discount: "30% OFF"
    },
    {
      id: 2,
      name: "Fresh",
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1600&auto=format&fit=crop" // high-res, sharp nuts image
    },
    {
      id: 3,
      name: "Healthy Salad Bowl",
      image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=1600&auto=format&fit=crop" // vibrant salad image
    }
    ,
    {
      id: 5,
      name: "Strawberry",
      image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=800&h=600&fit=crop",
      discount: "20% OFF"
    },
    {
      id: 4,
      name: "Natural Fruit Juice",
      image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800&h=600&fit=crop"
    },

    {
      id: 6,
      name: "Apple",
      image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=800&h=600&fit=crop"
    },
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
          { icon: "https://t3.ftcdn.net/jpg/06/20/08/12/360_F_620081258_pRxp6QuDJ8edxHh6Wajgn4tqFjLV11tP.jpg", title: "FREE SHIPPING", desc: "On order over $100", color: "pink" },
          { icon: "data:image/jpeg;base64,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", title: "ALWAYS FRESH", desc: "Product well packaged", color: "gold" },
          { icon: "https://static.vecteezy.com/system/resources/thumbnails/003/678/261/small/quality-badge-icon-design-medal-and-ribbon-illustration-free-vector.jpg", title: "SUPERIOR QUALITY", desc: "Quality products", color: "blue" },
          { icon: "data:image/jpeg;base64,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", title: "SUPPORT", desc: "24/7 Support", color: "yellow" },
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
            <div className="category fade-up" ref={addToRefs}>
              <img src="https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,h_450,q_auto,w_710/f_auto/wip--21-healthiest-fruits-to-eat-in-2024-php3RGRfc" alt="Fruits" />
              <span className="label">Fruits</span>
            </div>
            <div className="category fade-up" ref={addToRefs}>
              <img src="https://cdn.britannica.com/63/186963-138-AEE87658/vegetables.jpg?w=800&h=450&c=crop" alt="Vegetables" />
              <span className="label">Vegetables</span>
            </div>
          </div>
          <div className="hero-center">
            <div className="content fade-up" ref={addToRefs}>
              <h2>Vegetables</h2>
              <p>Protect the health of every home</p>
              <button className="shop-btn">Shop now</button>
            </div>
            <div className="category fade-up" ref={addToRefs}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2UCGVGjrq4c0SZBYXhdjK8E-mWxQGZRumNQ&s" alt="Juices" />
              <span className="label">Juices</span>
            </div>
          </div>
          <div className="hero-right">
            <div className="category fade-up" ref={addToRefs}>
              <img src="https://refreshjuice.com.au/cdn/shop/articles/Featured_Image_1_1.png?v=1730101394" alt="Juices" />
              <span className="label">Juices</span>
            </div>
            <div className="category fade-up" ref={addToRefs}>
              <img src="https://swaadambarsarde.com/cdn/shop/files/967A3703-copy-1-scaled.jpg?v=1740725081" alt="Dried" />
              <span className="label">Dried</span>
            </div>
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
            src="https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          <img src="https://logo.clearbit.com/google.com" alt="Google" className="partner-logo" />
          <img src="https://logo.clearbit.com/microsoft.com" alt="Microsoft" className="partner-logo" />
          <img src="https://logo.clearbit.com/tesla.com" alt="Tesla" className="partner-logo" />
          <img src="https://logo.clearbit.com/oracle.com" alt="Oracle" className="partner-logo" />
          <img src="https://logo.clearbit.com/amazon.com" alt="Amazon" className="partner-logo" />
        </div>
      </section>
    </div>
  );
}
