import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';

const Services: React.FC = () => {
    return (
        <div className="services-page">
            {/* Hero Section */}
            <section className="services-hero">
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">Our Services</h1>
                        <p className="hero-subtitle">
                            Comprehensive event and exhibition solutions tailored to elevate your brand and engage your audience
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid Section */}
            <section className="services-grid-section">
                <div className="container">
                    <div className="services-intro">
                        <h2 className="section-title">What We Offer</h2>
                        <p className="section-description">
                            From exhibition design to BTL activities, we provide end-to-end solutions that bring your brand vision to life
                        </p>
                    </div>
                    
                    <div className="services-grid">
                        {services.map((service) => (
                            <div key={service.id} className="service-card">
                                <div className="service-image">
                                    <img src={service.thumbnail} alt={service.name} />
                                    <div className="service-overlay">
                                        <Link to={`/services/${service.id}`} className="service-link">
                                            <span>Learn More</span>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="service-content">
                                    <h3 className="service-title">{service.name}</h3>
                                    <p className="service-description">{service.description}</p>
                                    <Link to={`/services/${service.id}`} className="service-btn">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="services-cta">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Ready to Elevate Your Brand?</h2>
                        <p className="cta-description">
                            Let's discuss how our services can help you create memorable experiences that drive results
                        </p>
                        <Link to="/contact" className="cta-button">
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;