import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { clients } from '../data/clients';
import { testimonials } from '../data/testimonials';
import Testimonial from '../components/Testimonial';

const Home: React.FC = () => {
    const featuredServices = services.slice(0, 3);
    const featuredTestimonials = testimonials.slice(0, 3);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            Creating Exceptional
                            <span className="highlight"> Brand Experiences</span>
                        </h1>
                        <p className="hero-description">
                            HT Brand specializes in exhibition design, implementation, and BTL activities. 
                            We transform your brand vision into engaging experiences that drive results.
                        </p>
                        <div className="hero-buttons">
                            <Link to="/services" className="btn btn-primary">
                                <i className="fas fa-rocket"></i>
                                Explore Services
                            </Link>
                            <Link to="/contact" className="btn btn-secondary">
                                <i className="fas fa-paper-plane"></i>
                                Get Quote
                            </Link>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop" alt="Exhibition Design" />
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about-section">
                <div className="container">
                    <div className="about-content">
                        <div className="about-text">
                            <h2 className="section-title">
                                <i className="fas fa-star"></i>
                                About HT Brand
                            </h2>
                            <p className="section-description">
                                With over a decade of experience in the events industry, HT Brand has established itself as a leader 
                                in exhibition design, implementation, and BTL activities. We combine creativity with strategic thinking 
                                to deliver exceptional brand experiences.
                            </p>
                            <div className="about-stats">
                                <div className="stat">
                                    <div className="stat-icon">
                                        <i className="fas fa-trophy"></i>
                                    </div>
                                    <h3>500+</h3>
                                    <p>Projects Completed</p>
                                </div>
                                <div className="stat">
                                    <div className="stat-icon">
                                        <i className="fas fa-heart"></i>
                                    </div>
                                    <h3>200+</h3>
                                    <p>Happy Clients</p>
                                </div>
                                <div className="stat">
                                    <div className="stat-icon">
                                        <i className="fas fa-calendar"></i>
                                    </div>
                                    <h3>10+</h3>
                                    <p>Years Experience</p>
                                </div>
                            </div>
                            <Link to="/about" className="btn btn-primary">
                                <i className="fas fa-arrow-right"></i>
                                Learn More About Us
                            </Link>
                        </div>
                        <div className="about-image">
                            <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop" alt="Our Team" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            <i className="fas fa-cogs"></i>
                            Our Services
                        </h2>
                        <p className="section-subtitle">
                            Comprehensive solutions for all your exhibition and event needs
                        </p>
                    </div>
                    
                    <div className="grid">
                        {featuredServices.map(service => (
                            <div key={service.id} className="card service-card">
                                <div className="card-icon">
                                    <i className={service.icon || 'fas fa-star'}></i>
                                </div>
                                <div className="service-image">
                                    <img src={service.thumbnail} alt={service.name} />
                                </div>
                                <div className="service-content">
                                    <h3 className="service-title">{service.name}</h3>
                                    <p className="service-description">{service.description}</p>
                                    <Link to={`/services/${service.id}`} className="service-link">
                                        Learn More →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="services-cta">
                        <Link to="/services" className="view-all-btn">View All Services</Link>
                    </div>
                </div>
            </section>

            {/* Clients Section */}
            <section className="clients-section">
                <div className="container">
                    <h2 className="section-title">Trusted by Leading Brands</h2>
                    <div className="clients-grid">
                        {clients.slice(0, 6).map(client => (
                            <div key={client.id} className="client-logo">
                                <img src={client.logo} alt={client.name} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">What Our Clients Say</h2>
                        <p className="section-subtitle">
                            Hear from our satisfied clients about their experience with HT Brand
                        </p>
                    </div>
                    
                    <div className="testimonials-grid">
                        {featuredTestimonials.map(testimonial => (
                            <Testimonial key={testimonial.id} testimonial={testimonial} />
                        ))}
                    </div>
                    
                    <div className="testimonials-cta">
                        <Link to="/about#testimonials" className="view-all-testimonials">View All Testimonials</Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Ready to Elevate Your Brand?</h2>
                        <p className="cta-description">
                            Let's discuss how we can create exceptional experiences for your brand
                        </p>
                        <Link to="/contact" className="cta-button">Get Started Today</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;