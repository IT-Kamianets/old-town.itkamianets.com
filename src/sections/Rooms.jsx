// sections/Rooms.jsx

import { useRevealClass, useInView } from '../hooks/useInView';
import './Rooms.css';

function IconGuests() {
  return (
    <svg viewBox="0 0 24 24" width={14} height={14} fill="none" stroke="currentColor"
         strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="7" r="3" />
      <circle cx="16" cy="8" r="2.5" />
      <path d="M3 21v-2a5 5 0 0 1 10 0v2" />
      <path d="M16 11c2.5 0 5 1.5 5 4v2" />
    </svg>
  );
}

function IconSize() {
  return (
    <svg viewBox="0 0 24 24" width={14} height={14} fill="none" stroke="currentColor"
         strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="15 3 21 3 21 9" />
      <polyline points="9 21 3 21 3 15" />
      <line x1="21" y1="3" x2="14" y2="10" />
      <line x1="3" y1="21" x2="10" y2="14" />
    </svg>
  );
}

// ── Заміни на реальні фото номерів ──
const rooms = [
  {
    id:       'deluxe-1',
    name:     'Делюкс №1',
    subtitle: 'Queen-size ліжко · 15 м²',
    image:    'src/assets/rooms/room1.webp',
    alt:      'Делюкс №1 — затишний номер з видом на місто',
    guests:   2,
    size:     15,
    desc:     'Затишний номер з паркетною підлогою та терасою з видом на місто. Шумозахисні вікна, повністю обладнана кухня.',
    amenities: ['Тераса з видом на місто', 'Кухня з духовкою', 'Пральна машина', 'Телевізор', 'Кавоварка', 'Власна ванна'],
  },
  {
    id:       'deluxe-2',
    name:     'Делюкс №2',
    subtitle: 'Queen-size ліжко · 15 м²',
    image:    'src/assets/rooms/room2.webp',
    alt:      'Делюкс №2 — світлий номер з паркетом',
    guests:   2,
    size:     15,
    desc:     'Світлий номер з великими вікнами та паркетною підлогою. Тихий куток у серці Старого міста.',
    amenities: ['Тераса з видом на місто', 'Кухня з духовкою', 'Пральна машина', 'Телевізор', 'Кавоварка', 'Власна ванна'],
  },
  {
    id:       'deluxe-3',
    name:     'Делюкс №3',
    subtitle: 'Double ліжко · 16 м²',
    image:    'src/assets/rooms/room3.webp',
    alt:      'Делюкс №3 — затишний номер з автентичним інтер\'єром',
    guests:   2,
    size:     16,
    desc:     'Теплий автентичний інтер\'єр з дерев\'яними акцентами. Тераса з виходом у внутрішній двір.',
    amenities: ['Тераса у дворик', 'Міні-кухня', 'Телевізор', 'Кавоварка', 'Шумозахисні вікна', 'Власна ванна'],
  },
  {
    id:       'quad',
    name:     'Чотиримісний Делюкс',
    subtitle: 'Двоспальне ліжко + диван · 25 м²',
    image:    'src/assets/rooms/room4.webp',
    alt:      'Чотиримісний Делюкс — просторий номер для компанії',
    guests:   4,
    size:     25,
    desc:     'Просторий номер для сімей або компаній. Великий простір, диван, тераса з панорамою міста.',
    amenities: ['Тераса з видом на місто', 'Диван + зона відпочинку', 'Кухня з духовкою', 'Пральна машина', 'Телевізор', 'Власна ванна'],
    badge:    'Для компаній',
  },
  {
    id:       'family',
    name:     'Family з каміном',
    subtitle: 'King-size ліжко · 21 м²',
    image:    'src/assets/rooms/room5.webp',
    alt:      'Family номер з каміном і терасою',
    guests:   4,
    size:     21,
    desc:     'Сімейний номер з автентичним каміном — ідеальний для романтичного відпочинку або сімейної поїздки.',
    amenities: ['Автентичний камін', 'Тераса з панорамою', 'Кухня повністю обладнана', 'Пральна машина', 'Мармурова підлога', 'Власна ванна'],
    badge:    'Популярний вибір',
  },
  {
    id:       'suite',
    name:     'Люкс мансарда',
    subtitle: 'King-size ліжко · 30 м²',
    image:    'src/assets/rooms/room6.webp',
    alt:      'Люкс мансарда — найпросторіший номер з видом на дахи міста',
    guests:   2,
    size:     30,
    desc:     'Найпросторіший номер готелю під дахами Старого міста. Стеля зі стропилами, великі вікна з видом на середньовічні дахи.',
    amenities: ['Панорамний вид з мансарди', 'Кухня з духовкою', 'Пральна машина', 'Телевізор', 'Кавоварка', 'Власна ванна з ванною'],
    badge:    'Найкращий вид',
  },
];

function RoomCard({ room, index }) {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <article
      ref={ref}
      className={`room-card ${inView ? 'room-card--visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
      aria-label={`Номер: ${room.name}`}
    >
      <div className="room-card__img-wrap">
        <img src={room.image} alt={room.alt} loading="lazy" className="room-card__img" />
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

        <a href="#contact" className="btn btn-primary room-card__cta">
          Дізнатися ціну та забронювати
        </a>
      </div>
    </article>
  );
}

export default function Rooms() {
  const header = useRevealClass('');

  return (
    <section id="rooms" className="section rooms">
      <div className="container">

        <div ref={header.ref} className={`section-header ${header.className}`}>
          <p className="section-eyebrow">Номери</p>
          <div className="divider" />
          <h2 className="section-title">
            Ваш простір<br />
            <em style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--color-wood-light)' }}>
              для відпочинку
            </em>
          </h2>
          <p className="section-subtitle">
            Шість номерів — кожен з власним характером, терасою та видом на місто.
            Затишок, камінь, дерево і свіже повітря Поділля.
          </p>
        </div>

        <div className="rooms__grid">
          {rooms.map((room, i) => (
            <RoomCard key={room.id} room={room} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}