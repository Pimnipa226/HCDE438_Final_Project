import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar () {
    return (
        <nav className="navbar">
            <div className="navbar-logo">Goalify</div>;
            <ul className="navbar-links">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;