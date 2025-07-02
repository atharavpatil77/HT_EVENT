import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    return (
        <header className="header">
            <div className="container">
                <Link to="/" className="logo">
                    <i className="fas fa-star"></i>
                    HT Brand
                </Link>
                
                <nav className="nav">
                    <Link to="/">
                        <i className="fas fa-home"></i>
                        Home
                    </Link>
                    <Link to="/about">
                        <i className="fas fa-users"></i>
                        About
                    </Link>
                    <Link to="/services">
                        <i className="fas fa-cogs"></i>
                        Services
                    </Link>
                    <Link to="/contact">
                        <i className="fas fa-envelope"></i>
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;