// sections/Rooms.jsx

import { memo, useRef, useState, useEffect, useCallback } from 'react';
import { useRevealClass, useInView } from '../hooks/useInView';
import './Rooms.css';

function IconGuests() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconSize() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="9" y1="3" x2="9" y2="21" />
      <line x1="3" y1="9" x2="21" y2="9" />
    </svg>
  );
}

const rooms = [
  {
    id: 'double-15',
    name: 'Двомісний номер',
    subtitle: '1 ліжко · 15 м²',
    images: [
      '/images/rooms/double-15m/main.webp',
      '/images/rooms/double-15m/1.webp',
      '/images/rooms/double-15m/2.webp',
      '/images/rooms/double-15m/3.webp',
      '/images/rooms/double-15m/4.webp',
    ],
    alt: 'Двомісний номер з каміном',
    guests: 2,
    size: 15,
    desc: 'Затишний номер із каміном та міні-кухнею. Вид на пам\'ятку, місто та тиху вулицю. Повністю обладнана кухня: духовка, плита, мікрохвильова піч та обідня зона на відкритому повітрі.',
    amenities: ['Камін', 'Власна кухня (духовка, плита)', 'Пральна машина', 'Телевізор', 'Звукоізоляція', 'Вид на пам\'ятку'],
  },
  {
    id: 'double-deluxe-15',
    name: 'Двомісний номер Делюкс',
    subtitle: 'Окрема ванна · 1 ліжко · 15 м²',
    images: [
      '/images/rooms/double-deluxe-15m/main.webp',
      '/images/rooms/double-deluxe-15m/1.webp',
      '/images/rooms/double-deluxe-15m/2.webp',
      '/images/rooms/double-deluxe-15m/3.webp',
      '/images/rooms/double-deluxe-15m/4.webp',
      '/images/rooms/double-deluxe-15m/5.webp',
      '/images/rooms/double-deluxe-15m/6.webp',
    ],
    alt: 'Двомісний номер Делюкс',
    guests: 2,
    size: 15,
    desc: 'Делюкс із терасою та видом на місто. Міні-кухня з плитою та духовкою. Окрема ванна кімната з душем та ванною, феном та капцями. Звукоізоляція та пральна машина.',
    amenities: ['Тераса з видом на місто', 'Міні-кухня', 'Ванна та душ', 'Пральна машина', 'Звукоізоляція', 'Фен + капці'],
  },
  {
    id: 'family-21',
    name: 'Сімейний номер',
    subtitle: 'Окрема ванна · 2 ліжка · 21 м²',
    images: [
      '/images/rooms/family-21m/main.webp',
      '/images/rooms/family-21m/1.webp',
      '/images/rooms/family-21m/2.webp',
      '/images/rooms/family-21m/3.webp',
      '/images/rooms/family-21m/4.webp',
      '/images/rooms/family-21m/5.webp',
      '/images/rooms/family-21m/6.webp',
    ],
    alt: 'Сімейний номер',
    guests: 3,
    size: 21,
    desc: 'Просторий сімейний номер із каміном та диваном. Велика тераса з панорамою міста. Повна кухня та обідня зона. Розміщення до 3 гостей + можливо дитина.',
    amenities: ['Автентичний камін', 'Диван', 'Велика тераса', 'Повна кухня', 'Пральна машина', 'Звукоізоляція'],
  },
  {
    id: 'family-superior-22',
    name: 'Покращений сімейний номер',
    subtitle: '22 м²',
    images: [
      '/images/rooms/superior-family-22m/main.webp',
      '/images/rooms/superior-family-22m/1.webp',
      '/images/rooms/superior-family-22m/2.webp',
      '/images/rooms/superior-family-22m/3.webp',
    ],
    alt: 'Покращений сімейний номер',
    guests: 3,
    size: 22,
    desc: 'Покращений номер із каміном та плитковою підлогою. Міні-кухня, пральна машина, звукоізоляція. Вид на пам\'ятку та місто.',
    amenities: ['Камін', 'Міні-кухня', 'Ванна', 'Звукоізоляція', 'Пральна машина', 'Вид на місто'],
    badge: 'Популярний вибір',
  },
  {
    id: 'quad-deluxe',
    name: 'Чотиримісний номер Делюкс',
    subtitle: '2 ліжка',
    images: [
      '/images/rooms/quad-deluxe/main.webp',
      '/images/rooms/quad-deluxe/1.webp',
      '/images/rooms/quad-deluxe/2.webp',
      '/images/rooms/quad-deluxe/3.webp',
      '/images/rooms/quad-deluxe/4.webp',
      '/images/rooms/quad-deluxe/5.webp',
      '/images/rooms/quad-deluxe/6.webp',
    ],
    alt: 'Чотиримісний номер Делюкс',
    guests: 4,
    size: 20,
    desc: 'Комфортний чотиримісний простір із безкоштовним Wi-Fi. 2 ліжка, робочий стіл, телевізор. Окрема ванна кімната.',
    amenities: ['Безкоштовний Wi-Fi', 'Телевізор', 'Робочий стіл', 'Власна ванна', 'Шафа для одягу'],
  },
  {
    id: 'quad-deluxe-25',
    name: 'Чотиримісний номер Делюкс',
    subtitle: '25 м²',
    images: [
      '/images/rooms/quad-deluxe-25m/main.webp',
      '/images/rooms/quad-deluxe-25m/1.webp',
      '/images/rooms/quad-deluxe-25m/2.webp',
      '/images/rooms/quad-deluxe-25m/3.webp',
      '/images/rooms/quad-deluxe-25m/4.webp',
      '/images/rooms/quad-deluxe-25m/5.webp',
    ],
    alt: 'Чотиримісний номер Делюкс (25 м²)',
    guests: 4,
    size: 25,
    desc: 'Великий номер із 2 ліжками та диваном. Повністю обладнана міні-кухня з духовкою та плитою. Тераса з видом на місто, пральна машина та звукоізоляція.',
    amenities: ['Тераса з видом', 'Диван-ліжко', 'Кухня з духовкою', 'Пральна машина', 'Звукоізоляція', 'Душ'],
    badge: 'Для компаній',
  },
];

function RoomPlaceholder({ index, name }) {
  return (
    <div className="room-card__placeholder" aria-label={`Фото ${name} — скоро буде`}>
      <div className="room-card__placeholder-icon">📸</div>
      <p className="room-card__placeholder-label">Фото скоро</p>
    </div>
  );
}

const RoomCard = memo(function RoomCard({ room, index, openRoomSlider }) {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <article
      ref={ref}
      className={`room-card ${inView ? 'room-card--visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
      aria-label={`Номер: ${room.name}`}
    >
      <div className="room-card__img-wrap" onClick={() => openRoomSlider(room)}>
        {room.images && room.images.length > 0 ? (
          <>
            <img
              src={room.images[0]}
              alt={room.alt}
              loading="lazy"
              decoding="async"
              width="400"
              height="300"
              className="room-card__img"
            />
            <div className="room-card__photo-overlay">
              <span className="room-card__photo-text">Переглянути всі фото</span>
            </div>
          </>
        ) : (
          <RoomPlaceholder index={index} name={room.name} />
        )}
        {room.badge && <div className="room-card__badge">{room.badge}</div>}
        <div className="room-card__meta">
          <span><IconGuests /> до {room.guests} гостей</span>
          <span><IconSize /> {room.size} м²</span>
        </div>
      </div>

      <div className="room-card__body">
        <h3 className="room-card__name">{room.name}</h3>
        <p className="room-card__subtitle">{room.subtitle}</p>
        <p className="room-card__desc">{room.desc}</p>

        <ul className="room-card__amenities" aria-label="Зручності номеру">
          {room.amenities.map(a => (
            <li key={a}>
              <span className="room-card__amenity-check" aria-hidden="true">✓</span>
              {a}
            </li>
          ))}
        </ul>

        <div className="room-card__btn-wrap">
          <a href="tel:+380673801949" className="room-card__btn">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Зателефонувати
          </a>
        </div>
      </div>
    </article>
  );
});

const RoomLightbox = memo(function RoomLightbox({ room, onClose }) {
  const [photoIdx, setPhotoIdx] = useState(0);
  const touchStartX = useRef(null);

  const onPrev = useCallback(() => {
    setPhotoIdx(i => (i - 1 + room.images.length) % room.images.length);
  }, [room.images.length]);

  const onNext = useCallback(() => {
    setPhotoIdx(i => (i + 1) % room.images.length);
  }, [room.images.length]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    document.addEventListener('keydown', onKeyDown);
    
    // Блокуємо скрол
    document.body.classList.add('no-scroll');
    // Блокуємо скрол основної сторінки, але дозволяємо скрол мініатюр
    const preventDefault = (e) => {
      if (e.target.closest('.room-lightbox__thumbnails')) return;
      e.preventDefault();
    };
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

  const currentPhoto = room.images[photoIdx];

  return (
    <div className="room-lightbox" role="dialog" aria-modal="true" aria-label={`Фотографії ${room.name}`}>
      <div className="room-lightbox__overlay" onClick={onClose} />
      <button className="room-lightbox__close" onClick={onClose} aria-label="Закрити">✕</button>
      <button className="room-lightbox__prev" onClick={(e) => { e.stopPropagation(); onPrev(); }} aria-label="Попереднє">‹</button>
      
      <div className="room-lightbox__content" onClick={onClose}>
        <div
          className="room-lightbox__img-wrap"
          onClick={(e) => e.stopPropagation()}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img src={currentPhoto} alt={`Фото ${photoIdx + 1}`} className="room-lightbox__img" />
          <div className="room-lightbox__counter">
            {photoIdx + 1} / {room.images.length}
          </div>
        </div>
      </div>
      
      <button className="room-lightbox__next" onClick={(e) => { e.stopPropagation(); onNext(); }} aria-label="Наступне">›</button>

      <div className="room-lightbox__thumbnails">
        <div className="room-lightbox__thumbnails-inner">
          {room.images.map((src, idx) => (
            <button
              key={idx}
              className={`room-lightbox__thumb ${idx === photoIdx ? 'room-lightbox__thumb--active' : ''}`}
              onClick={(e) => { e.stopPropagation(); setPhotoIdx(idx); }}
              aria-label={`Перейти до фото ${idx + 1}`}
            >
              <img src={src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      {/* Оптимізація: попереднє завантаження наступного фото */}
      <link rel="prefetch" href={room.images[(photoIdx + 1) % room.images.length]} />
    </div>
  );
});

export default function Rooms() {
  const header = useRevealClass('');
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeRoom, setActiveRoom] = useState(null);

  const openRoomSlider = useCallback((room) => {
    setActiveRoom(room);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeRoomSlider = useCallback(() => {
    setActiveRoom(null);
    document.body.style.overflow = '';
  }, []);

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

    Array.from(slider.children).forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  const scrollToSlide = (index) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const slides = Array.from(slider.children);
    if (slides[index]) {
      slides[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  };

  return (
    <section id="rooms" className="rooms section-p">
      <div className="container" style={{ position: 'relative' }}>
        <header className={`section-header ${header.className}`}>
          <h2 className="section-title">Наші номери</h2>
          <p className="section-subtitle">
            Кожен номер — це поєднання автентичного стилю Кам’янця-Подільського та сучасного комфорту для вашого ідеального відпочинку.
          </p>
        </header>

        <div className="rooms__slider-wrap">
          <div className="rooms__grid" ref={sliderRef}>
            {rooms.map((room, idx) => (
              <RoomCard 
                key={room.id} 
                room={room} 
                index={idx} 
                openRoomSlider={openRoomSlider}
              />
            ))}
          </div>

          <div className="rooms__pagination">
            {rooms.map((_, i) => (
              <button
                key={i}
                className={`rooms__dot ${i === activeIndex ? 'rooms__dot--active' : ''}`}
                onClick={() => scrollToSlide(i)}
                aria-label={`Перейти до номера ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {activeRoom && (
        <RoomLightbox room={activeRoom} onClose={closeRoomSlider} />
      )}
    </section>
  );
}
