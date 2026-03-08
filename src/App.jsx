// App.jsx
// Root component — assembles the full single-page hotel website

import { lazy, Suspense } from 'react';
import './styles/main.css';
import './styles/utils.css';

import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';

const Rooms    = lazy(() => import('./sections/Rooms'));
const Services = lazy(() => import('./sections/Services'));
const Gallery  = lazy(() => import('./sections/Gallery'));
const Location = lazy(() => import('./sections/Location'));

export default function App() {
  return (
    <>
      {/* Skip to main content — accessibility */}
      <a href="#main-content" className="skip-link">Перейти до основного вмісту</a>

      {/* Fixed navigation */}
      <Header />

      {/* Page content */}
      <main id="main-content">
        <Hero />
        <About />
        <Suspense fallback={null}>
          <Rooms />
          <Services />
          <Gallery />
          <Location />
        </Suspense>
      </main>

      <Footer />
      <BottomNav />
    </>
  );
}
