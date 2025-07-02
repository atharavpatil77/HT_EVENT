import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    return (
        <nav className="navigation">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link 
                        to="/" 
                        className={`nav-link ${isActive('/') ? 'active' : ''}`}
                    >
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link 
                        to="/about" 
                        className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                    >
                        About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link 
                        to="/services" 
                        className={`nav-link ${isActive('/services') ? 'active' : ''}`}
                    >
                        Services
                    </Link>
                </li>
                <li className="nav-item">
                    <Link 
                        to="/contact" 
                        className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;