import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        budget: '',
        message: ''
    });
    
    const [showToast, setShowToast] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        
        // Show toast notification
        setShowToast(true);
        
        // Reset form
        setFormData({
            fullName: '',
            email: '',
            phoneNumber: '',
            budget: '',
            message: ''
        });
        
        // Hide toast after 3 seconds
        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    };

    return (
        <div className="contact-page">
            {/* Contact Info Section */}
            <div className="contact-info-section">
                <div className="contact-methods">
                    <div className="contact-method">
                        <div className="contact-icon">
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        <h3 className="contact-title">Call Us</h3>
                        <p className="contact-detail">(+91) 00000 00000</p>
                    </div>
                    
                    <div className="contact-method">
                        <div className="contact-icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <h3 className="contact-title">Mail Us</h3>
                        <p className="contact-detail">info@htbrand.com</p>
                    </div>

                    <div className="contact-method">
                        <div className="contact-icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <h3 className="contact-title">Visit Us</h3>
                        <p className="contact-detail">Mumbai, Maharashtra</p>
                    </div>
                </div>
            </div>

            {/* Get In Touch Section */}
            <div className="get-in-touch-section">
                <div className="contact-content">
                    <div className="contact-text">
                        <h2 className="section-title">Get In Touch</h2>
                        <h3 className="section-subtitle">Need Any Help? Or know about products</h3>
                        <p className="section-description">
                            Our experts at HT Brand are here to assist you with all your 
                            event and exhibition needs—contact us today!
                        </p>
                    </div>

                    <div className="contact-form-container">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-row">
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Enter Full Name"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            
                            <div className="form-row">
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    placeholder="Enter Phone No."
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="budget"
                                    placeholder="Enter Budget"
                                    value={formData.budget}
                                    onChange={handleInputChange}
                                />
                            </div>
                            
                            <div className="form-row">
                                <textarea
                                    name="message"
                                    placeholder="Type Message"
                                    rows={6}
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                ></textarea>
                            </div>
                            
                            <button type="submit" className="submit-button">
                                <i className="fas fa-paper-plane"></i>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            
            {/* Toast Notification */}
            {showToast && (
                <div className="toast-notification">
                    <div className="toast-content">
                        <i className="fas fa-check-circle"></i>
                        <span>Message sent successfully!</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;