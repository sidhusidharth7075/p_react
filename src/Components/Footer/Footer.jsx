import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div id='footer' className="footer">
        <div className="footer-top">
           <div className="footer-top-left">
                <img src={logo} alt="" />
                <p>Passionate about building innovative solutions in software development, data science, and machine learning. Connect with me on LinkedIn, explore my projects on GitHub, or reach out at your-email@example.com.</p>
            </div> 
            <div className="footer-top-right">
                <div className="footer-email-input">
                   <img src={user_icon} alt="" /> 
                   <input type="email" placeholder='Enter your email'/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2025 Sidhu. Crafting innovative solutions with passion and precision.</p>
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
    </div>
  )
}

export default Footer