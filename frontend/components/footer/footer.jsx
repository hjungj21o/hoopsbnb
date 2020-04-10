import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <section className="about">
                    <ul className="footer-cat">
                        <li className="footer-title">ABOUT</li>
                        <li>Diversity & Belonging</li>
                        <li>Accessibility</li>
                        <li>Trust & Safety</li>
                        <li>Hoopsbnb Citizen</li>
                        <li>Newsroom</li>
                    </ul>
                </section>
                <section className="communty">
                    <ul className="footer-cat">
                        <li className="footer-title">COMMUNITY</li>
                        <li>Hoopsbnb Magazine</li>
                        <li>Hoopsbnb for Work</li>
                        <li>Invite friends</li>
                        <li>Gift cards</li>
                        <li>Careers</li>
                    </ul>
                </section>
                <section className="host">
                    <ul className="footer-cat">
                        <li className="footer-title">HOST</li>
                        <li>Host your hoops</li>
                        <li>Responsible hosting</li>
                        <li>Olympics</li>
                        <li>NBA</li>
                        <li>Resources Center</li>
                    </ul>
                </section>
                <section className="about">
                    <ul className="footer-cat">
                        <li className="footer-title">SUPPORT</li>
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