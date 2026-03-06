// components/Footer.jsx

import './Footer.css';

const YEAR = new Date().getFullYear();

const navCols = [
  {
    title: 'Готель',
    links: [
      { href: '#about', label: 'Про нас' },
      { href: '#rooms', label: 'Номери' },
      { href: '#services', label: 'Сервіси' },
      { href: '#gallery', label: 'Галерея' },
    ],
  },
  {
    title: 'Гостям',
    links: [
      { href: '#location', label: 'Як дістатися' },
      { href: '#location', label: 'Контакти' },
    ],
  },
];



export default function Footer() {
  return (
    <footer className="footer" aria-label="Нижній колонтитул сайту">
      <div className="footer__inner container">

        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <span>Old Town</span>
            <em>Гостерія</em>
          </div>
          <p className="footer__tagline">
            Кам'янець-Подільський,<br />
            Хмельницька область, Україна
          </p>
          <address className="footer__addr" aria-label="Контактна інформація">
            <a href="tel:+380673801949">067 380 1949</a>
            <a href="https://maps.google.com/?q=вулиця+П'ятницька+8+Кам'янець-Подільський" target="_blank" rel="noopener noreferrer">вул. П'ятницька, 8</a>
            <a href="https://www.instagram.com/oldtown_kp/?hl=ru" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <svg viewBox="0 0 24 24" width={14} height={14} fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              Instagram
            </a>
          </address>
        </div>

        {/* Right side navigation */}
        <div className="footer__nav-groups">
          <nav className="footer__nav-col" aria-label="Готель">
            <h3 className="footer__nav-title">Готель</h3>
            <ul>
              <li><a href="#about">Про нас</a></li>
              <li><a href="#rooms">Номери</a></li>
              <li><a href="#services">Сервіси</a></li>
              <li><a href="#gallery">Галерея</a></li>
            </ul>
          </nav>

          <div className="footer__nav-col-group">
            <nav className="footer__nav-col" aria-label="Гостям">
              <h3 className="footer__nav-title">Гостям</h3>
              <ul>
                <li><a href="#location">Як дістатися</a></li>
                <li><a href="#location">Контакти</a></li>
              </ul>
            </nav>

            <div className="footer__hours">
              <h3 className="footer__nav-title">Графік</h3>
              <ul>
                <li><span>Заїзд</span><strong>від 14:00</strong></li>
                <li><span>Виїзд</span><strong>до 11:00</strong></li>
                <li><span>Мови</span><strong>UA · EN</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom container">
        <p>
          © {YEAR} Гостерія «Old Town», Кам'янець-Подільський.
          Усі права захищені.
        </p>
        <p className="footer__bottom-dev">
          Розроблено з{' '}
          <svg viewBox="0 0 24 24" width={13} height={13} fill="currentColor"
            style={{ display: 'inline', verticalAlign: 'middle', marginBottom: 2, color: 'var(--color-burgundy)' }}
            aria-hidden="true">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>{' '}
          для Поділля
        </p>
      </div>
    </footer>
  );
}
