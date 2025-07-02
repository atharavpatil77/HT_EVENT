import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';

const ServiceDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const service = services.find(service => service.id === Number(id));

    if (!service) {
        return (
            <div className="service-not-found">
                <div className="container">
                    <h1>Service Not Found</h1>
                    <p>The service you're looking for doesn't exist.</p>
                    <Link to="/services" className="back-link">Back to Services</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="service-detail-page">
            {/* Breadcrumb */}
            <section className="breadcrumb">
                <div className="container">
                    <nav className="breadcrumb-nav">
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <Link to="/services">Services</Link>
                        <span>/</span>
                        <span>{service.name}</span>
                    </nav>
                </div>
            </section>

            {/* Service Hero */}
            <section className="service-hero">
                <div className="container">
                    <div className="service-hero-content">
                        <div className="service-hero-text">
                            <h1 className="service-title">{service.name}</h1>
                            <p className="service-description">{service.description}</p>
                            <Link to="/contact" className="contact-btn">
                                Get Quote
                            </Link>
                        </div>
                        <div className="service-hero-image">
                            <img src={service.thumbnail} alt={service.name} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Details */}
            <section className="service-details">
                <div className="container">
                    <div className="service-content">
                        <h2 className="details-title">About This Service</h2>
                        <div className="service-info">
                            <p>
                                Our {service.name.toLowerCase()} service is designed to deliver exceptional results for your brand. 
                                We combine creative excellence with strategic thinking to ensure your project not only meets but exceeds expectations.
                            </p>
                            
                            <div className="service-features">
                                <h3>What's Included:</h3>
                                <ul>
                                    <li>Comprehensive consultation and strategy development</li>
                                    <li>Creative concept design and visualization</li>
                                    <li>Project management and coordination</li>
                                    <li>On-site execution and support</li>
                                    <li>Post-event analysis and reporting</li>
                                </ul>
                            </div>

                            <div className="service-benefits">
                                <h3>Benefits:</h3>
                                <ul>
                                    <li>Increased brand visibility and recognition</li>
                                    <li>Enhanced customer engagement and interaction</li>
                                    <li>Measurable ROI and business impact</li>
                                    <li>Professional execution with attention to detail</li>
                                    <li>Comprehensive support throughout the project</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sample Images Gallery */}
            <section className="service-gallery">
                <div className="container">
                    <h2 className="gallery-title">Sample Work</h2>
                    <p className="gallery-subtitle">
                        Explore some of our previous projects and see the quality of our work
                    </p>
                    
                    <div className="gallery-grid">
                        {service.sampleImages.map((image, index) => (
                            <div key={index} className="gallery-item">
                                <img src={image} alt={`${service.name} sample ${index + 1}`} />
                                <div className="gallery-overlay">
                                    <span>Sample Project {index + 1}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="service-process">
                <div className="container">
                    <h2 className="process-title">Our Process</h2>
                    <div className="process-steps">
                        <div className="process-step">
                            <div className="step-number">1</div>
                            <h3>Consultation</h3>
                            <p>We begin with understanding your requirements and objectives</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">2</div>
                            <h3>Planning</h3>
                            <p>Detailed planning and strategy development for your project</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">3</div>
                            <h3>Design</h3>
                            <p>Creative design and visualization of the final concept</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">4</div>
                            <h3>Execution</h3>
                            <p>Professional implementation with quality assurance</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="service-cta">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Get Started?</h2>
                        <p>Contact us today to discuss your {service.name.toLowerCase()} requirements</p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="primary-btn">Contact Us</Link>
                            <Link to="/services" className="secondary-btn">View All Services</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;