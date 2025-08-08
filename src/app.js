import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import NetworkBackground from './components/NetworkBackground';  // ✅ NEW IMPORT
import ServerRack from './components/ServerRack';              // ✅ NEW IMPORT
import './animations.css';                                     // ✅ NEW IMPORT

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <NetworkBackground />  {/* ✅ NEW COMPONENT */}
        <ServerRack />        {/* ✅ NEW COMPONENT */}
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
