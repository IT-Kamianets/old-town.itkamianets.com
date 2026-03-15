import { memo, useState, useEffect, useRef } from 'react';
import { useInView } from '../hooks/useInView';
import './Rooms.css';

const rooms = [
  {
    id: '01',
    name: 'Двомісний з каміном',
    subtitle: 'Автентичність та затишок',
    size: '15 м²',
    guests: '2 гості',
    image: '/images/rooms/double-15m/main.webp',
    desc: 'Унікальний номер, головною особливістю якого є справжній камін. Вікна виходять на тиху історичну вуличку та пам’ятки Старого міста.',
    kitchen: 'Плита, духовка, холодильник, мікрохвильовка, обідня зона на вулиці',
    bath: 'Ванна, фен, капці, косметичні засоби',
    comfort: 'Камін, подовжене ліжко, пральна машина, звукоізоляція',
    images: ['/images/rooms/double-15m/main.webp', '/images/rooms/double-15m/1.webp', '/images/rooms/double-15m/2.webp', '/images/rooms/double-15m/3.webp', '/images/rooms/double-15m/4.webp']
  },
  {
    id: '02',
    name: 'Двомісний Делюкс',
    subtitle: 'Тераса та дерев’яна підлога',
    size: '15 м²',
    guests: '2 гості',
    image: '/images/rooms/double-deluxe-15m/main.webp',
    desc: 'Елегантний делюкс із власною терасою та видом на місто. Натуральна дерев’яна підлога створює атмосферу справжнього спокою.',
    kitchen: 'Повна міні-кухня з духовкою, плитою та кавоваркою',
    bath: 'Окремий душ та ванна, капці, набір косметики',
    comfort: 'Тераса, паркет, звукоізоляція, пральна машина',
    images: ['/images/rooms/double-deluxe-15m/main.webp', '/images/rooms/double-deluxe-15m/1.webp', '/images/rooms/double-deluxe-15m/2.webp', '/images/rooms/double-deluxe-15m/3.webp', '/images/rooms/double-deluxe-15m/4.webp', '/images/rooms/double-deluxe-15m/5.webp', '/images/rooms/double-deluxe-15m/6.webp']
  },
  {
    id: '03',
    name: 'Сімейна резиденція',
    subtitle: 'Простір для всієї родини',
    size: '21 м²',
    guests: 'до 4 гостей',
    image: '/images/rooms/family-21m/main.webp',
    desc: 'Великий сімейний номер із каміном та вітальнею. Має 2 ліжка та диван-ліжко. Велика тераса з видом на старе місто.',
    kitchen: 'Духовка, плита, холодильник, обідня зона на терасі',
    bath: 'Ванна, фен, капці, косметичні засоби',
    comfort: 'Камін, диван, пральна машина, звукоізоляція',
    images: ['/images/rooms/family-21m/main.webp', '/images/rooms/family-21m/1.webp', '/images/rooms/family-21m/2.webp', '/images/rooms/family-21m/3.webp', '/images/rooms/family-21m/4.webp', '/images/rooms/family-21m/5.webp', '/images/rooms/family-21m/6.webp']
  },
  {
    id: '04',
    name: 'Покращений сімейний',
    subtitle: 'Вид на пам’ятку та комфорт',
    size: '22 м²',
    guests: 'до 4 гостей',
    image: '/images/rooms/superior-family-22m/main.webp',
    desc: 'Покращений номер із каміном та плитковою підлогою. Міні-кухня, пральна машина та повна звукоізоляція.',
    kitchen: 'Міні-кухня, плита, холодильник, посуд',
    bath: 'Ванна, фен, рушники, засоби гігієни',
    comfort: 'Камін, звукоізоляція, пральна машина, робоча зона',
    images: ['/images/rooms/superior-family-22m/main.webp', '/images/rooms/superior-family-22m/1.webp', '/images/rooms/superior-family-22m/2.webp', '/images/rooms/superior-family-22m/3.webp']
  },
  {
    id: '05',
    name: 'Чотиримісний Делюкс',
    subtitle: 'Комфорт для компанії',
    size: '20 м²',
    guests: '4 гості',
    image: '/images/rooms/quad-deluxe/main.webp',
    desc: 'Затишний чотиримісний простір із сучасним обладнанням. Ідеально підходить для друзів або великої родини.',
    kitchen: 'Чайник, холодильник, необхідний посуд',
    bath: 'Душ, фен, капці, туалетні засоби',
    comfort: '4 спальні місця, Wi-Fi, ТБ, робочий стіл',
    images: ['/images/rooms/quad-deluxe/main.webp', '/images/rooms/quad-deluxe/1.webp', '/images/rooms/quad-deluxe/2.webp', '/images/rooms/quad-deluxe/3.webp', '/images/rooms/quad-deluxe/4.webp', '/images/rooms/quad-deluxe/5.webp', '/images/rooms/quad-deluxe/6.webp']
  },
  {
    id: '06',
    name: 'Гранд Делюкс',
    subtitle: 'Максимальний простір',
    size: '25 м²',
    guests: '4 гості',
    image: '/images/rooms/quad-deluxe-25m/main.webp',
    desc: 'Найбільший номер готелю з двома ліжками та диваном. Повністю обладнана кухня та тераса з видом на місто.',
    kitchen: 'Повноцінна кухня, духовка, плита, холодильник',
    bath: 'Душ, fен, капці, шампунь, мило',
    comfort: 'Тераса, диван-ліжко, пральна машина, гардероб',
    images: ['/images/rooms/quad-deluxe-25m/main.webp', '/images/rooms/quad-deluxe-25m/1.webp', '/images/rooms/quad-deluxe-25m/2.webp', '/images/rooms/quad-deluxe-25m/3.webp', '/images/rooms/quad-deluxe-25m/4.webp', '/images/rooms/quad-deluxe-25m/5.webp']
  }
];

const RoomDetails = memo(({ room, onClose }) => {
  const [activeImg, setActiveImg] = useState(0);

  const nextImg = () => setActiveImg((prev) => (prev + 1) % room.images.length);
  const prevImg = () => setActiveImg((prev) => (prev - 1 + room.images.length) % room.images.length);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') nextImg();
      if (e.key === 'ArrowLeft') prevImg();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    document.body.classList.add('no-scroll');
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.classList.remove('no-scroll');
    };
  }, [room.images.length, onClose]);

  return (
    <div className="room-detail-overlay">
      <div className="room-detail-overlay__bg" onClick={onClose} />
      <div className="room-detail-content">
        <button className="room-detail-close" onClick={onClose} aria-label="Close modal">✕</button>
        <div className="room-detail-grid">
          <div className="room-detail-visuals">
            <div className="room-detail-main-img-wrap">
              <div className="room-detail-slider-viewport">
                {room.images.map((img, i) => (
                  <div key={i} className={`room-detail-slide-new ${activeImg === i ? 'active' : ''}`}>
                    <img src={img} alt={`${room.name} - фото ${i + 1}`} loading={i === 0 ? "eager" : "lazy"} />
                  </div>
                ))}
              </div>
              <button className="nav-arrow nav-arrow--left" onClick={(e) => { e.stopPropagation(); prevImg(); }} aria-label="Previous">‹</button>
              <button className="nav-arrow nav-arrow--right" onClick={(e) => { e.stopPropagation(); nextImg(); }} aria-label="Next">›</button>
              <div className="img-counter">{activeImg + 1} / {room.images.length}</div>
            </div>

            <div className="room-detail-thumbs-container">
              <div className="room-detail-thumbs">
                {room.images.map((img, i) => (
                  <button
                    key={i}
                    className={`room-detail-thumb ${activeImg === i ? 'active' : ''}`}
                    onClick={() => setActiveImg(i)}
                    aria-label={`Go to photo ${i + 1}`}
                  >
                    <img src={img} alt="" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="room-detail-info">
            <header className="room-detail-header">
              <span className="section-eyebrow">Номер {room.id}</span>
              <h2 className="room-detail-title display-title">{room.name}</h2>
              <p className="room-detail-subtitle">{room.subtitle}</p>
            </header>
            <p className="room-detail-desc">{room.desc}</p>
            <div className="room-detail-specs-grid">
              <div className="spec-block">
                <h5><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z" /><path d="M6 2v2M10 2v2M14 2v2" /></svg> Кухня</h5>
                <p>{room.kitchen}</p>
              </div>
              <div className="spec-block">
                <h5><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v13a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Z" /><path d="M4 7h16M7 10v5M11 10v5M14 10v5M17 10v5" /></svg> Ванна</h5>
                <p>{room.bath}</p>
              </div>
              <div className="spec-block">
                <h5><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg> Комфорт</h5>
                <p>{room.comfort}</p>
              </div>
              <div className="spec-block">
                <h5><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9h18M9 21V9" /></svg> Параметри</h5>
                <p>{room.size} • {room.guests}</p>
              </div>
            </div>
            <div className="room-detail-cta">
              <a href="tel:+380673801949" className="btn btn-primary">Забронювати</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

const ListItem = memo(({ room, isHovered, onHover, onClick }) => (
  <div className={`rooms-list-item ${isHovered ? 'is-active' : ''}`} onMouseEnter={onHover} onClick={onClick}>
    <span className="room-number">{room.id}</span>
    <div className="room-info">
      <h3 className="room-name display-title">{room.name}</h3>
      <div className="room-details-inline">
        <span className="room-detail-tag">{room.size}</span>
        <span className="room-detail-tag">{room.guests}</span>
        <p className="room-subtitle">{room.subtitle}</p>
      </div>
    </div>
    <div className="room-arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M5 12H19M19 12L12 5M19 12L12 19" /></svg></div>
  </div>
));

const MobileCard = memo(({ room, onClick }) => (
  <div className="room-mobile-card" onClick={onClick}>
    <div className="room-mobile-card__img">
      <img src={room.image} alt={room.name} />
      <div className="room-mobile-card__badge">{room.id}</div>
    </div>
    <div className="room-mobile-card__content">
      <div className="room-mobile-card__tags">
        <span>{room.size}</span>
        <span>•</span>
        <span>{room.guests}</span>
      </div>
      <h3 className="room-mobile-card__title display-title">{room.name}</h3>
      <p className="room-mobile-card__subtitle">{room.subtitle}</p>
      <div className="room-mobile-card__footer">
        <span className="room-mobile-card__link">Детальніше</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12H19M19 12L12 5M19 12L12 19" /></svg>
      </div>
    </div>
  </div>
));

export default function Rooms() {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const [hoveredIdx, setHoveredIdx] = useState(0);
  const [activeRoom, setActiveRoom] = useState(null);
  const [activeMobileIdx, setActiveMobileIdx] = useState(0);

  const handleMobileScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const scrollWidth = e.target.scrollWidth;
    const idx = Math.round((scrollLeft / scrollWidth) * rooms.length);
    if (idx !== activeMobileIdx && idx >= 0 && idx < rooms.length) {
      setActiveMobileIdx(idx);
    }
  };

  return (
    <section
      id="rooms"
      className={`rooms-boutique ${inView ? 'in-view' : ''}`}
      ref={ref}
    >
      <div className="container rooms-boutique__layout">

        <div className="rooms-boutique__list">
          <header className="rooms-boutique__header reveal reveal--delay-1">
            <span className="section-eyebrow">Колекція номерів</span>
            <h2 className="section-title">Оберіть свій <em>простір</em></h2>
          </header>
          <nav className="rooms-list-nav">
            {rooms.map((room, idx) => (
              <div key={room.id} className={`reveal reveal--delay-${idx + 2}`}>
                <ListItem
                  room={room}
                  isHovered={hoveredIdx === idx}
                  onHover={() => setHoveredIdx(idx)}
                  onClick={() => setActiveRoom(room)}
                />
              </div>
            ))}
          </nav>
        </div>

        <div className="rooms-boutique__preview reveal reveal--delay-3" onClick={() => setActiveRoom(rooms[hoveredIdx])}>
          <div className="preview-decoration" />
          <div className="preview-frame">
            <img src={rooms[hoveredIdx].image} alt="" className="preview-image" key={rooms[hoveredIdx].id} />
            <div className="preview-overlay" />
            <div className="view-details-indicator"><span>Деталі</span></div>
          </div>
        </div>

        <div className="rooms-mobile-slider">
          <header className="rooms-mobile-slider__header reveal">
            <span className="section-eyebrow">Колекція номерів</span>
            <h2 className="section-title">Наші <em>номери</em></h2>
          </header>
          <div className="rooms-mobile-slider__track reveal reveal--delay-1" onScroll={handleMobileScroll}>
            {rooms.map((room) => (
              <MobileCard key={room.id} room={room} onClick={() => setActiveRoom(room)} />
            ))}
          </div>
          <div className="rooms-mobile-pagination reveal reveal--delay-2">
            {rooms.map((_, i) => (
              <div key={i} className={`rooms-mobile-dot ${i === activeMobileIdx ? 'active' : ''}`} />
            ))}
          </div>
        </div>
      </div>
      {activeRoom && <RoomDetails room={activeRoom} onClose={() => setActiveRoom(null)} />}
    </section>
  );
}
