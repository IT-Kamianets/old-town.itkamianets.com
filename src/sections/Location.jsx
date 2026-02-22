// sections/Location.jsx
// Map embed + how to get there + landmark distances

import { useRevealClass } from '../hooks/useInView';
import { IconPin } from '../components/Icons';
import './Location.css';

// Address: вулиця П'ятницька, 8, Кам'янець-Подільський, Хмельницька область, 32301
const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2569.3!2d26.5850!3d48.6727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47319e8b8e8b8e8b%3A0x0!2z0JPQvtGB0YLQtdGA0ZbRjyBPbGQgVG93bg!5e0!3m2!1suk!2sua!4v1000000000000';

// Using OpenStreetMap as fallback (no API key required)
const OSM_URL =
  'https://www.openstreetmap.org/export/embed.html?bbox=26.576%2C48.669%2C26.592%2C48.678&layer=mapnik&marker=48.6727%2C26.5848';

// Simple inline SVGs for transport icons — thin stroke, currentColor
function IconBus() {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor"
         strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M3 9h18" />
      <circle cx="7.5" cy="19.5" r="1.5" />
      <circle cx="16.5" cy="19.5" r="1.5" />
      <path d="M7.5 18v-1M16.5 18v-1" />
    </svg>
  );
}

function IconCar() {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor"
         strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 17H3a1 1 0 0 1-1-1v-4l2-5h14l2 5v4a1 1 0 0 1-1 1h-2" />
      <circle cx="7.5" cy="17" r="2.5" />
      <circle cx="16.5" cy="17" r="2.5" />
      <line x1="10" y1="17" x2="14" y2="17" />
    </svg>
  );
}

function IconTrain() {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor"
         strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="3" width="16" height="14" rx="3" />
      <path d="M4 11h16" />
      <path d="M8 19l-2 2M16 19l2 2M8 19h8" />
      <circle cx="8.5" cy="16" r="1" fill="currentColor" />
      <circle cx="15.5" cy="16" r="1" fill="currentColor" />
    </svg>
  );
}

function IconPlane() {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor"
         strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21 4 21 4s-2 0-3.5 1.5L14 9 5.8 7.2C4.8 6.9 4 8 4 8l8 5-2 3" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor"
         strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 11.5 19.8 19.8 0 0 1 3 2.18 2 2 0 0 1 5 0h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L9.91 7.09a16 16 0 0 0 6 6l.71-.71a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

const directions = [
  { Icon: IconBus,   how: 'Автобус', desc: "Маршрутки до центру міста, зупинка «Польський ринок» — 2 хв пішки" },
  { Icon: IconCar,   how: 'Авто',    desc: "Паркування на вул. П'ятницькій або на прилеглих вулицях" },
  { Icon: IconTrain, how: 'Потяг',   desc: "Залізнична станція Кам'янець-Подільський — 10 хв на таксі" },
  { Icon: IconPlane, how: 'Літак',   desc: 'Аеропорт Чернівці — 90 км, аеропорт Хмельницький — 100 км' },
];

export default function Location() {
  const left  = useRevealClass('reveal--left');
  const right = useRevealClass('reveal--right');

  return (
    <section id="location" className="section section--alt location">
      <div className="container">

        <div className="location__layout">

          {/* Left — text + directions */}
          <div ref={left.ref} className={`location__text ${left.className}`}>
            <p className="section-eyebrow">Розташування</p>
            <div className="divider" />
            <h2 className="section-title">
              У серці<br />
              <em style={{ fontStyle: 'italic', color: 'var(--color-wood-light)' }}>Старого міста</em>
            </h2>

            <address className="location__address" aria-label="Адреса готелю">
              <div className="location__address-line">
                <span aria-hidden="true"><IconPin width={18} height={18} /></span>
                <div>
                  <strong>вулиця П'ятницька, 8</strong>
                  <span>Кам'янець-Подільський, Хмельницька область, 32301</span>
                </div>
              </div>
              <div className="location__address-line">
                <span aria-hidden="true"><IconPhone /></span>
                <a href="tel:+380673801949">067 380 1949</a>
              </div>
            </address>

            <div className="location__highlight">
              <p>
                Ми розташовані в самому центрі Старого міста — легко дістатися
                пішки від більшості пам'яток та ресторанів. До замку — 19 хвилин,
                до центральної площі — 15 хвилин.
              </p>
            </div>

            <h3 className="location__how-title">Як дістатися</h3>
            <ul className="location__directions" aria-label="Способи дістатися">
              {directions.map(({ Icon, how, desc }) => (
                <li key={how}>
                  <strong>
                    <span aria-hidden="true" style={{ display: 'inline-flex', verticalAlign: 'middle', marginRight: '0.4em' }}>
                      <Icon />
                    </span>
                    {how}
                  </strong>
                  <p>{desc}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — map */}
          <div ref={right.ref} className={`location__map-wrap ${right.className}`}>
            <div className="location__map">
              <iframe
                src={OSM_URL}
                title="Карта розташування Гостерії Old Town"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Інтерактивна карта розташування готелю"
              />
            </div>
            <a
              href="https://maps.google.com/?q=вулиця+П'ятницька+8+Кам'янець-Подільський"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark location__gmap-btn"
            >
              Відкрити в Google Maps ↗
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
