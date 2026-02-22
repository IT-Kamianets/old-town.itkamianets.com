// sections/Gallery.jsx

import { useState, useCallback } from 'react';
import { useRevealClass } from '../hooks/useInView';
import './Gallery.css';

const PHOTOS = [
  { src: 'src/assets/gallery/photo1.webp', alt: 'Фото 1', span: 'wide'  },
  { src: 'src/assets/gallery/photo2.webp', alt: 'Фото 2', span: ''      },
  { src: 'src/assets/gallery/photo9.webp', alt: 'Фото 3', span: 'tall'  },
  { src: 'src/assets/gallery/photo4.webp', alt: 'Фото 4', span: ''      },
  { src: 'src/assets/gallery/photo5.webp', alt: 'Фото 5', span: ''      },
  { src: 'src/assets/gallery/photo6.webp', alt: 'Фото 6', span: 'wide'  },
  { src: 'src/assets/gallery/photo7.webp', alt: 'Фото 7', span: ''      },
  { src: 'src/assets/gallery/photo8.webp', alt: 'Фото 8', span: ''      },
  { src: 'src/assets/gallery/photo13.webp', alt: 'Фото 9', span: ''      }
];

function Lightbox({ photo, onClose, onPrev, onNext }) {
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
}

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