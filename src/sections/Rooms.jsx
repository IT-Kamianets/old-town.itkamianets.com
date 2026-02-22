// sections/Rooms.jsx
// Room type cards with photos, amenities, and booking CTA

import { useRevealClass, useInView } from '../hooks/useInView';
import './Rooms.css';

// Replace these with actual room photos
const ROOM_IMGS = {
  deluxe:   'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
  quad:     'https://images.unsplash.com/photo-1560347876-aeef00ee58a1?w=800&q=80',
  family:   'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80',
};

const rooms = [
  {
    id:       'deluxe',
    name:     'Номер Делюкс',
    subtitle: 'Queen-size ліжко · 15 м²',
    image:    ROOM_IMGS.deluxe,
    alt:      "Номер Делюкс — сучасний інтер'єр з видом на місто",
    guests:   2,
    size:     15,
    desc:     'Затишний номер з паркетною підлогою, терасою з видом на місто та повністю обладнаною кухнею. Тиха кімната завдяки шумозахисним вікнам.',
    amenities: [
      'Тераса з видом на місто',
      'Кухня з духовкою',
      'Пральна машина',
      'Телевізор з плоским екраном',
      'Кавоварка',
      'Шумозахисні вікна',
      'Паркетна підлога',
      'Власна ванна кімната',
    ],
  },
  {
    id:       'quad',
    name:     'Чотиримісний Делюкс',
    subtitle: 'Двоспальне ліжко · 25 м²',
    image:    ROOM_IMGS.quad,
    alt:      'Чотиримісний Делюкс — простора кімната для компанії',
    guests:   4,
    size:     25,
    desc:     'Просторий номер для сімей або компаній до 4 гостей. Диван, великий простір для відпочинку, терраса з панорамою. Мінікухня з усім необхідним.',
    amenities: [
      'Тераса з видом на місто',
      'Диван + зона відпочинку',
      'Мінікухня з духовкою',
      'Пральна машина',
      'Телевізор з плоским екраном',
      'Шумозахисні вікна',
      'Кавоварка',
      'Власна ванна кімната',
    ],
  },
  {
    id:       'family',
    name:     'Family з каміном',
    subtitle: 'King-size ліжко · 21 м²',
    image:    ROOM_IMGS.family,
    alt:      'Family номер з каміном і терасою',
    guests:   4,
    size:     21,
    desc:     "Сімейний номер з автентичним каміном — ідеальний для тих, хто хоче відчути атмосферу старовинного Кам'янця. Мармурова підлога, тераса, повна кухня.",
    amenities: [
      'Автентичний камін',
      'Тераса з панорамою',
      'Мінікухня повністю обладнана',
      'Пральна машина',
      'Мармурова підлога',
      'Телевізор з плоским екраном',
      'Кавоварка',
      'Власна ванна кімната',
    ],
    badge: 'Популярний вибір',
  },
];

function RoomCard({ room, index }) {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <article
      ref={ref}
      className={`room-card ${inView ? 'room-card--visible' : ''}`}
      style={{ transitionDelay: `${index * 0.15}s` }}
      aria-label={`Номер: ${room.name}`}
    >
      {/* Photo */}
      <div className="room-card__img-wrap">
        <img
          src={room.image}
          alt={room.alt}
          loading="lazy"
          className="room-card__img"
        />
        {room.badge && (
          <div className="room-card__badge">{room.badge}</div>
        )}
        <div className="room-card__meta">
          <span>👥 до {room.guests} гостей</span>
          <span>📐 {room.size} м²</span>
        </div>
      </div>

      {/* Content */}
      <div className="room-card__body">
        <h3 className="room-card__name">{room.name}</h3>
        <p className="room-card__subtitle">{room.subtitle}</p>
        <p className="room-card__desc">{room.desc}</p>

        {/* Amenities */}
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
