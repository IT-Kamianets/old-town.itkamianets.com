// sections/Services.jsx
// Hotel services + nearby landmarks — dark atmospheric section

import { useRevealClass, useInView } from '../hooks/useInView';
import './Services.css';

const services = [
  { icon: '📶', title: 'Безкоштовний Wi-Fi',    desc: 'Швидкий інтернет у всіх номерах і спільних зонах.' },
  { icon: '🚗', title: 'Безкоштовне паркування', desc: 'Парковка на вулиці поблизу готелю (потрібне бронювання).' },
  { icon: '☕', title: 'Спільна кухня',           desc: 'Повністю обладнана кухня для самостійного приготування.' },
  { icon: '🍳', title: 'Сніданок у номері',       desc: 'За попереднім замовленням — сніданок прямо в номер.' },
  { icon: '👨‍👩‍👧', title: 'Сімейні номери',        desc: 'Номери до 4 гостей — підходять для сімей з дітьми.' },
  { icon: '🔇', title: 'Шумозахист',              desc: 'Всі номери обладнані шумозахисними вікнами.' },
  { icon: '🏺', title: 'Спадок Поділля',          desc: "Ми поможемо скласти маршрут по пам'ятках Кам'янця." },
  { icon: '🗝️', title: 'Check-in 14:00–23:59',   desc: 'Зручний час заїзду. Check-out — до 11:00.' },
];

const landmarks = [
  { name: "Кам'янець-Подільська фортеця", dist: '11 хв пішки', icon: '🏰' },
  { name: 'Катедральний костьол',          dist: '6 хв пішки',  icon: '⛪' },
  { name: 'Музей Мініатюр',               dist: '5 хв пішки',  icon: '🏛️' },
  { name: 'Вірменська церква',             dist: '5 хв пішки',  icon: '⛪' },
  { name: 'Подільські Товтри',             dist: '2 хв пішки',  icon: '🌿' },
  { name: 'Центр міста',                   dist: '15 хв пішки', icon: '🗺️' },
];

function ServiceItem({ service, index }) {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`service-item ${inView ? 'service-item--visible' : ''}`}
      style={{ transitionDelay: `${index * 0.07}s` }}
    >
      <span className="service-item__icon" aria-hidden="true">{service.icon}</span>
      <div>
        <h3 className="service-item__title">{service.title}</h3>
        <p className="service-item__desc">{service.desc}</p>
      </div>
    </div>
  );
}

export default function Services() {
  const header = useRevealClass('');
  const map    = useRevealClass('reveal--right');

  return (
    <section id="services" className="section--alt services">
      <div className="services__dark-part">
        <div className="container">

          <div ref={header.ref} className={`section-header ${header.className}`} style={{ maxWidth: 600 }}>
            <p className="section-eyebrow" style={{ color: 'var(--color-stone)' }}>Сервіс та зручності</p>
            <div className="divider" />
            <h2 className="section-title" style={{ color: 'var(--color-white)' }}>
              Все необхідне<br />
              <em style={{ fontStyle: 'italic', color: 'var(--color-stone-light)' }}>для комфортного відпочинку</em>
            </h2>
          </div>

          <div className="services__grid">
            {services.map((s, i) => (
              <ServiceItem key={s.title} service={s} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Nearby landmarks strip */}
      <div className="container">
        <div ref={map.ref} className={`landmarks ${map.className}`}>
          <div className="landmarks__header">
            <p className="section-eyebrow">Що поруч</p>
            <h3 className="landmarks__title">Пам'ятки за кроком від вас</h3>
          </div>

          <ul className="landmarks__list" aria-label="Пам'ятки поблизу">
            {landmarks.map(({ name, dist, icon }) => (
              <li key={name} className="landmark-item">
                <span className="landmark-item__icon" aria-hidden="true">{icon}</span>
                <div>
                  <strong>{name}</strong>
                  <span>{dist}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
