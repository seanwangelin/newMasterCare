import React from 'react';
import { Link } from 'react-router-dom';
import '../style/navbar.css';

export default function Navbar(){

    return (
        <div id='navbar'>
            <div>
                <div>Mastercare</div>
                <div>Building Services Inc.</div>
            </div>
            <Link to="/" className="navLink">Home</Link>
            <Link to="/Services" className="navLink">Services</Link>
            <Link to="/About" className="navLink">About</Link>
            <Link to="/Contact" className="navLink">Contact</Link>
        </div>
    )
}