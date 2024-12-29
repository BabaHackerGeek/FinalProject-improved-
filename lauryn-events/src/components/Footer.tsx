import React, { FC } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import image1 from '../assets/Image1-Wedding.jpg';
import image2 from '../assets/Image2-Wedding.jpg';
import image3 from '../assets/Image3-Decoration.jpg';
import image4 from '../assets/Image4-Decoration.jpg';

const Footer: FC = () => (
  <div>
    <div className="image-gallery">
      <img src={image1} alt="Gallery 1" />
      <img src={image3} alt="Gallery 3" />
      <img src={image2} alt="Gallery 2" />
      <img src={image4} alt="Gallery 4" />
    </div>
    <footer className="footer">
      <p>&copy; 2024 Lauryn & Co. Prestige Events - All Rights Reserved</p>
      <p> Phone: +33 6 10 07 00 24 | E-mail: Lauryn@prestigeevents.com</p>
      <div className="social-links">
        <a 
          href="https://www.instagram.com/lauryn_abkz?igsh=NWM4MmxzYmtweXF4" 
          target="_blank" 
          title="Follow us on Instagram"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
        
        <a 
          href="https://www.youtube.com/" 
          target="_blank" 
          title="Follow us on Youtube"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube} size="lg" />
        </a>
      </div>
      
      <div className="footer-links">
        <a href="/legal-conditions">Legal Conditions & Terms</a>
        <a href="/privacy-policy">Privacy Policy</a>
      </div>
      
      <p>Website made by Baroukh Abadi</p>
    </footer>
  </div>
);

export default Footer;
