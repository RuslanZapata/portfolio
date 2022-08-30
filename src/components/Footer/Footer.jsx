import React from 'react';
import './footer.css';
import { BsLinkedin } from 'react-icons/bs'
import { FiInstagram } from 'react-icons/fi'
import { FaFacebookF } from 'react-icons/fa'
import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>RUSLAN ZAPATA</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com">
          <BsLinkedin className='footer__socials-icon' />
        </a>
        <a href="https://instagram.com">
          <FiInstagram className='footer__socials-icon' />
        </a>
        <a href="https://facebook.com">
          <FaFacebookF className='footer__socials-icon' />
        </a>
        <a href="https://twitter.com">
          <IoLogoTwitter className='footer__socials-icon' />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; RUSLAN ZAPATA. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer