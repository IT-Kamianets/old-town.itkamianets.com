// App.jsx
// Root component — assembles the full single-page hotel website

import './styles/main.css';
import './styles/utils.css';

import Header      from './components/Header';
import Hero        from './sections/Hero';
import About       from './sections/About';
import Rooms       from './sections/Rooms';
import Services    from './sections/Services';
import Gallery     from './sections/Gallery';
import Location    from './sections/Location';
import BookingForm from './sections/BookingForm';
import Footer      from './components/Footer';

export default function App() {
  return (
    <>
      {/* Skip to main content — accessibility */}
      <a href="#hero" className="skip-link">Перейти до основного вмісту</a>

      {/* Fixed navigation */}
      <Header />

      {/* Page content */}
      <main id="main-content">
        <Hero />
        <About />
        <Rooms />
        <Services />
        <Gallery />
        <Location />
        <BookingForm />
      </main>

      <Footer />
    </>
  );
}
