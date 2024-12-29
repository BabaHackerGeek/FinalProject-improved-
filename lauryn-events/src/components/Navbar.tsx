import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: FC = () => (
  <nav className="navbar">
    <Link to="/">Home</Link>

    {/* Private Events Dropdown */}
    <div className="navbar-item">
      <Link to="/private-events">Private Events</Link>
      <div className="dropdown-menu">
        <Link to="/private-events/marriage-proposal">Marriage Proposal</Link>
        <Link to="/private-events/engagements">Engagements</Link>
        <Link to="/private-events/weddings">Weddings</Link>
        <Link to="/private-events/bar-mitzvah">Bar/Bat Mitzvah</Link>
        <Link to="/private-events/corporate-celebrations">Corporate Celebrations</Link>
        <Link to="/private-events/birthdays">Birthdays</Link>
        <Link to="/private-events/luxury-events">Luxury Events in Hotels</Link>
      </div>
    </div>

    {/* Marketing & Branding Dropdown */}
    <div className="navbar-item">
      <Link to="/marketing-and-branding">Marketing & Branding</Link>
      <div className="dropdown-menu">
        <Link to="/marketing-and-branding/flyers">Flyers</Link>
        <Link to="/marketing-and-branding/announcements">Digital and Print Announcements</Link>
        <Link to="/marketing-and-branding/business-cards">Business Cards</Link>
        <Link to="/marketing-and-branding/posters">Posters</Link>
        <Link to="/marketing-and-branding/brochures">Brochures</Link>
        <Link to="/marketing-and-branding/invitations">Invitations</Link>
        <Link to="/marketing-and-branding/branding-packages">Event Branding Packages</Link>
      </div>
    </div>

    <Link to="/portfolio">Portfolio</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/about">About us</Link>
  </nav>
);

export default Navbar;
