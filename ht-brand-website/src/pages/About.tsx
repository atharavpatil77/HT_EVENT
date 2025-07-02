import React from 'react';
import Testimonial from '../components/Testimonial';
import { testimonials } from '../data/testimonials';
import { clients } from '../data/clients';

const About: React.FC = () => {
    const successfulCampaigns = [
        {
            id: 1,
            title: "Tech Expo 2024",
            description: "A groundbreaking exhibition that showcased the latest technology innovations, attracting over 50,000 visitors and generating significant media coverage.",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop"
        },
        {
            id: 2,
            title: "Fashion Week Activation",
            description: "An immersive brand activation campaign during Fashion Week that created buzz across social media and increased brand engagement by 400%.",
            image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=250&fit=crop"
        },
        {
            id: 3,
            title: "Automotive Roadshow",
            description: "A nationwide roadshow for electric vehicle launch covering 15 cities, resulting in 25,000+ test drives and 5,000+ pre-orders.",
            image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&h=250&fit=crop"
        }
    ];

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="hero-content">
                    <h1 className="hero-title">About HT Brand</h1>
                    <p className="hero-subtitle">
                        Creating Exceptional Brand Experiences Through Innovation and Excellence
                    </p>
                </div>
            </section>

            {/* About Company Section */}
            <section className="about-company">
                <div className="container">
                    <div className="about-content">
                        <div className="about-text">
                            <h2 className="section-title">About Our Company</h2>
                            <p className="company-description">
                                HT Brand is a premier event company specializing in exhibition design, implementation, and BTL (Below-The-Line) activities. 
                                With over a decade of experience in the industry, we have established ourselves as leaders in creating memorable brand experiences 
                                that drive engagement and deliver measurable results.
                            </p>
                            <p className="company-description">
                                Our comprehensive approach combines creative design, strategic planning, and flawless execution to bring your brand vision to life. 
                                From concept development to post-event analysis, we handle every aspect of your exhibition and event needs with precision and professionalism.
                            </p>
                            
                            <div className="company-stats">
                                <div className="stat">
                                    <h3 className="stat-number">500+</h3>
                                    <p className="stat-label">Successful Projects</p>
                                </div>
                                <div className="stat">
                                    <h3 className="stat-number">200+</h3>
                                    <p className="stat-label">Happy Clients</p>
                                </div>
                                <div className="stat">
                                    <h3 className="stat-number">10+</h3>
                                    <p className="stat-label">Years of Experience</p>
                                </div>
                                <div className="stat">
                                    <h3 className="stat-number">50+</h3>
                                    <p className="stat-label">Cities Covered</p>
                                </div>
                            </div>
                        </div>
                        <div className="about-image">
                            <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop" alt="HT Brand Team" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="mission-vision">
                <div className="container">
                    <div className="mission-vision-content">
                        <div className="mission">
                            <h3 className="subsection-title">Our Mission</h3>
                            <p>
                                To create exceptional brand experiences that connect businesses with their audiences through innovative 
                                exhibition design, strategic event management, and impactful BTL activities that drive meaningful engagement 
                                and measurable business growth.
                            </p>
                        </div>
                        <div className="vision">
                            <h3 className="subsection-title">Our Vision</h3>
                            <p>
                                To be the leading event and exhibition company in India, known for our creativity, reliability, and ability 
                                to transform brand visions into reality, while setting new standards of excellence in the industry.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Successful Campaigns Section */}
            <section className="successful-campaigns">
                <div className="container">
                    <h2 className="section-title">Our Successful Campaigns</h2>
                    <p className="section-subtitle">
                        Explore some of our most impactful campaigns that have helped brands achieve remarkable results
                    </p>
                    
                    <div className="campaigns-grid">
                        {successfulCampaigns.map(campaign => (
                            <div key={campaign.id} className="campaign-card">
                                <div className="campaign-image">
                                    <img src={campaign.image} alt={campaign.title} />
                                </div>
                                <div className="campaign-content">
                                    <h3 className="campaign-title">{campaign.title}</h3>
                                    <p className="campaign-description">{campaign.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Clients Section */}
            <section className="clients-section">
                <div className="container">
                    <h2 className="section-title">Our Valued Clients</h2>
                    <p className="section-subtitle">
                        We are proud to have partnered with leading brands across various industries
                    </p>
                    
                    <div className="clients-grid">
                        {clients.map(client => (
                            <div key={client.id} className="client-card">
                                <div className="client-logo">
                                    <img src={client.logo} alt={client.name} />
                                </div>
                                <div className="client-info">
                                    <h3 className="client-name">{client.name}</h3>
                                    <p className="client-description">{client.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <div className="container">
                    <h2 className="section-title">What Our Clients Say</h2>
                    <p className="section-subtitle">
                        Hear from our satisfied clients about their experience working with HT Brand
                    </p>
                    
                    <div className="testimonials-grid">
                        {testimonials.map(testimonial => (
                            <Testimonial key={testimonial.id} testimonial={testimonial} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;