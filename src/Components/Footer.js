// src/Footer.js
import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h4 id='location-desc'>Click on below map to visit our office.</h4>
                <div className='address'>
                    <div className='location'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.928417847158!2d78.45532227490597!3d25.673667512238158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397713003a2a354b%3A0xaf6c74d39358480d!2sAajTak%20News%20Office!5e0!3m2!1sen!2sin!4v1723010566678!5m2!1sen!2sin" style={{width:"600", height:"450"}}></iframe>
                    </div>
                    <div className='branch'>
                        <h5>Our Branches</h5>
                        <ul>
                            <li>Indore</li>
                            <li>Bhopal</li>
                            <li>Pune</li>
                            <li>Delhi</li>
                        </ul>
                    </div>
                    <div className='head-office'>
                        <h5>Head office</h5>
                    <p>Address:xyz building 000-333,<br/> xyz floor,indore<br/>+91 000-0000-000 <br/>
                    xyz@example.com
                    </p>
                    </div>
                </div>
                <div className="social-media">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className="fab fa-youtube"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
                <p id='copyright'>&copy; 2024 News Website. All rights reserved.</p>

            </div>
        </footer>
    );
};

export default Footer;
