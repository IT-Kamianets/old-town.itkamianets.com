// sections/Gallery.jsx
// Masonry photo gallery with lightbox — add real hotel photos here

import { useState, useCallback } from 'react';
import { useRevealClass } from '../hooks/useInView';
import './Gallery.css';

// ================================================
// REPLACE THESE with actual hotel/city photos.
// Recommended sources: Google Maps photo export,
// Instagram posts, professional photographer shots.
// Use webp format, min 1200px wide for full quality.
// ================================================
const PHOTOS = [
  {
    src:  'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=75',
    alt:  'Номер готелю — вид з вікна на місто',
    span: 'wide',   // 'wide', 'tall', or '' for normal
  },
  {
    src:  'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=75',
    alt:  "Інтер'єр номеру — дерево та затишна атмосфера",
    span: '',
  },
  {
    src:  'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=75',
    alt:  'Сімейний номер з каміном',
    span: 'tall',
  },
  {
    src:  'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=75',
    alt:  'Фасад Гостерії Old Town у Старому місті',
    span: '',
  },
  {
    src:  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=75',
    alt:  "Вітальня готелю — кам'яні стіни",
    span: '',
  },
  {
    src:  'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=75',
    alt:  "Тераса з видом на Кам'янець-Подільський",
    span: 'wide',
  },
  {
    src:  'https://images.unsplash.com/photo-1560347876-aeef00ee58a1?w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1560347876-aeef00ee58a1?w=600&q=75',
    alt:  'Спальня з видом',
    span: '',
  },
  {
    src:  'https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=600&q=75',
    alt:  "Вулиці Старого міста Кам'янця",
    span: '',
  },
];

// Lightbox component
function Lightbox({ photo, onClose, onPrev, onNext }) {
  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true" aria-label="Перегляд фото">
      <button className="lightbox__close" onClick={onClose} aria-label="Закрити">✕</button>
      <button className="lightbox__prev" onClick={(e) => { e.stopPropagation(); onPrev(); }} aria-label="Попереднє">‹</button>
      <div className="lightbox__img-wrap" onClick={(e) => e.stopPropagation()}>
        <img src={photo.src} alt={photo.alt} />
        <p className="lightbox__caption">{photo.alt}</p>
      </div>
      <button className="lightbox__next" onClick={(e) => { e.stopPropagation(); onNext(); }} aria-label="Наступне">›</button>
    </div>
  );
}

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const header = useRevealClass('');

  const openLightbox = useCallback((idx) => setLightboxIdx(idx), []);
  const closeLightbox = useCallback(() => setLightboxIdx(null), []);
  const prevPhoto = useCallback(() => setLightboxIdx(i => (i - 1 + PHOTOS.length) % PHOTOS.length), []);
  const nextPhoto = useCallback(() => setLightboxIdx(i => (i + 1) % PHOTOS.length), []);

  return (
    <>
      <section id="gallery" className="section gallery">
        <div className="container">

          <div ref={header.ref} className={`section-header ${header.className}`}>
            <p className="section-eyebrow">Галерея</p>
            <div className="divider" />
            <h2 className="section-title">
              Фотографії готелю
            </h2>
            <p className="section-subtitle">
              Подивіться на атмосферу Гостерії Old Town — фасад, номери, 
              тераси та вулиці Старого міста.
            </p>
          </div>

          {/* Masonry grid */}
          <div className="gallery__grid" role="list" aria-label="Фотогалерея готелю">
            {PHOTOS.map((photo, idx) => (
              <button
                key={idx}
                className={`gallery__item gallery__item--${photo.span || 'normal'}`}
                onClick={() => openLightbox(idx)}
                aria-label={`Відкрити фото: ${photo.alt}`}
                role="listitem"
              >
                <img
                  src={photo.thumb}
                  alt={photo.alt}
                  loading="lazy"
                  className="gallery__img"
                />
                <div className="gallery__item-overlay">
                  <span className="gallery__item-zoom" aria-hidden="true">+</span>
                </div>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <Lightbox
          photo={PHOTOS[lightboxIdx]}
          onClose={closeLightbox}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}
    </>
  );
}
