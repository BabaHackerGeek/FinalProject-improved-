// import React from 'react';

// const PrivateEvents = () => (
//   <div>
//     <h2>Private Events</h2>
//     <ul>
//       <li>Marriage Proposal</li>
//       <li>Engagements</li>
//       <li>Weddings</li>
//       <li>Bar/Bat Mitzvah</li>
//       <li>Corporate Celebrations</li> {/* "Corporate Celebrations" could be another option */}
//       <li>Birthdays</li>
//       <li>Luxury Events in Hotels</li>
//     </ul>
//   </div>
// );

// export default PrivateEvents;


// PrivateEvents.js
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const PrivateEvents: FC = () => (
  <div>
    <h2>Private Events</h2>
    <p>Explore our private event offerings, tailored to your needs:</p>
    <ul>
      <li><Link to="/private-events/marriage-proposal">Marriage Proposal</Link></li>
      <li><Link to="/private-events/engagements">Engagements</Link></li>
      <li><Link to="/private-events/weddings">Weddings</Link></li>
      <li><Link to="/private-events/bar-mitzvah">Bar/Bat Mitzvah</Link></li>
      <li><Link to="/private-events/corporate-celebrations">Corporate Celebrations</Link></li>
      <li><Link to="/private-events/birthdays">Birthdays</Link></li>
      <li><Link to="/private-events/luxury-events">Luxury Events in Hotels</Link></li>
    </ul>
  </div>
);

export default PrivateEvents;
