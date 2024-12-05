import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'; // Import social media icons

const Footer = () => {
  return (
   <>
    <footer>
        <div className="footer-cont">
            <div className="footer">
                <div className="company"><img src="./src/assets/logo.jpg" alt=""/></div>
                <div className="cust-care">
                    <h3>Customer Care</h3>
                    <ul>
                        <li><a href="#">Contact Us</a></li>
                        <li><i className="fa-solid fa-phone"></i>  +91 78983 339525</li>
                        <li><i className="fa-solid fa-envelope"></i>  xyz@gmail.com</li>
                        
                    </ul>
                </div>
                <div className="link">
                    <h3>Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#">WeightGain</a></li>
                        <li><a href="#">WeightLose</a></li>
                    </ul>
                </div>
                <div className="social">
                    <h3>We Provide</h3>
                    <ul>
                        <li><a href="#">Bmi Calculator</a></li>
                        <li><a href="#">Calorie Calculator</a></li>
                        <li><a href="#">Workout Plans</a></li>
                        
                    </ul>
                </div>
            </div>
           
            <div className="copyright">
                <h4>Copyright @ 2024 BodyCraft</h4>
            </div>
        </div>
 </footer>
   </>
  );
};

export default Footer;
