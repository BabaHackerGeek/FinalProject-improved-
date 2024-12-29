import React, { FC } from 'react';
import './About.css';

const About: FC = () => (
  <div className="about-container">
    <h2>About Us</h2>
    <p>
      At Lauryn & Co. Prestige Events, we bring dreams to life with a touch of elegance and a deep commitment to perfection. With over a decade of experience, our team specializes in creating unforgettable moments for clients who expect only the best.
    </p>
    <p>
      We have had the pleasure of working with discerning clients from all over the world, designing exclusive events that reflect their unique visions. Our reputation has been built on delivering exceptional service, meeting every need with precision, and ensuring no detail is overlooked.
    </p>
    <p>
      From intimate gatherings to grand celebrations, we bring an unparalleled level of expertise to every event. Based in Nice, our services extend across the French Riviera, including Cannes, St. Tropez, St. Jean Cap Ferrat, and beyond.
    </p>
    <p className="about-motto">
      Our unique motto is simple: <em>"Let ALL your dreams come true."</em> Our team is here to handle every detail, so you can enjoy the magic of your special day with complete peace of mind.
    </p>
  </div>
);

export default About;