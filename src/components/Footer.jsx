// components/Footer.jsx

import './Footer.css';

const YEAR = new Date().getFullYear();

const navCols = [
  {
    title: 'Готель',
    links: [
      { href: '#about',    label: 'Про нас'      },
      { href: '#rooms',    label: 'Номери'        },
      { href: '#services', label: 'Сервіси'       },
      { href: '#gallery',  label: 'Галерея'       },
    ],
  },
  {
    title: 'Гостям',
    links: [
      { href: '#contact',  label: 'Забронювати'  },
      { href: '#location', label: 'Як дістатися' },
      { href: '#contact',  label: 'Контакти'     },
    ],
  },
];

// SVG-іконки соцмереж — замінити href на реальні посилання
const socials = [
  {
    href:  'https://www.instagram.com/YOUR_PROFILE',
    label: 'Instagram',
    icon: (
      <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor"
           strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" strokeWidth="0" />
      </svg>
    ),
  },
  {
    href:  'https://www.facebook.com/YOUR_PAGE',
    label: 'Facebook',
    icon: (
      <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    href:  'https://www.booking.com/hotel/ua/YOUR_HOTEL',
    label: 'Booking.com',
    icon: (
      <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" aria-hidden="true">
        <path d="M3 3h7v18H3zM13 3h8v4h-8zM13 10h8v4h-8zM13 17h8v4h-8z"/>
      </svg>
    ),
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
            <span>вул. П'ятницька, 8</span>
          </address>

          {/* Соціальні мережі */}
          <div className="footer__socials" aria-label="Соціальні мережі та платформи бронювання">
            {socials.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social"
                aria-label={label}
                title={label}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Nav columns */}
        {navCols.map(({ title, links }) => (
          <nav key={title} className="footer__nav-col" aria-label={title}>
            <h3 className="footer__nav-title">{title}</h3>
            <ul>
              {links.map(({ href, label }) => (
                <li key={label}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        {/* Hours */}
        <div className="footer__hours">
          <h3 className="footer__nav-title">Графік</h3>
          <ul>
            <li><span>Заїзд</span><strong>від 14:00</strong></li>
            <li><span>Виїзд</span><strong>до 11:00</strong></li>
            <li><span>Мови</span><strong>UA · EN</strong></li>
          </ul>
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
