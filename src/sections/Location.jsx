// sections/Location.jsx
// Map embed + how to get there + landmark distances

import { useRevealClass } from '../hooks/useInView';
import './Location.css';

// Address: вулиця П'ятницька, 8, Кам'янець-Подільський, Хмельницька область, 32301
const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2569.3!2d26.5850!3d48.6727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47319e8b8e8b8e8b%3A0x0!2z0JPQvtGB0YLQtdGA0ZbRjyBPbGQgVG93bg!5e0!3m2!1suk!2sua!4v1000000000000';

// Using OpenStreetMap as fallback (no API key required)
const OSM_URL =
  'https://www.openstreetmap.org/export/embed.html?bbox=26.576%2C48.669%2C26.592%2C48.678&layer=mapnik&marker=48.6727%2C26.5848';

const directions = [
  { how: '🚌 Автобус',    desc: 'Маршрутки до центру міста, зупинка «Польський ринок» — 2 хв пішки' },
  { how: '🚗 Авто',       desc: "Паркування на вул. П'ятницькій або на прилеглих вулицях" },
  { how: '🚆 Потяг',      desc: "Залізнична станція Кам'янець-Подільський — 10 хв на таксі" },
  { how: '✈️ Літак',      desc: 'Аеропорт Чернівці — 90 км, аеропорт Хмельницький — 100 км' },
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
                <span aria-hidden="true">📍</span>
                <div>
                  <strong>вулиця П'ятницька, 8</strong>
                  <span>Кам'янець-Подільський, Хмельницька область, 32301</span>
                </div>
              </div>
              <div className="location__address-line">
                <span aria-hidden="true">📞</span>
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
              {directions.map(({ how, desc }) => (
                <li key={how}>
                  <strong>{how}</strong>
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
