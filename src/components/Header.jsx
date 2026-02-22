// components/Header.jsx
// Sticky header with scroll detection, mobile menu, and Book Now CTA

import { useState, useEffect } from 'react';
import './Header.css';

const navLinks = [
  { href: '#about',    label: 'Про нас'   },
  { href: '#rooms',    label: 'Номери'    },
  { href: '#services', label: 'Сервіси'   },
  { href: '#gallery',  label: 'Галерея'   },
  { href: '#location', label: 'Розташування' },
  { href: '#contact',  label: 'Контакти'  },
];

export default function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on outside click / scroll
  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [menuOpen]);

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
            <a key={href} href={href} className="header__nav-link">
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#contact" className="btn btn-primary header__cta">
          Забронювати
        </a>

        {/* Burger */}
        <button
          className={`header__burger${menuOpen ? ' header__burger--open' : ''}`}
          onClick={(e) => { e.stopPropagation(); setMenuOpen(prev => !prev); }}
          aria-label="Меню"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`header__drawer${menuOpen ? ' header__drawer--open' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {navLinks.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="header__drawer-link"
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
        <a href="#contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
          Забронювати
        </a>
      </div>
    </header>
  );
}
