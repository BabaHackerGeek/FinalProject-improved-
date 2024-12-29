// import React from 'react';

// const MarketingAndBranding = () => (
//   <div>
//     <h2>Marketing & Branding</h2>
//     <ul>
//       <li>Flyers</li>
//       <li>Digital and Print Announcements</li>
//       <li>Business Cards</li>
//       <li>Posters</li>
//       <li>Brochures</li>
//       <li>Invitations</li>
//       <li>Event Branding Packages</li>
//     </ul>
//   </div>
// );

// export default MarketingAndBranding;

// MarketingAndBranding.tsx
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const MarketingAndBranding: FC = () => (
  <div>
    <h2>Marketing & Branding</h2>
    <p>Discover our comprehensive marketing and branding solutions:</p>
    <ul>
      <li><Link to="/marketing-and-branding/flyers">Flyers</Link></li>
      <li><Link to="/marketing-and-branding/announcements">Digital and Print Announcements</Link></li>
      <li><Link to="/marketing-and-branding/business-cards">Business Cards</Link></li>
      <li><Link to="/marketing-and-branding/posters">Posters</Link></li>
      <li><Link to="/marketing-and-branding/brochures">Brochures</Link></li>
      <li><Link to="/marketing-and-branding/invitations">Invitations</Link></li>
      <li><Link to="/marketing-and-branding/branding-packages">Event Branding Packages</Link></li>
    </ul>
  </div>
);

export default MarketingAndBranding;
