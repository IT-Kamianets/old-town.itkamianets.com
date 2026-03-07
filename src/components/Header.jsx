// components/Header.jsx
// Sticky header with scroll detection, mobile menu, and Book Now CTA

import { useState, useEffect } from 'react';
import './Header.css';

const navLinks = [
  { href: '#about', label: 'Про нас' },
  { href: '#rooms', label: 'Номери' },
  { href: '#services', label: 'Сервіси' },
  { href: '#gallery', label: 'Галерея' },
  { href: '#location', label: 'Контакти' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    let rafId = null;
    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 60);
        rafId = null;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Intersection Observer для секцій (оптимізований scroll-spy)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection('#' + entry.target.id);
        }
      });
    }, {
      rootMargin: '-30% 0px -70% 0px'
    });

    // Находимо і спостерігаємо за секціями
    setTimeout(() => {
      navLinks.forEach(link => {
        const el = document.querySelector(link.href);
        if (el) observer.observe(el);
      });
    }, 100);

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__inner container">

        {/* Logo */}
        <a href="#hero" className="header__logo" aria-label="Old Town — головна">
          <span className="header__logo-main">Old Town</span>
          <span className="header__logo-sub">Гостерія · Кам'янець-Подільський</span>
        </a>

        {/* Desktop Nav */}
        <nav className="header__nav" aria-label="Головна навігація">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`header__nav-link ${activeSection === href ? 'header__nav-link--active' : ''}`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile Call CTA */}
        <a href="tel:+380673801949" className="header__mobile-call" aria-label="Зателефонувати">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </a>

      </div>
    </header>
  );
}
