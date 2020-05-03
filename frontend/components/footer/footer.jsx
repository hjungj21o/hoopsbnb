import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <section className="about">
                    <ul className="footer-cat">
                        <li className="footer-title">THE CREATOR</li>
                        <li><a href="https://github.com/hjungj21o" target="_blank">GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/haejunchung/" target="_blank">LinkedIn</a></li>
                        <li><a href="https://angel.co/u/haejun-chung-19" target="_blank">AngelList</a></li>
                        <li><a href="https://hjungj21o.github.io/DigiDex/" target="_blank">DigiDex</a></li>
                        <li><a href="https://github.com/hjungj21o/Zoe" target="_blank">Zoe</a></li>
                    </ul>
                </section>
                <section className="host">
                    <ul className="footer-cat">
                        <li className="footer-title">BASKETBALL</li>
                        <li><a href="https://www.nba.com/" target="_blank">NBA</a></li>
                        <li><a href="https://www.wnba.com/#/panel2-1" target="_blank">WNBA</a></li>
                        <li><a href="https://gleague.nba.com/" target="_blank">G-League</a></li>
                        <li><a href="https://www.olympic.org/" target="_blank">Olympics</a></li>
                    </ul>
                </section>
                <section className="communty">
                    <ul className="footer-cat">
                        <li className="footer-title">THE REAL AIRBNB</li>
                        <li><a href="https://www.airbnb.com/" target="_blank">airbnb.com</a></li>
                        <li><a href="https://www.airbnb.com/openhomes/covid19relief" target="_blank">COVID-19 Contributions</a></li>
                        <li><a href="https://www.airbnb.com/magazine" target="_blank">Airbnb Magazine</a></li>
                    </ul>
                </section>
                <section className="about">
                    <ul className="footer-cat">
                        <li className="footer-title">SUPPORT</li>
                        <li><a href="https://www.peaceplayers.org/" target="_blank">Peace Players</a></li>
                        <li><a href="https://www.newheightsnyc.org/" target="_blank"></a>New Heights</li>
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