import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
        <div className="footer-container">
            <section className="about">
                <h4 className="footer-title">ABOUT</h4>
                <ul className="footer-cat">
                    <li>Diversity & Belonging</li>
                    <li>Accessibility</li>
                    <li>Trust & Safety</li>
                    <li>Hoopsbnb Citizen</li>
                    <li>Newsroom</li>
                </ul>
            </section>
            <section className="communty">
                <h4 className="footer-title">COMMUNITY</h4>
                <ul className="footer-cat">
                    <li>Hoopsbnb Magazine</li>
                    <li>Hoopsbnb for Work</li>
                    <li>Invite friends</li>
                    <li>Gift cards</li>
                    <li>Careers</li>
                </ul>
            </section>
            <section className="host">
                <h4 className="footer-title">HOST</h4>
                <ul className="footer-cat">
                    <li>GitHub</li>
                    <li>LinkedIn</li>
                    <li>AngelList</li>
                </ul>
            </section>
            <section className="about">
                <h4 className="footer-title">Support</h4>
                <ul className="footer-cat">
                    <li>Help Center</li>
                    <li>FAQs</li>
                </ul>
            </section>
        </div>
        <div>
            Created by: Haejun Chung. 
        </div>
        </ footer>
    );
}

export default Footer;