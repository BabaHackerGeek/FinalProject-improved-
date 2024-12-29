import React, { FC } from 'react';
import './Header.css';
import mainLogo from '../assets/Lauryn-logo-image.jpg'; // Main logo
import sideLogo from '../assets/Lauryn-logo-image2.jpg'; // Additional image

const Header: FC = () => (
  <header className="header">
    <div className="header-logo2">
      <img src={sideLogo} alt="Lauryn & Co. Side Logo" className="side-logo" />
    </div>
    <div className="header-logo">
      <img src={mainLogo} alt="Lauryn & Co. Main Logo" className="main-logo" />
    </div>
    <div className="header-logo2">
      <img src={sideLogo} alt="Lauryn & Co. Side Logo" className="side-logo" />
    </div>
  </header>
);

export default Header;
