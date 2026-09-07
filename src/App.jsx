import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { siteFeatures } from './config/siteFeatures';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { HomePage } from './pages/HomePage';
import { WeddingPage } from './pages/WeddingPage';
import { BabyBumpPage } from './pages/BabyBumpPage';
import { OthersPage } from './pages/OthersPage';
import { CategoryGalleryPage } from './pages/CategoryGalleryPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { QuoteBuilderPage } from './pages/QuoteBuilderPage';

// Helper to reset scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Wedding Hub & 5 Subcategory Galleries */}
        <Route path="/weddings" element={<WeddingPage />} />
        <Route path="/weddings/:subId" element={<CategoryGalleryPage />} />

        {/* Baby/Maternity Hub & 3 Subcategory Galleries (Protected by siteFeatures.babyBumpShots) */}
        <Route
          path="/baby-maternity"
          element={
            siteFeatures.babyBumpShots ? <BabyBumpPage /> : <Navigate to="/" replace />
          }
        />
        <Route
          path="/baby-maternity/:subId"
          element={
            siteFeatures.babyBumpShots ? <CategoryGalleryPage /> : <Navigate to="/" replace />
          }
        />

        {/* Others Hub & 4 Subcategory Galleries */}
        <Route path="/birthdays-events" element={<OthersPage />} />
        <Route path="/birthdays-events/:subId" element={<CategoryGalleryPage />} />

        {/* Master Content Pages */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Quote Builder */}
        <Route path="/build-your-quote" element={<QuoteBuilderPage />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
        <Header />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
