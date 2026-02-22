// sections/Gallery.jsx

import { useState, useCallback, memo } from 'react';
import { useRevealClass } from '../hooks/useInView';
import './Gallery.css';

// ← Імпорти замість рядків — Vite обробить правильно і на GitHub Pages
import photo1  from '../assets/gallery/photo1.webp';
import photo2  from '../assets/gallery/photo2.webp';
import photo9  from '../assets/gallery/photo9.webp';
import photo4  from '../assets/gallery/photo4.webp';
import photo5  from '../assets/gallery/photo5.webp';
import photo6  from '../assets/gallery/photo6.webp';
import photo7  from '../assets/gallery/photo7.webp';
import photo8  from '../assets/gallery/photo8.webp';
import photo13 from '../assets/gallery/photo13.webp';

const PHOTOS = [
  { src: photo1,  alt: 'Фото 1', span: 'wide'  },
  { src: photo2,  alt: 'Фото 2', span: ''      },
  { src: photo9,  alt: 'Фото 3', span: 'tall'  },
  { src: photo4,  alt: 'Фото 4', span: ''      },
  { src: photo5,  alt: 'Фото 5', span: ''      },
  { src: photo6,  alt: 'Фото 6', span: 'wide'  },
  { src: photo7,  alt: 'Фото 7', span: ''      },
  { src: photo8,  alt: 'Фото 8', span: ''      },
  { src: photo13, alt: 'Фото 9', span: ''      },
];

// memo — уникаємо перерендерів lightbox при зміні index
const Lightbox = memo(function Lightbox({ photo, onClose, onPrev, onNext }) {
  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true" aria-label="Перегляд фото">
      <button className="lightbox__close" onClick={onClose} aria-label="Закрити">✕</button>
      <button className="lightbox__prev" onClick={(e) => { e.stopPropagation(); onPrev(); }} aria-label="Попереднє">‹</button>
      <div className="lightbox__img-wrap" onClick={(e) => e.stopPropagation()}>
        <img src={photo.src} alt={photo.alt} />
        {photo.alt && <p className="lightbox__caption">{photo.alt}</p>}
      </div>
      <button className="lightbox__next" onClick={(e) => { e.stopPropagation(); onNext(); }} aria-label="Наступне">›</button>
    </div>
  );
});

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const header = useRevealClass('');

  const openLightbox  = useCallback((idx) => setLightboxIdx(idx), []);
  const closeLightbox = useCallback(() => setLightboxIdx(null), []);
  const prevPhoto     = useCallback(() => setLightboxIdx(i => (i - 1 + PHOTOS.length) % PHOTOS.length), []);
  const nextPhoto     = useCallback(() => setLightboxIdx(i => (i + 1) % PHOTOS.length), []);

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

          <div className="gallery__grid" role="list" aria-label="Фотогалерея готелю">
            {PHOTOS.map((photo, idx) => (
              <button
                key={idx}
                className={`gallery__item gallery__item--${photo.span || 'normal'}`}
                onClick={() => openLightbox(idx)}
                aria-label={`Відкрити фото ${idx + 1}`}
                role="listitem"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
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
