// components/Footer.jsx
// Footer with logo, nav, socials, address, and copyright

import './Footer.css';

const YEAR = new Date().getFullYear();

const navCols = [
  {
    title: 'Готель',
    links: [
      { href: '#about',    label: 'Про нас'        },
      { href: '#rooms',    label: 'Номери'          },
      { href: '#services', label: 'Сервіси'         },
      { href: '#gallery',  label: 'Галерея'         },
    ],
  },
  {
    title: 'Гостям',
    links: [
      { href: '#contact',  label: 'Забронювати'    },
      { href: '#location', label: 'Як дістатися'   },
      { href: '#contact',  label: 'Контакти'       },
    ],
  },
];

// Update these with real social media links
const socials = [
  { href: 'https://www.instagram.com/', label: 'Instagram', icon: 'IG' },
  { href: 'https://www.facebook.com/',  label: 'Facebook',  icon: 'FB' },
  { href: 'https://www.booking.com/',   label: 'Booking',   icon: 'BK' },
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
          <div className="footer__socials" aria-label="Соціальні мережі та платформи бронювання">
            {socials.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social"
                aria-label={label}
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
            <li><span>Мови</span><strong>UA · EN · RU</strong></li>
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
          Розроблено з <svg viewBox="0 0 24 24" width={13} height={13} fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{display:'inline',verticalAlign:'middle',marginBottom:'2px',color:'var(--color-burgundy)'}}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> для Поділля
        </p>
      </div>
    </footer>
  );
}
