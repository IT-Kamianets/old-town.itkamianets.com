// sections/Gallery.jsx

import { useState, useCallback, memo, useRef, useEffect } from 'react';
import { useRevealClass } from '../hooks/useInView';
import './Gallery.css';

// ← Імпорти замість рядків — Vite обробить правильно і на GitHub Pages
import photo1 from '../assets/gallery/photo1.webp';
import photo2 from '../assets/gallery/photo2.webp';
import photo9 from '../assets/gallery/photo9.webp';
import photo4 from '../assets/gallery/photo4.webp';
import photo5 from '../assets/gallery/photo5.webp';
import photo6 from '../assets/gallery/photo6.webp';
import photo7 from '../assets/gallery/photo7.webp';
import photo8 from '../assets/gallery/photo8.webp';
import photo13 from '../assets/gallery/photo13.webp';

const PHOTOS = [
  { src: photo1, alt: 'Фасад Гостерії "Old Town"', span: 'wide' },
  { src: photo2, alt: 'Інтер\'єр номера Делюкс', span: '' },
  { src: photo9, alt: 'Велика тераса з видом', span: 'tall' },
  { src: photo4, alt: 'Оформлення сімейного номера', span: '' },
  { src: photo5, alt: 'Затишний куточок у номері', span: '' },
  { src: photo6, alt: 'Вид на Старе місто', span: 'wide' },
  { src: photo7, alt: 'Двоспальне ліжко в номері', span: '' },
  { src: photo8, alt: 'Автентичні деталі інтер\'єру', span: '' },
  { src: photo13, alt: 'Атмосфера готелю ввечері', span: '' },
];

// memo — уникаємо перерендерів lightbox при зміні index
const Lightbox = memo(function Lightbox({ photo, index, total, onClose, onPrev, onNext }) {
  const touchStartX = useRef(null);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    document.addEventListener('keydown', onKeyDown);
    
    // Блокуємо скрол
    document.body.classList.add('no-scroll');
    const preventDefault = (e) => e.preventDefault();
    document.addEventListener('touchmove', preventDefault, { passive: false });
    
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.classList.remove('no-scroll');
      document.removeEventListener('touchmove', preventDefault);
    };
  }, [onClose, onPrev, onNext]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) onNext();
      else onPrev();
    }
    touchStartX.current = null;
  };

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true" aria-label="Перегляд фото">
      <button className="lightbox__close" onClick={onClose} aria-label="Закрити">✕</button>
      <button className="lightbox__prev" onClick={(e) => { e.stopPropagation(); onPrev(); }} aria-label="Попереднє">‹</button>
      
      <div className="lightbox__content">
        <div
          className="lightbox__img-wrap"
          onClick={(e) => e.stopPropagation()}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
          <div className="lightbox__counter">
            {index + 1} / {total}
          </div>
        </div>
      </div>

      <button className="lightbox__next" onClick={(e) => { e.stopPropagation(); onNext(); }} aria-label="Наступне">›</button>

      {/* Оптимізація: попереднє завантаження наступного фото */}
      <link rel="prefetch" href={PHOTOS[(index + 1) % total].src} />
    </div>
  );
});

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const header = useRevealClass('');
  const sliderRef = useRef(null);

  const openLightbox = useCallback((idx) => {
    setLightboxIdx(idx);
    document.body.style.overflow = 'hidden'; // Блокуємо скрол сайту
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIdx(null);
    document.body.style.overflow = ''; // Повертаємо скрол сайту
  }, []);

  const prevPhoto = useCallback(() => setLightboxIdx(i => (i - 1 + PHOTOS.length) % PHOTOS.length), []);
  const nextPhoto = useCallback(() => setLightboxIdx(i => (i + 1) % PHOTOS.length), []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(slider.children).indexOf(entry.target);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      {
        root: slider,
        threshold: 0.6,
      }
    );

    // Затримка гарантує що діти прорендерились
    const ts = setTimeout(() => {
      Array.from(slider.children).forEach((child) => observer.observe(child));
    }, 50);

    return () => {
      clearTimeout(ts);
      observer.disconnect();
    };
  }, []);

  const scrollToSlide = (index) => {
    const slider = sliderRef.current;
    if (!slider || !slider.children[index]) return;
    slider.children[index].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  };

  return (
    <>
      <section id="gallery" className="section gallery">
        <div className="container">

          <div ref={header.ref} className={`section-header ${header.className}`}>
            <p className="section-eyebrow">Галерея</p>
            <div className="divider" />
            <h2 className="section-title">Фотографії готелю</h2>
            <p className="section-subtitle">
              Подивіться на атмосферу Гостерії Old Town — фасад, номери,
              тераси та вулиці Старого міста.
            </p>
          </div>

          <div className="gallery__slider-wrap">
            <div className="gallery__slider-inner gallery__grid" role="list" aria-label="Фотогалерея готелю" ref={sliderRef}>
              {PHOTOS.map((photo, idx) => (
                <button
                  key={idx}
                  className={`gallery__item gallery__item--${photo.span || 'normal'}`}
                  onClick={() => openLightbox(idx)}
                  aria-label={`Відкрити: ${photo.alt}`}
                  role="listitem"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                    width="480"
                    height="240"
                    className="gallery__img"
                  />
                  <div className="gallery__item-overlay">
                    <span className="gallery__item-zoom" aria-hidden="true">+</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="gallery__pagination">
              {PHOTOS.map((_, i) => (
                <button
                  key={i}
                  className={`gallery__dot ${i === activeIndex ? 'gallery__dot--active' : ''}`}
                  onClick={() => scrollToSlide(i)}
                  aria-label={`Перейти до фото ${i + 1}`}
                  aria-current={i === activeIndex ? 'true' : undefined}
                />
              ))}
            </div>
            
            <div className="gallery__instagram-wrap">
              <a href="https://www.instagram.com/oldtown_kp" target="_blank" rel="noopener noreferrer" className="gallery__instagram-link">
                <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                Більше фото в Інстаграм
              </a>
            </div>
          </div>

        </div>
      </section>

      {lightboxIdx !== null && (
        <Lightbox
          photo={PHOTOS[lightboxIdx]}
          index={lightboxIdx}
          total={PHOTOS.length}
          onClose={closeLightbox}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}
    </>
  );
}
