// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import PrivateEvents from './pages/PrivateEvents';
// import MarketingAndBranding from './pages/MarketingAndBranding';

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Navbar />
//       <div className="content">
//         <Routes>
//           <Route path="/" element={<h2>Welcome to Lauryn & Co. Prestige Events!</h2>} />
//           <Route path="/private-events" element={<PrivateEvents />} />
//           <Route path="/marketing-and-branding" element={<MarketingAndBranding />} />
//           <Route path="/portfolio" element={<h2>Portfolio Page</h2>} />
//           <Route path="/contact" element={<h2>Contact Page</h2>} />
//           <Route path="/about" element={<h2>About Us</h2>} />
//         </Routes>
//       </div>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

// App.tsx
import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import WelcomeMessage from './pages/WelcomeMessage';
import Footer from './components/Footer';
import PrivateEvents from './pages/PrivateEvents';
import MarketingAndBranding from './pages/MarketingAndBranding';
import Contact from './pages/Contact';
import About from './pages/About';
import LegalConditions from './pages/LegalConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';

//MarketingSection
import Flyers from './pages/MarketingSections/Flyers';
import Announcements from './pages/MarketingSections/Announcements';
import BusinessCards from './pages/MarketingSections/BusinessCards';
import Posters from './pages/MarketingSections/Posters';
import Brochures from './pages/MarketingSections/Brochures';
import Invitations from './pages/MarketingSections/Invitations';
import BrandingPackages from './pages/MarketingSections/BrandingPackages';

//PrivateEventSections
import MarriageProposal from './pages/PrivateEventSections/MarriageProposal';
import Engagements from './pages/PrivateEventSections/Engagements';
import Weddings from './pages/PrivateEventSections/Weddings';
import BarMitzvah from './pages/PrivateEventSections/BarMitzvah';
import CorporateCelebrations from './pages/PrivateEventSections/CorporateCelebrations';
import Birthdays from './pages/PrivateEventSections/Birthdays';
import LuxuryEvents from './pages/PrivateEventSections/LuxuryEvents';

const App: FC = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<WelcomeMessage />} />
          <Route path="/private-events" element={<PrivateEvents />} />
          <Route path="/marketing-and-branding" element={<MarketingAndBranding />} />
          <Route path="/private-events/marriage-proposal" element={<MarriageProposal />} />
          <Route path="/private-events/engagements" element={<Engagements />} />
          <Route path="/private-events/weddings" element={<Weddings />} />
          <Route path="/private-events/bar-mitzvah" element={<BarMitzvah />} />
          <Route path="/private-events/corporate-celebrations" element={<CorporateCelebrations />} />
          <Route path="/private-events/birthdays" element={<Birthdays />} />
          <Route path="/private-events/luxury-events" element={<LuxuryEvents />} />
          <Route path="/marketing-and-branding/flyers" element={<Flyers />} />
          <Route path="/marketing-and-branding/announcements" element={<Announcements />} />
          <Route path="/marketing-and-branding/business-cards" element={<BusinessCards />} />
          <Route path="/marketing-and-branding/posters" element={<Posters />} />
          <Route path="/marketing-and-branding/brochures" element={<Brochures />} />
          <Route path="/marketing-and-branding/invitations" element={<Invitations />} />
          <Route path="/marketing-and-branding/branding-packages" element={<BrandingPackages />} />
          <Route path="/portfolio" element={<h2>Portfolio Page</h2>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/legal-conditions" element={<LegalConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
