import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <Link to='/' onClick={(e) => { navigate('/'); }}><h1 className='logo'>make my flavour</h1></Link>
                    <p>At make my flavour, we believe food shopping should feel easy—and a little fun. Discover seasonal staples and small-batch treats, save your favourites, and reorder in a tap.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-323-345-6789</li>
                        <li>contact@makemyflavour.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2025 @ makemyflavour.com = All Right Reserved.</p>
        </div>
    )
}

export default Footer
