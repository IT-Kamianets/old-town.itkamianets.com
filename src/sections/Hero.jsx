// sections/Hero.jsx
// Fullscreen hero with parallax background and entrance animation

import { useEffect, useRef } from 'react';
import './Hero.css';

// Replace HERO_IMAGE with actual hotel facade photo
const HERO_IMAGE = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1800&q=85';

export default function Hero() {
  const bgRef = useRef(null);

  // Parallax on scroll
  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current) return;
      const y = window.scrollY;
      bgRef.current.style.transform = `translateY(${y * 0.35}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="hero" className="hero" aria-label="Ласкаво просимо до Гостерії Old Town">

      {/* Parallax Background */}
      <div className="hero__bg-wrap">
        <div
          ref={bgRef}
          className="hero__bg"
          style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
          role="img"
          aria-label="Вид на Кам'янець-Подільський — мальовниче Старе місто"
        />
      </div>

      {/* Overlay */}
      <div className="hero__overlay" />

      {/* Content */}
      <div className="hero__content container">
        <div className="hero__eyebrow">
          <span>Кам'янець-Подільський</span>
          <span className="hero__eyebrow-dot" />
          <span>Старе місто</span>
        </div>

        <h1 className="hero__title display-title">
          Гостерія<br />
          <em>Old Town</em>
        </h1>

        <p className="hero__desc">
          Зупиніться в самому серці середньовічного Кам'янця.<br />
          Кам'яні стіни, теплий інтер'єр, вид на місто.
        </p>

        <div className="hero__ctas">
          <a href="#contact" className="btn btn-primary">
            Забронювати номер
          </a>
          <a href="#rooms" className="btn btn-outline">
            Переглянути номери
          </a>
        </div>

        {/* Stats bar */}
        <div className="hero__stats">
          <div className="hero__stat">
            <strong>6</strong>
            <span>Номерів</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <strong>19 хв</strong>
            <span>До замку пішки</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <strong>4.9 ★</strong>
            <span>Оцінка гостей</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <strong>1 км</strong>
            <span>До центру міста</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" aria-hidden="true">
        <span>Гортайте</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
