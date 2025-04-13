import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import FeaturesPage from './pages/FeaturesPage';
import Footer from './components/Footer';
import { EmailPopup } from './components/EmailPopup';
import { useEmailPopup } from './hooks/useEmailPopup';

function App() {
  const { isOpen, close } = useEmailPopup();

  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tarifs" element={<PricingPage />} />
            <Route path="/fonctionnalites" element={<FeaturesPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <EmailPopup isOpen={isOpen} onClose={close} />
      </div>
    </Router>
  );
}

export default App;