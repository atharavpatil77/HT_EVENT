import React from 'react';

interface TestimonialData {
    id: number;
    name: string;
    position: string;
    company: string;
    feedback: string;
    image: string;
}

interface TestimonialProps {
    testimonial: TestimonialData;
}

const Testimonial: React.FC<TestimonialProps> = ({ testimonial }) => {
    return (
        <div className="testimonial-card">
            <div className="testimonial-content">
                <div className="quote-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.017 21V9.01699C14.017 7.01799 15.038 5.99999 17.051 5.99999C17.564 5.99999 18.077 5.99999 18.59 5.99999V3.99999C15.525 3.99999 13.017 6.50799 13.017 9.57299V21H14.017ZM6.01699 21V9.01699C6.01699 7.01799 7.03799 5.99999 9.05099 5.99999C9.56399 5.99999 10.077 5.99999 10.59 5.99999V3.99999C7.52499 3.99999 5.01699 6.50799 5.01699 9.57299V21H6.01699Z" fill="#f39c12"/>
                    </svg>
                </div>
                <p className="testimonial-feedback">
                    {testimonial.feedback}
                </p>
                <div className="testimonial-author">
                    <div className="author-image">
                        <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <div className="author-info">
                        <h4 className="author-name">{testimonial.name}</h4>
                        <p className="author-position">{testimonial.position}</p>
                        <p className="author-company">{testimonial.company}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;